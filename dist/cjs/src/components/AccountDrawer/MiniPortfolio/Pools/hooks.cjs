'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var sdkCore = require('@uniswap/sdk-core');
var UniswapInterfaceMulticall = require('../../../../../node_modules/@uniswap/v3-periphery/artifacts/contracts/lens/UniswapInterfaceMulticall.sol/UniswapInterfaceMulticall.cjs');
var NonfungiblePositionManager = require('../../../../../node_modules/@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.cjs');
var core = require('@web3-react/core');
var chains = require('../../../../constants/chains.cjs');
var providers = require('../../../../constants/providers.cjs');
var fallbackProvider = require('../../../../featureFlags/flags/fallbackProvider.cjs');
var typesAndHooks = require('../../../../graphql/data/__generated__/types-and-hooks.cjs');
var util = require('../../../../graphql/data/util.cjs');
var useStablecoinPrice = require('../../../../hooks/useStablecoinPrice.cjs');
var React = require('react');
require('@ethersproject/address');
var getContract = require('../../../../utils/getContract.cjs');
var currencyKey = require('../../../../utils/currencyKey.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

// Constructs a chain-to-contract map, using the wallet's provider when available
function useContractMultichain(addressMap, ABI, chainIds) {
  var _useWeb3React = core.useWeb3React(),
    walletChainId = _useWeb3React.chainId,
    walletProvider = _useWeb3React.provider;
  var networkProviders = fallbackProvider.useFallbackProviderEnabled() ? providers.RPC_PROVIDERS : providers.DEPRECATED_RPC_PROVIDERS;
  return React.useMemo(function () {
    var relevantChains = chainIds !== null && chainIds !== void 0 ? chainIds : Object.keys(addressMap).map(function (chainId) {
      return parseInt(chainId);
    }).filter(function (chainId) {
      return chains.isSupportedChain(chainId);
    });
    return relevantChains.reduce(function (acc, chainId) {
      var provider = walletProvider && walletChainId === chainId ? walletProvider : chains.isSupportedChain(chainId) ? networkProviders[chainId] : undefined;
      if (provider) {
        var _addressMap$chainId;
        acc[chainId] = getContract.getContract((_addressMap$chainId = addressMap[chainId]) !== null && _addressMap$chainId !== void 0 ? _addressMap$chainId : "", ABI, provider);
      }
      return acc;
    }, {});
  }, [ABI, addressMap, chainIds, networkProviders, walletChainId, walletProvider]);
}
function useV3ManagerContracts(chainIds) {
  return useContractMultichain(sdkCore.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES, NonfungiblePositionManager["default"].abi, chainIds);
}
function useInterfaceMulticallContracts(chainIds) {
  return useContractMultichain(sdkCore.MULTICALL_ADDRESSES, UniswapInterfaceMulticall["default"].abi, chainIds);
}
function usePoolPriceMap(positions) {
  var contracts = React.useMemo(function () {
    if (!positions || !positions.length) return [];
    // Avoids fetching duplicate tokens by placing in map
    var contractMap = positions.reduce(function (acc, _ref) {
      var _ref$pool = _ref.pool,
        token0 = _ref$pool.token0,
        token1 = _ref$pool.token1;
      acc[currencyKey.currencyKey(token0)] = util.toContractInput(token0);
      acc[currencyKey.currencyKey(token1)] = util.toContractInput(token1);
      return acc;
    }, {});
    return Object.values(contractMap);
  }, [positions]);
  var _useUniswapPricesQuer = typesAndHooks.useUniswapPricesQuery({
      variables: {
        contracts: contracts
      },
      skip: !contracts.length
    }),
    data = _useUniswapPricesQuer.data,
    loading = _useUniswapPricesQuer.loading;
  var priceMap = React.useMemo(function () {
    var _data$tokens$reduce, _data$tokens;
    return (_data$tokens$reduce = data === null || data === void 0 || (_data$tokens = data.tokens) === null || _data$tokens === void 0 ? void 0 : _data$tokens.reduce(function (acc, current) {
      var _current$project;
      if (current) acc[currencyKey.currencyKeyFromGraphQL(current)] = (_current$project = current.project) === null || _current$project === void 0 || (_current$project = _current$project.markets) === null || _current$project === void 0 || (_current$project = _current$project[0]) === null || _current$project === void 0 || (_current$project = _current$project.price) === null || _current$project === void 0 ? void 0 : _current$project.value;
      return acc;
    }, {})) !== null && _data$tokens$reduce !== void 0 ? _data$tokens$reduce : {};
  }, [data === null || data === void 0 ? void 0 : data.tokens]);
  return {
    priceMap: priceMap,
    pricesLoading: loading && !data
  };
}
function useFeeValue(token, fee, queriedPrice) {
  var stablecoinPrice = useStablecoinPrice["default"](!queriedPrice ? token : undefined);
  return React.useMemo(function () {
    // Prefers gql price, as fetching stablecoinPrice will trigger multiple infura calls for each pool position
    var price = queriedPrice !== null && queriedPrice !== void 0 ? queriedPrice : stablecoinPrice ? parseFloat(stablecoinPrice.toSignificant()) : undefined;
    var feeValue = fee && price ? fee * price : undefined;
    return [price, feeValue];
  }, [fee, queriedPrice, stablecoinPrice]);
}
function useFeeValues(position) {
  var _position$fees, _position$prices, _position$fees2, _position$prices2;
  var _useFeeValue = useFeeValue(position.pool.token0, (_position$fees = position.fees) === null || _position$fees === void 0 ? void 0 : _position$fees[0], (_position$prices = position.prices) === null || _position$prices === void 0 ? void 0 : _position$prices[0]),
    _useFeeValue2 = _slicedToArray__default["default"](_useFeeValue, 2),
    priceA = _useFeeValue2[0],
    feeValueA = _useFeeValue2[1];
  var _useFeeValue3 = useFeeValue(position.pool.token1, (_position$fees2 = position.fees) === null || _position$fees2 === void 0 ? void 0 : _position$fees2[1], (_position$prices2 = position.prices) === null || _position$prices2 === void 0 ? void 0 : _position$prices2[1]),
    _useFeeValue4 = _slicedToArray__default["default"](_useFeeValue3, 2),
    priceB = _useFeeValue4[0],
    feeValueB = _useFeeValue4[1];
  return {
    priceA: priceA,
    priceB: priceB,
    fees: (feeValueA || 0) + (feeValueB || 0)
  };
}

exports.useFeeValues = useFeeValues;
exports.useInterfaceMulticallContracts = useInterfaceMulticallContracts;
exports.usePoolPriceMap = usePoolPriceMap;
exports.useV3ManagerContracts = useV3ManagerContracts;