'use strict';

var JSBI = require('jsbi');
var multicall = require('../lib/hooks/multicall.cjs');
var React = require('react');
var useContract = require('./useContract.cjs');
var useENSAddress = require('./useENSAddress.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var JSBI__default = /*#__PURE__*/_interopDefaultLegacy(JSBI);

var CHAIN_DATA_ABI = [{
  inputs: [],
  name: "latestAnswer",
  outputs: [{
    internalType: "int256",
    name: "",
    type: "int256"
  }],
  stateMutability: "view",
  type: "function"
}];

/**
 * Returns the price of 1 gas in WEI for the currently selected network using the chainlink fast gas price oracle
 */
function useGasPrice() {
  var _useSingleCallResult$;
  var _useENSAddress = useENSAddress("fast-gas-gwei.data.eth"),
    address = _useENSAddress.address;
  var contract = useContract.useContract(address !== null && address !== void 0 ? address : undefined, CHAIN_DATA_ABI, false);
  var resultStr = (_useSingleCallResult$ = multicall.useSingleCallResult(contract, "latestAnswer").result) === null || _useSingleCallResult$ === void 0 || (_useSingleCallResult$ = _useSingleCallResult$[0]) === null || _useSingleCallResult$ === void 0 ? void 0 : _useSingleCallResult$.toString();
  return React.useMemo(function () {
    return typeof resultStr === "string" ? JSBI__default["default"].BigInt(resultStr) : undefined;
  }, [resultStr]);
}

module.exports = useGasPrice;
