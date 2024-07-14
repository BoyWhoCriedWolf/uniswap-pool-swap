'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var sdkCore = require('@uniswap/sdk-core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _FALLBACK_URLS, _RPC_URLS;

// const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
var INFURA_KEY = "4bf032f2d38a4ed6bb975b80d6340847";
// const QUICKNODE_MAINNET_RPC_URL =
//   process.env.REACT_APP_QUICKNODE_MAINNET_RPC_URL;
var QUICKNODE_MAINNET_RPC_URL = "https://magical-alien-tab.quiknode.pro/669e87e569a8277d3fbd9e202f9df93189f19f4c";
// const QUICKNODE_BNB_RPC_URL = process.env.REACT_APP_BNB_RPC_URL;
var QUICKNODE_BNB_RPC_URL = "https://rough-sleek-hill.bsc.quiknode.pro/413cc98cbc776cda8fdf1d0f47003583ff73d9bf";

/**
 * Fallback JSON-RPC endpoints.
 * These are used if the integrator does not provide an endpoint, or if the endpoint does not work.
 *
 * MetaMask allows switching to any URL, but displays a warning if it is not on the "Safe" list:
 * https://github.com/MetaMask/metamask-mobile/blob/bdb7f37c90e4fc923881a07fca38d4e77c73a579/app/core/RPCMethods/wallet_addEthereumChain.js#L228-L235
 * https://chainid.network/chains.json
 *
 * These "Safe" URLs are listed first, followed by other fallback URLs, which are taken from chainlist.org.
 */
var FALLBACK_URLS = (_FALLBACK_URLS = {}, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_FALLBACK_URLS, sdkCore.ChainId.MAINNET, [
// "Safe" URLs
"https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com",
// "Fallback" URLs
"https://rpc.ankr.com/eth", "https://eth-mainnet.public.blastapi.io"]), sdkCore.ChainId.GOERLI, [
// "Safe" URLs
"https://rpc.goerli.mudit.blog/",
// "Fallback" URLs
"https://rpc.ankr.com/eth_goerli"]), sdkCore.ChainId.SEPOLIA, [
// "Safe" URLs
"https://rpc.sepolia.dev/",
// "Fallback" URLs
"https://rpc.sepolia.org/", "https://rpc2.sepolia.org/", "https://rpc.sepolia.online/", "https://www.sepoliarpc.space/", "https://rpc-sepolia.rockx.com/", "https://rpc.bordel.wtf/sepolia"]), sdkCore.ChainId.POLYGON, [
// "Safe" URLs
"https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com"]), sdkCore.ChainId.POLYGON_MUMBAI, [
// "Safe" URLs
"https://matic-mumbai.chainstacklabs.com", "https://rpc-mumbai.maticvigil.com", "https://matic-testnet-archive-rpc.bwarelabs.com"]), sdkCore.ChainId.ARBITRUM_ONE, [
// "Safe" URLs
"https://arb1.arbitrum.io/rpc",
// "Fallback" URLs
"https://arbitrum.public-rpc.com"]), sdkCore.ChainId.ARBITRUM_GOERLI, [
// "Safe" URLs
"https://goerli-rollup.arbitrum.io/rpc"]), sdkCore.ChainId.OPTIMISM, [
// "Safe" URLs
"https://mainnet.optimism.io/",
// "Fallback" URLs
"https://rpc.ankr.com/optimism"]), sdkCore.ChainId.OPTIMISM_GOERLI, [
// "Safe" URLs
"https://goerli.optimism.io"]), sdkCore.ChainId.CELO, [// "Safe" URLs
"https://forno.celo.org"]), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_FALLBACK_URLS, sdkCore.ChainId.CELO_ALFAJORES, [// "Safe" URLs
"https://alfajores-forno.celo-testnet.org"]), sdkCore.ChainId.BNB, [
// "Safe" URLs
"https://endpoints.omniatech.io/v1/bsc/mainnet/public", "https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d", "https://1rpc.io/bnb", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://binance.nodereal.io", "https://bsc-dataseed4.defibit.io", "https://rpc.ankr.com/bsc"]), sdkCore.ChainId.AVALANCHE, [
// "Safe" URLs
"https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain.publicnode.com"]), sdkCore.ChainId.BASE, [
// "Safe" URLs
"https://mainnet.base.org/", "https://developer-access-mainnet.base.org/", "https://base.gateway.tenderly.co", "https://base.publicnode.com",
// "Fallback" URLs
"https://1rpc.io/base", "https://base.meowrpc.com"]));

/**
 * Known JSON-RPC endpoints.
 * These are the URLs used by the interface when there is not another available source of chain data.
 */
var RPC_URLS = (_RPC_URLS = {}, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_RPC_URLS, sdkCore.ChainId.MAINNET, ["https://mainnet.infura.io/v3/".concat(INFURA_KEY), QUICKNODE_MAINNET_RPC_URL].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.MAINNET]))), sdkCore.ChainId.GOERLI, ["https://goerli.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.GOERLI]))), sdkCore.ChainId.SEPOLIA, ["https://sepolia.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.SEPOLIA]))), sdkCore.ChainId.OPTIMISM, ["https://optimism-mainnet.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.OPTIMISM]))), sdkCore.ChainId.OPTIMISM_GOERLI, ["https://optimism-goerli.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.OPTIMISM_GOERLI]))), sdkCore.ChainId.ARBITRUM_ONE, ["https://arbitrum-mainnet.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.ARBITRUM_ONE]))), sdkCore.ChainId.ARBITRUM_GOERLI, ["https://arbitrum-goerli.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.ARBITRUM_GOERLI]))), sdkCore.ChainId.POLYGON, ["https://polygon-mainnet.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.POLYGON]))), sdkCore.ChainId.POLYGON_MUMBAI, ["https://polygon-mumbai.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.POLYGON_MUMBAI]))), sdkCore.ChainId.CELO, FALLBACK_URLS[sdkCore.ChainId.CELO]), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_RPC_URLS, sdkCore.ChainId.CELO_ALFAJORES, FALLBACK_URLS[sdkCore.ChainId.CELO_ALFAJORES]), sdkCore.ChainId.BNB, [QUICKNODE_BNB_RPC_URL].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.BNB]))), sdkCore.ChainId.AVALANCHE, ["https://avalanche-mainnet.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.AVALANCHE]))), sdkCore.ChainId.BASE, ["https://base-mainnet.infura.io/v3/".concat(INFURA_KEY)].concat(_toConsumableArray__default["default"](FALLBACK_URLS[sdkCore.ChainId.BASE]))));

exports.FALLBACK_URLS = FALLBACK_URLS;
exports.RPC_URLS = RPC_URLS;