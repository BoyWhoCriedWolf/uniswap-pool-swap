import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { ChainId, V3_CORE_FACTORY_ADDRESSES } from '@uniswap/sdk-core';
import { tickToPrice, TICK_SPACINGS, nearestUsableTick, Pool } from '@uniswap/v3-sdk';
import { useWeb3React } from '@web3-react/core';
import { ZERO_ADDRESS } from '../constants/misc.js';
import { useAllV3TicksQuery } from '../graphql/thegraph/__generated__/types-and-hooks.js';
import { apolloClient } from '../graphql/thegraph/apollo.js';
import JSBI from 'jsbi';
import { useSingleContractMultipleData } from '../lib/hooks/multicall.js';
import ms from 'ms';
import { useMemo, useState, useEffect } from 'react';
import computeSurroundingTicks from '../utils/computeSurroundingTicks.js';
import { useTickLens } from './useContract.js';
import { usePool, PoolState } from './usePools.js';

var PRICE_FIXED_DIGITS = 8;
var CHAIN_IDS_MISSING_SUBGRAPH_DATA = [ChainId.ARBITRUM_ONE, ChainId.ARBITRUM_GOERLI];

// Tick with fields parsed to JSBIs, and active liquidity computed.

var REFRESH_FREQUENCY = {
  blocksPerFetch: 2
};
var getActiveTick = function getActiveTick(tickCurrent, feeAmount) {
  return tickCurrent && feeAmount ? Math.floor(tickCurrent / TICK_SPACINGS[feeAmount]) * TICK_SPACINGS[feeAmount] : undefined;
};
var bitmapIndex = function bitmapIndex(tick, tickSpacing) {
  return Math.floor(tick / tickSpacing / 256);
};
function useTicksFromTickLens(currencyA, currencyB, feeAmount) {
  var numSurroundingTicks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 125;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tickDataLatestSynced = _useState2[0],
    setTickDataLatestSynced = _useState2[1];
  var _usePool = usePool(currencyA, currencyB, feeAmount),
    _usePool2 = _slicedToArray(_usePool, 2),
    poolState = _usePool2[0],
    pool = _usePool2[1];
  var tickSpacing = feeAmount && TICK_SPACINGS[feeAmount];

  // Find nearest valid tick for pool in case tick is not initialized.
  var activeTick = pool !== null && pool !== void 0 && pool.tickCurrent && tickSpacing ? nearestUsableTick(pool === null || pool === void 0 ? void 0 : pool.tickCurrent, tickSpacing) : undefined;
  var _useWeb3React = useWeb3React(),
    chainId = _useWeb3React.chainId;
  var poolAddress = currencyA && currencyB && feeAmount && poolState === PoolState.EXISTS ? Pool.getAddress(currencyA === null || currencyA === void 0 ? void 0 : currencyA.wrapped, currencyB === null || currencyB === void 0 ? void 0 : currencyB.wrapped, feeAmount, undefined, chainId ? V3_CORE_FACTORY_ADDRESSES[chainId] : undefined) : undefined;

  // it is also possible to grab all tick data but it is extremely slow
  // bitmapIndex(nearestUsableTick(TickMath.MIN_TICK, tickSpacing), tickSpacing)
  var minIndex = useMemo(function () {
    return tickSpacing && activeTick ? bitmapIndex(activeTick - numSurroundingTicks * tickSpacing, tickSpacing) : undefined;
  }, [tickSpacing, activeTick, numSurroundingTicks]);
  var maxIndex = useMemo(function () {
    return tickSpacing && activeTick ? bitmapIndex(activeTick + numSurroundingTicks * tickSpacing, tickSpacing) : undefined;
  }, [tickSpacing, activeTick, numSurroundingTicks]);
  var tickLensArgs = useMemo(function () {
    return maxIndex && minIndex && poolAddress && poolAddress !== ZERO_ADDRESS ? new Array(maxIndex - minIndex + 1).fill(0).map(function (_, i) {
      return i + minIndex;
    }).map(function (wordIndex) {
      return [poolAddress, wordIndex];
    }) : [];
  }, [minIndex, maxIndex, poolAddress]);
  var tickLens = useTickLens();
  var callStates = useSingleContractMultipleData(tickLensArgs.length > 0 ? tickLens : undefined, "getPopulatedTicksInWord", tickLensArgs, REFRESH_FREQUENCY);
  var isError = useMemo(function () {
    return callStates.some(function (_ref) {
      var error = _ref.error;
      return error;
    });
  }, [callStates]);
  var isLoading = useMemo(function () {
    return callStates.some(function (_ref2) {
      var loading = _ref2.loading;
      return loading;
    });
  }, [callStates]);
  var IsSyncing = useMemo(function () {
    return callStates.some(function (_ref3) {
      var syncing = _ref3.syncing;
      return syncing;
    });
  }, [callStates]);
  var isValid = useMemo(function () {
    return callStates.some(function (_ref4) {
      var valid = _ref4.valid;
      return valid;
    });
  }, [callStates]);
  var tickData = useMemo(function () {
    return callStates.map(function (_ref5) {
      var result = _ref5.result;
      return result === null || result === void 0 ? void 0 : result.populatedTicks;
    }).reduce(function (accumulator, current) {
      var _current$map;
      return [].concat(_toConsumableArray(accumulator), _toConsumableArray((_current$map = current === null || current === void 0 ? void 0 : current.map(function (tickData) {
        return {
          tick: tickData.tick,
          liquidityNet: JSBI.BigInt(tickData.liquidityNet)
        };
      })) !== null && _current$map !== void 0 ? _current$map : []));
    }, []);
  }, [callStates]);

  // reset on input change
  useEffect(function () {
    setTickDataLatestSynced([]);
  }, [currencyA, currencyB, feeAmount]);

  // return the latest synced tickData even if we are still loading the newest data
  useEffect(function () {
    if (!IsSyncing && !isLoading && !isError && isValid) {
      setTickDataLatestSynced(tickData.sort(function (a, b) {
        return a.tick - b.tick;
      }));
    }
  }, [isError, isLoading, IsSyncing, tickData, isValid]);
  return useMemo(function () {
    return {
      isLoading: isLoading,
      IsSyncing: IsSyncing,
      isError: isError,
      isValid: isValid,
      tickData: tickDataLatestSynced
    };
  }, [isLoading, IsSyncing, isError, isValid, tickDataLatestSynced]);
}
function useTicksFromSubgraph(currencyA, currencyB, feeAmount) {
  var skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var _useWeb3React2 = useWeb3React(),
    chainId = _useWeb3React2.chainId;
  var poolAddress = currencyA && currencyB && feeAmount ? Pool.getAddress(currencyA === null || currencyA === void 0 ? void 0 : currencyA.wrapped, currencyB === null || currencyB === void 0 ? void 0 : currencyB.wrapped, feeAmount, undefined, chainId ? V3_CORE_FACTORY_ADDRESSES[chainId] : undefined) : undefined;
  return useAllV3TicksQuery({
    variables: {
      poolAddress: poolAddress === null || poolAddress === void 0 ? void 0 : poolAddress.toLowerCase(),
      skip: skip
    },
    skip: !poolAddress,
    pollInterval: ms("30s"),
    client: apolloClient
  });
}
var MAX_THE_GRAPH_TICK_FETCH_VALUE = 1000;
// Fetches all ticks for a given pool
function useAllV3Ticks(currencyA, currencyB, feeAmount) {
  var useSubgraph = currencyA ? !CHAIN_IDS_MISSING_SUBGRAPH_DATA.includes(currencyA.chainId) : true;
  var tickLensTickData = useTicksFromTickLens(!useSubgraph ? currencyA : undefined, currencyB, feeAmount);
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    skipNumber = _useState4[0],
    setSkipNumber = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    subgraphTickData = _useState6[0],
    setSubgraphTickData = _useState6[1];
  var _useTicksFromSubgraph = useTicksFromSubgraph(useSubgraph ? currencyA : undefined, currencyB, feeAmount, skipNumber),
    data = _useTicksFromSubgraph.data,
    error = _useTicksFromSubgraph.error,
    isLoading = _useTicksFromSubgraph.loading;
  useEffect(function () {
    if (data !== null && data !== void 0 && data.ticks.length) {
      setSubgraphTickData(function (tickData) {
        return [].concat(_toConsumableArray(tickData), _toConsumableArray(data.ticks));
      });
      if (data.ticks.length === MAX_THE_GRAPH_TICK_FETCH_VALUE) {
        setSkipNumber(function (skipNumber) {
          return skipNumber + MAX_THE_GRAPH_TICK_FETCH_VALUE;
        });
      }
    }
  }, [data === null || data === void 0 ? void 0 : data.ticks]);
  return {
    isLoading: useSubgraph ? isLoading || (data === null || data === void 0 ? void 0 : data.ticks.length) === MAX_THE_GRAPH_TICK_FETCH_VALUE : tickLensTickData.isLoading,
    error: useSubgraph ? error : tickLensTickData.isError,
    ticks: useSubgraph ? subgraphTickData : tickLensTickData.tickData
  };
}
function usePoolActiveLiquidity(currencyA, currencyB, feeAmount) {
  var pool = usePool(currencyA, currencyB, feeAmount);

  // Find nearest valid tick for pool in case tick is not initialized.
  var activeTick = useMemo(function () {
    var _pool$;
    return getActiveTick((_pool$ = pool[1]) === null || _pool$ === void 0 ? void 0 : _pool$.tickCurrent, feeAmount);
  }, [pool, feeAmount]);
  var _useAllV3Ticks = useAllV3Ticks(currencyA, currencyB, feeAmount),
    isLoading = _useAllV3Ticks.isLoading,
    error = _useAllV3Ticks.error,
    ticks = _useAllV3Ticks.ticks;
  return useMemo(function () {
    var _pool$1$liquidity, _pool$2;
    if (!currencyA || !currencyB || activeTick === undefined || pool[0] !== PoolState.EXISTS || !ticks || ticks.length === 0 || isLoading) {
      return {
        isLoading: isLoading || pool[0] === PoolState.LOADING,
        error: error,
        activeTick: activeTick,
        data: undefined
      };
    }
    var token0 = currencyA === null || currencyA === void 0 ? void 0 : currencyA.wrapped;
    var token1 = currencyB === null || currencyB === void 0 ? void 0 : currencyB.wrapped;

    // find where the active tick would be to partition the array
    // if the active tick is initialized, the pivot will be an element
    // if not, take the previous tick as pivot
    var pivot = ticks.findIndex(function (_ref6) {
      var tick = _ref6.tick;
      return tick > activeTick;
    }) - 1;
    if (pivot < 0) {
      // consider setting a local error
      console.error("TickData pivot not found");
      return {
        isLoading: isLoading,
        error: error,
        activeTick: activeTick,
        data: undefined
      };
    }
    var activeTickProcessed = {
      liquidityActive: JSBI.BigInt((_pool$1$liquidity = (_pool$2 = pool[1]) === null || _pool$2 === void 0 ? void 0 : _pool$2.liquidity) !== null && _pool$1$liquidity !== void 0 ? _pool$1$liquidity : 0),
      tick: activeTick,
      liquidityNet: Number(ticks[pivot].tick) === activeTick ? JSBI.BigInt(ticks[pivot].liquidityNet) : JSBI.BigInt(0),
      price0: tickToPrice(token0, token1, activeTick).toFixed(PRICE_FIXED_DIGITS)
    };
    var subsequentTicks = computeSurroundingTicks(token0, token1, activeTickProcessed, ticks, pivot, true);
    var previousTicks = computeSurroundingTicks(token0, token1, activeTickProcessed, ticks, pivot, false);
    var ticksProcessed = previousTicks.concat(activeTickProcessed).concat(subsequentTicks);
    return {
      isLoading: isLoading,
      error: error,
      activeTick: activeTick,
      data: ticksProcessed
    };
  }, [currencyA, currencyB, activeTick, pool, ticks, isLoading, error]);
}

export { usePoolActiveLiquidity };