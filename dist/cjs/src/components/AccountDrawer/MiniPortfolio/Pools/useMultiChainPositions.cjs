'use strict';

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var sdkCore = require('@uniswap/sdk-core');
var IUniswapV3PoolState = require('../../../../../node_modules/@uniswap/v3-core/artifacts/contracts/interfaces/pool/IUniswapV3PoolState.sol/IUniswapV3PoolState.cjs');
var v3Sdk = require('@uniswap/v3-sdk');
var tokens = require('../../../../constants/tokens.cjs');
var ethers = require('ethers/lib/ethers');
var utils = require('ethers/lib/utils');
var React = require('react');
var currencyKey = require('../../../../utils/currencyKey.cjs');
var cache = require('./cache.cjs');
var getTokensAsync = require('./getTokensAsync.cjs');
var hooks = require('./hooks.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createPositionInfo(owner, chainId, details, slot0, tokenA, tokenB) {
  /* Instantiates a Pool with a hardcoded 0 liqudity value since the sdk only uses this value for swap state and this avoids an RPC fetch */
  var pool = new v3Sdk.Pool(tokenA, tokenB, details.fee, slot0.sqrtPriceX96.toString(), 0, slot0.tick);
  var position = new v3Sdk.Position({
    pool: pool,
    liquidity: details.liquidity.toString(),
    tickLower: details.tickLower,
    tickUpper: details.tickUpper
  });
  var inRange = slot0.tick >= details.tickLower && slot0.tick < details.tickUpper;
  var closed = details.liquidity.eq(0);
  return {
    owner: owner,
    chainId: chainId,
    pool: pool,
    position: position,
    details: details,
    inRange: inRange,
    closed: closed
  };
}
var MAX_UINT128 = ethers.BigNumber.from(2).pow(128).sub(1);
var DEFAULT_CHAINS = [sdkCore.ChainId.MAINNET, sdkCore.ChainId.ARBITRUM_ONE, sdkCore.ChainId.OPTIMISM, sdkCore.ChainId.POLYGON, sdkCore.ChainId.CELO, sdkCore.ChainId.BNB, sdkCore.ChainId.AVALANCHE, sdkCore.ChainId.BASE];
/**
 * Returns all positions for a given account on multiple chains.
 *
 * This hook doesn't use the redux-multicall library to avoid having to manually fetching blocknumbers for each chain.
 *
 * @param account - account to fetch positions for
 * @param chains - chains to fetch positions from
 * @returns positions, fees
 */
function useMultiChainPositions(account) {
  var chains = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CHAINS;
  var pms = hooks.useV3ManagerContracts(chains);
  var multicalls = hooks.useInterfaceMulticallContracts(chains);
  var getTokens = cache.useGetCachedTokens(chains);
  var poolAddressCache = cache.usePoolAddressCache();
  var _useCachedPositions = cache.useCachedPositions(account),
    _useCachedPositions2 = _slicedToArray__default["default"](_useCachedPositions, 2),
    cachedPositions = _useCachedPositions2[0],
    setPositions = _useCachedPositions2[1];
  var positions = cachedPositions === null || cachedPositions === void 0 ? void 0 : cachedPositions.result;
  var positionsFetching = React.useRef(false);
  var positionsLoading = !(cachedPositions !== null && cachedPositions !== void 0 && cachedPositions.result) && positionsFetching.current;
  var _useState = React.useState({}),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    feeMap = _useState2[0],
    setFeeMap = _useState2[1];
  var _usePoolPriceMap = hooks.usePoolPriceMap(positions),
    priceMap = _usePoolPriceMap.priceMap,
    pricesLoading = _usePoolPriceMap.pricesLoading;
  var fetchPositionFees = React.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(pm, positionIds, chainId) {
      var callData, fees;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            callData = positionIds.map(function (id) {
              return pm["interface"].encodeFunctionData("collect", [{
                tokenId: id,
                recipient: account,
                amount0Max: MAX_UINT128,
                amount1Max: MAX_UINT128
              }]);
            });
            _context.next = 3;
            return pm.callStatic.multicall(callData);
          case 3:
            fees = _context.sent.reduce(function (acc, feeBytes, index) {
              var key = chainId.toString() + positionIds[index];
              acc[key] = pm["interface"].decodeFunctionResult("collect", feeBytes);
              return acc;
            }, {});
            setFeeMap(function (prev) {
              return _objectSpread(_objectSpread({}, prev), fees);
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }(), [account]);
  var fetchPositionIds = React.useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(pm, balance) {
      var callData;
      return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            callData = Array.from({
              length: balance.toNumber()
            }, function (_, i) {
              return pm["interface"].encodeFunctionData("tokenOfOwnerByIndex", [account, i]);
            });
            _context2.next = 3;
            return pm.callStatic.multicall(callData);
          case 3:
            return _context2.abrupt("return", _context2.sent.map(function (idByte) {
              return ethers.BigNumber.from(idByte);
            }));
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }(), [account]);
  var fetchPositionDetails = React.useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(pm, positionIds) {
      var callData;
      return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            callData = positionIds.map(function (id) {
              return pm["interface"].encodeFunctionData("positions", [id]);
            });
            _context3.next = 3;
            return pm.callStatic.multicall(callData);
          case 3:
            return _context3.abrupt("return", _context3.sent.map(function (positionBytes, index) {
              return _objectSpread(_objectSpread({}, pm["interface"].decodeFunctionResult("positions", positionBytes)), {}, {
                tokenId: positionIds[index]
              });
            }));
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }(), []);

  // Combines PositionDetails with Pool data to build our return type
  var fetchPositionInfo = React.useCallback( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee4(positionDetails, chainId, multicall) {
      var poolInterface, tokens$1, calls, poolPairs;
      return _regeneratorRuntime__default["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            poolInterface = new utils.Interface(IUniswapV3PoolState["default"].abi);
            _context4.next = 3;
            return getTokens(positionDetails.flatMap(function (details) {
              return [details.token0, details.token1];
            }), chainId);
          case 3:
            tokens$1 = _context4.sent;
            calls = [];
            poolPairs = [];
            positionDetails.forEach(function (details) {
              var _tokens$details$token, _tokens$details$token2;
              var tokenA = (_tokens$details$token = tokens$1[details.token0]) !== null && _tokens$details$token !== void 0 ? _tokens$details$token : new sdkCore.Token(chainId, details.token0, tokens.DEFAULT_ERC20_DECIMALS);
              var tokenB = (_tokens$details$token2 = tokens$1[details.token1]) !== null && _tokens$details$token2 !== void 0 ? _tokens$details$token2 : new sdkCore.Token(chainId, details.token1, tokens.DEFAULT_ERC20_DECIMALS);
              var poolAddress = poolAddressCache.get(details, chainId);
              if (!poolAddress) {
                var factoryAddress = sdkCore.V3_CORE_FACTORY_ADDRESSES[chainId];
                poolAddress = v3Sdk.computePoolAddress({
                  factoryAddress: factoryAddress,
                  tokenA: tokenA,
                  tokenB: tokenB,
                  fee: details.fee
                });
                poolAddressCache.set(details, chainId, poolAddress);
              }
              poolPairs.push([tokenA, tokenB]);
              calls.push({
                target: poolAddress,
                callData: poolInterface.encodeFunctionData("slot0"),
                gasLimit: getTokensAsync.DEFAULT_GAS_LIMIT
              });
            }, []);
            _context4.next = 9;
            return multicall.callStatic.multicall(calls);
          case 9:
            return _context4.abrupt("return", _context4.sent.returnData.reduce(function (acc, result, i) {
              if (result.success) {
                var slot0 = poolInterface.decodeFunctionResult("slot0", result.returnData);
                acc.push(createPositionInfo.apply(void 0, [account, chainId, positionDetails[i], slot0].concat(_toConsumableArray__default["default"](poolPairs[i]))));
              } else {
                console.debug("slot0 fetch errored", result);
              }
              return acc;
            }, []));
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x8, _x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }(), [account, poolAddressCache, getTokens]);
  var fetchPositionsForChain = React.useCallback( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee5(chainId) {
      var pm, multicall, balance, positionIds, postionDetails;
      return _regeneratorRuntime__default["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            pm = pms[chainId];
            multicall = multicalls[chainId];
            _context5.next = 5;
            return pm === null || pm === void 0 ? void 0 : pm.balanceOf(account);
          case 5:
            balance = _context5.sent;
            if (!(!pm || !multicall || balance.lt(1))) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return", []);
          case 8:
            _context5.next = 10;
            return fetchPositionIds(pm, balance);
          case 10:
            positionIds = _context5.sent;
            // Fetches fees in the background and stores them separetely from the results of this function
            fetchPositionFees(pm, positionIds, chainId);
            _context5.next = 14;
            return fetchPositionDetails(pm, positionIds);
          case 14:
            postionDetails = _context5.sent;
            return _context5.abrupt("return", fetchPositionInfo(postionDetails, chainId, multicall));
          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](0);
            console.error("Failed to fetch positions for chain ".concat(chainId), _context5.t0);
            return _context5.abrupt("return", []);
          case 22:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 18]]);
    }));
    return function (_x11) {
      return _ref5.apply(this, arguments);
    };
  }(), [account, fetchPositionDetails, fetchPositionFees, fetchPositionIds, fetchPositionInfo, pms, multicalls]);
  var fetchAllPositions = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee6() {
    var positions;
    return _regeneratorRuntime__default["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          positionsFetching.current = true;
          _context6.next = 3;
          return Promise.all(chains.map(fetchPositionsForChain));
        case 3:
          positions = _context6.sent.flat();
          positionsFetching.current = false;
          setPositions(positions);
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })), [chains, fetchPositionsForChain, setPositions]);

  // Fetches positions when existing positions are stale and the document has focus
  React.useEffect(function () {
    if (positionsFetching.current || (cachedPositions === null || cachedPositions === void 0 ? void 0 : cachedPositions.stale) === false) return;else if (document.hasFocus()) {
      fetchAllPositions();
    } else {
      // Avoids refetching positions until the user returns to Interface to avoid polling unnused rpc data
      var onFocus = function onFocus() {
        fetchAllPositions();
        window.removeEventListener("focus", onFocus);
      };
      window.addEventListener("focus", onFocus);
      return function () {
        window.removeEventListener("focus", onFocus);
      };
    }
    return;
  }, [fetchAllPositions, positionsFetching, cachedPositions === null || cachedPositions === void 0 ? void 0 : cachedPositions.stale]);
  var positionsWithFeesAndPrices = React.useMemo(function () {
    return positions === null || positions === void 0 ? void 0 : positions.map(function (position) {
      var _feeMap$key, _feeMap$key2;
      var key = position.chainId.toString() + position.details.tokenId;
      var fees = feeMap[key] ? [
      // We parse away from SDK/ethers types so fees can be multiplied by primitive number prices
      parseFloat(sdkCore.CurrencyAmount.fromRawAmount(position.pool.token0, (_feeMap$key = feeMap[key]) === null || _feeMap$key === void 0 ? void 0 : _feeMap$key[0].toString()).toExact()), parseFloat(sdkCore.CurrencyAmount.fromRawAmount(position.pool.token1, (_feeMap$key2 = feeMap[key]) === null || _feeMap$key2 === void 0 ? void 0 : _feeMap$key2[1].toString()).toExact())] : undefined;
      var prices = [priceMap[currencyKey.currencyKey(position.pool.token0)], priceMap[currencyKey.currencyKey(position.pool.token1)]];
      return _objectSpread(_objectSpread({}, position), {}, {
        fees: fees,
        prices: prices
      });
    });
  }, [feeMap, positions, priceMap]);
  return {
    positions: positionsWithFeesAndPrices,
    loading: pricesLoading || positionsLoading
  };
}

module.exports = useMultiChainPositions;