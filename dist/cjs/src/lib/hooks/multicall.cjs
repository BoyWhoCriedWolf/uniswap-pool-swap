'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkCore = require('@uniswap/sdk-core');
var core = require('@web3-react/core');
var useBlockNumber = require('./useBlockNumber.cjs');
var multicall = require('../state/multicall.cjs');
var reduxMulticall = require('@uniswap/redux-multicall');

// Create wrappers for hooks so consumers don't need to get latest block themselves
function useMultipleContractSingleData() {
  var _multicall$hooks;
  var _useCallContext = useCallContext(),
    chainId = _useCallContext.chainId,
    latestBlock = _useCallContext.latestBlock;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return (_multicall$hooks = multicall["default"].hooks).useMultipleContractSingleData.apply(_multicall$hooks, [chainId, latestBlock].concat(args));
}
function useSingleCallResult() {
  var _multicall$hooks2;
  var _useCallContext2 = useCallContext(),
    chainId = _useCallContext2.chainId,
    latestBlock = _useCallContext2.latestBlock;
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return (_multicall$hooks2 = multicall["default"].hooks).useSingleCallResult.apply(_multicall$hooks2, [chainId, latestBlock].concat(args));
}
function useMainnetSingleCallResult() {
  var _multicall$hooks3;
  var latestMainnetBlock = useBlockNumber.useMainnetBlockNumber();
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  return (_multicall$hooks3 = multicall["default"].hooks).useSingleCallResult.apply(_multicall$hooks3, [sdkCore.ChainId.MAINNET, latestMainnetBlock].concat(args));
}
function useSingleContractMultipleData() {
  var _multicall$hooks4;
  var _useCallContext3 = useCallContext(),
    chainId = _useCallContext3.chainId,
    latestBlock = _useCallContext3.latestBlock;
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }
  return (_multicall$hooks4 = multicall["default"].hooks).useSingleContractMultipleData.apply(_multicall$hooks4, [chainId, latestBlock].concat(args));
}
function useCallContext() {
  var _useWeb3React = core.useWeb3React(),
    chainId = _useWeb3React.chainId;
  var latestBlock = useBlockNumber["default"]();
  return {
    chainId: chainId,
    latestBlock: latestBlock
  };
}

Object.defineProperty(exports, 'NEVER_RELOAD', {
  enumerable: true,
  get: function () { return reduxMulticall.NEVER_RELOAD; }
});
exports.useMainnetSingleCallResult = useMainnetSingleCallResult;
exports.useMultipleContractSingleData = useMultipleContractSingleData;
exports.useSingleCallResult = useSingleCallResult;
exports.useSingleContractMultipleData = useSingleContractMultipleData;