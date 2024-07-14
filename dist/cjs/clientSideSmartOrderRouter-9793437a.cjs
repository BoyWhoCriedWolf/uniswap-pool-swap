'use strict';

var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var sdkCore = require('@uniswap/sdk-core');
var smartOrderRouter = require('@uniswap/smart-order-router');
var index = require('./index-68da1773.cjs');
var JSBI = require('jsbi');
var routerSdk = require('@uniswap/router-sdk');
var v3Sdk = require('@uniswap/v3-sdk');
require('react');
require('@reach/dialog/styles.css');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/possibleConstructorReturn');
require('@babel/runtime/helpers/getPrototypeOf');
require('@babel/runtime/helpers/inherits');
require('@babel/runtime/helpers/wrapNativeSuper');
require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/slicedToArray');
require('@web3-react/coinbase-wallet');
require('@web3-react/core');
require('@web3-react/gnosis-safe');
require('@web3-react/metamask');
require('@web3-react/network');
require('@web3-react/types');
require('ua-parser-js');
require('@babel/runtime/helpers/toConsumableArray');
require('@ethersproject/providers');
require('@babel/runtime/helpers/get');
require('@ethersproject/properties');
require('@reduxjs/toolkit');
require('ms');
require('@web3-react/walletconnect-v2');
require('@babel/runtime/helpers/extends');
require('@uniswap/analytics');
require('jotai/utils');
require('inter-ui');
require('polyfill-object.fromentries');
require('@juggle/resize-observer');
require('array.prototype.flat');
require('array.prototype.flatmap');
require('@sentry/react');
require('@sentry/tracing');
require('@uniswap/analytics-events');
require('@reduxjs/toolkit/query/react');
require('redux-persist');
require('@uniswap/redux-multicall');
require('tiny-invariant');
require('statsig-react');
require('@ethersproject/address');
require('@ethersproject/constants');
require('@ethersproject/contracts');
require('localforage');
require('@uniswap/token-lists');
require('@babel/runtime/helpers/objectWithoutProperties');
require('@uniswap/uniswapx-sdk');
require('@babel/runtime/helpers/typeof');
require('@ethersproject/bignumber');
require('@uniswap/v2-sdk');
require('@uniswap/permit2-sdk');
require('react-redux');
require('uuid');
require('@apollo/client');
require('@apollo/client/utilities');
require('react-dom/client');
require('react-query');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('rebass/styled-components');
require('styled-components');
require('jotai');
require('react-feather');
require('copy-to-clipboard');
require('react-router-dom');
require('rebass');
require('@ethersproject/bytes');
require('@ethersproject/strings');
require('qs');
require('polished');
require('./assets/src/nft/css/sprinkles.css.ts.vanilla-319f3907.css');
require('@vanilla-extract/sprinkles/createRuntimeSprinkles');
require('zustand/middleware');
require('zustand/shallow');
require('zustand/traditional');
require('zustand');
require('@vanilla-extract/dynamic');
require('@ethersproject/abi');
require('@ethersproject/units');
require('video-extensions');
require('numbro');
require('@reach/dialog');
require('react-spring');
require('react-use-gesture');
require('use-resize-observer');
require('@reach/portal');
require('react-popper');
require('@ethersproject/hash');
require('graphql');
require('ethers/lib/utils');
require('@metamask/jazzicon');
require('./assets/src/nft/css/common.css.ts.vanilla-056078d2.css');
require('cids');
require('multicodec');
require('multihashes');
require('@babel/runtime/helpers/esm/typeof');
require('./assets/src/nft/css/loading.css.ts.vanilla-6ffab675.css');
require('clsx');
require('./assets/src/nft/css/reset.css.ts.vanilla-269392d2.css');
require('react-infinite-scroll-component');
require('ethers/lib/ethers');
require('react-virtualized-auto-sizer');
require('react-window');
require('./assets/src/components/SearchModal/CurrencyList/index.css.ts.vanilla-1c457c50.css');
require('@uniswap/universal-router-sdk');
require('react-dom');
require('./assets/src/nft/components/modals/Overlay.css.ts.vanilla-277df776.css');
require('./assets/src/nft/components/bag/Bag.css.ts.vanilla-1f408a70.css');
require('./assets/src/nft/components/bag/BagRow.css.ts.vanilla-e3abd6f7.css');
require('@looksrare/sdk');
require('@opensea/seaport-js');
require('@opensea/seaport-js/lib/constants');
require('@ethersproject/keccak256');
require('@ethersproject/random');
require('./assets/src/nft/components/layout/Checkbox.css.ts.vanilla-074d33a2.css');
require('./assets/src/nft/components/collection/CollectionNfts.css.ts.vanilla-1b346de7.css');
require('./assets/src/nft/components/collection/FilterButton.css.ts.vanilla-2f795c12.css');
require('react-window-infinite-loader');
require('./assets/src/nft/components/profile/view/ProfilePage.css.ts.vanilla-76dc4eb2.css');
require('./assets/src/nft/pages/collection/index.css.ts.vanilla-aa6ee9ae.css');
require('web-vitals');
require('d3');
require('jpeg-js');
require('png-ts');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var JSBI__default = /*#__PURE__*/_interopDefaultLegacy(JSBI);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// from routing-api (https://github.com/Uniswap/routing-api/blob/main/lib/handlers/quote/quote.ts#L243-L311)
function transformSwapRouteToGetQuoteResult(tradeType, amount, _ref) {
  var quote = _ref.quote,
    quoteGasAdjusted = _ref.quoteGasAdjusted,
    route = _ref.route,
    estimatedGasUsed = _ref.estimatedGasUsed,
    estimatedGasUsedQuoteToken = _ref.estimatedGasUsedQuoteToken,
    estimatedGasUsedUSD = _ref.estimatedGasUsedUSD,
    gasPriceWei = _ref.gasPriceWei,
    methodParameters = _ref.methodParameters,
    blockNumber = _ref.blockNumber;
  var routeResponse = [];
  var _iterator = _createForOfIteratorHelper(route),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var subRoute = _step.value;
      var _amount = subRoute.amount,
        _quote = subRoute.quote,
        tokenPath = subRoute.tokenPath;
      var pools = subRoute.protocol === routerSdk.Protocol.V2 ? subRoute.route.pairs : subRoute.route.pools;
      var curRoute = [];
      for (var i = 0; i < pools.length; i++) {
        var nextPool = pools[i];
        var tokenIn = tokenPath[i];
        var tokenOut = tokenPath[i + 1];
        var edgeAmountIn = undefined;
        if (i === 0) {
          edgeAmountIn = tradeType === sdkCore.TradeType.EXACT_INPUT ? _amount.quotient.toString() : _quote.quotient.toString();
        }
        var edgeAmountOut = undefined;
        if (i === pools.length - 1) {
          edgeAmountOut = tradeType === sdkCore.TradeType.EXACT_INPUT ? _quote.quotient.toString() : _amount.quotient.toString();
        }
        if (nextPool instanceof v3Sdk.Pool) {
          curRoute.push({
            type: "v3-pool",
            tokenIn: {
              chainId: tokenIn.chainId,
              decimals: tokenIn.decimals,
              address: tokenIn.address,
              symbol: tokenIn.symbol
            },
            tokenOut: {
              chainId: tokenOut.chainId,
              decimals: tokenOut.decimals,
              address: tokenOut.address,
              symbol: tokenOut.symbol
            },
            fee: nextPool.fee.toString(),
            liquidity: nextPool.liquidity.toString(),
            sqrtRatioX96: nextPool.sqrtRatioX96.toString(),
            tickCurrent: nextPool.tickCurrent.toString(),
            amountIn: edgeAmountIn,
            amountOut: edgeAmountOut
          });
        } else {
          var reserve0 = nextPool.reserve0;
          var reserve1 = nextPool.reserve1;
          curRoute.push({
            type: "v2-pool",
            tokenIn: {
              chainId: tokenIn.chainId,
              decimals: tokenIn.decimals,
              address: tokenIn.address,
              symbol: tokenIn.symbol
            },
            tokenOut: {
              chainId: tokenOut.chainId,
              decimals: tokenOut.decimals,
              address: tokenOut.address,
              symbol: tokenOut.symbol
            },
            reserve0: {
              token: {
                chainId: reserve0.currency.wrapped.chainId,
                decimals: reserve0.currency.wrapped.decimals,
                address: reserve0.currency.wrapped.address,
                symbol: reserve0.currency.wrapped.symbol
              },
              quotient: reserve0.quotient.toString()
            },
            reserve1: {
              token: {
                chainId: reserve1.currency.wrapped.chainId,
                decimals: reserve1.currency.wrapped.decimals,
                address: reserve1.currency.wrapped.address,
                symbol: reserve1.currency.wrapped.symbol
              },
              quotient: reserve1.quotient.toString()
            },
            amountIn: edgeAmountIn,
            amountOut: edgeAmountOut
          });
        }
      }
      routeResponse.push(curRoute);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var result = {
    methodParameters: methodParameters,
    blockNumber: blockNumber.toString(),
    amount: amount.quotient.toString(),
    amountDecimals: amount.toExact(),
    quote: quote.quotient.toString(),
    quoteDecimals: quote.toExact(),
    quoteGasAdjusted: quoteGasAdjusted.quotient.toString(),
    quoteGasAdjustedDecimals: quoteGasAdjusted.toExact(),
    gasUseEstimateQuote: estimatedGasUsedQuoteToken.quotient.toString(),
    gasUseEstimateQuoteDecimals: estimatedGasUsedQuoteToken.toExact(),
    gasUseEstimate: estimatedGasUsed.toString(),
    gasUseEstimateUSD: estimatedGasUsedUSD.toExact(),
    gasPriceWei: gasPriceWei.toString(),
    route: routeResponse,
    routeString: smartOrderRouter.routeAmountsToString(route)
  };
  return {
    state: index.QuoteState.SUCCESS,
    data: {
      routing: index.URAQuoteType.CLASSIC,
      quote: result,
      allQuotes: []
    }
  };
}

var routers = new Map();
function getRouter(chainId) {
  var router = routers.get(chainId);
  if (router) return router;
  var supportedChainId = index.asSupportedChain(chainId);
  if (supportedChainId) {
    var provider = index.DEPRECATED_RPC_PROVIDERS[supportedChainId];
    var _router = new smartOrderRouter.AlphaRouter({
      chainId: chainId,
      provider: provider
    });
    routers.set(chainId, _router);
    return _router;
  }
  throw new Error("Router does not support this chain (chainId: ".concat(chainId, ")."));
}
function getQuote(_x, _x2, _x3) {
  return _getQuote.apply(this, arguments);
}
function _getQuote() {
  _getQuote = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(_ref, router, routerConfig) {
    var tradeType, tokenIn, tokenOut, amountRaw, tokenInIsNative, tokenOutIsNative, currencyIn, currencyOut, baseCurrency, quoteCurrency, amount, swapRoute;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          tradeType = _ref.tradeType, tokenIn = _ref.tokenIn, tokenOut = _ref.tokenOut, amountRaw = _ref.amount;
          tokenInIsNative = Object.values(index.SwapRouterNativeAssets).includes(tokenIn.address);
          tokenOutIsNative = Object.values(index.SwapRouterNativeAssets).includes(tokenOut.address);
          currencyIn = tokenInIsNative ? index.nativeOnChain(tokenIn.chainId) : new sdkCore.Token(tokenIn.chainId, tokenIn.address, tokenIn.decimals, tokenIn.symbol);
          currencyOut = tokenOutIsNative ? index.nativeOnChain(tokenOut.chainId) : new sdkCore.Token(tokenOut.chainId, tokenOut.address, tokenOut.decimals, tokenOut.symbol);
          baseCurrency = tradeType === sdkCore.TradeType.EXACT_INPUT ? currencyIn : currencyOut;
          quoteCurrency = tradeType === sdkCore.TradeType.EXACT_INPUT ? currencyOut : currencyIn;
          amount = sdkCore.CurrencyAmount.fromRawAmount(baseCurrency, JSBI__default["default"].BigInt(amountRaw)); // TODO (WEB-2055): explore initializing client side routing on first load (when amountRaw is null) if there are enough users using client-side router preference.
          _context.next = 10;
          return router.route(amount, quoteCurrency, tradeType, /*swapConfig=*/undefined, routerConfig);
        case 10:
          swapRoute = _context.sent;
          if (swapRoute) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", {
            state: index.QuoteState.NOT_FOUND
          });
        case 13:
          return _context.abrupt("return", transformSwapRouteToGetQuoteResult(tradeType, amount, swapRoute));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getQuote.apply(this, arguments);
}
function getClientSideQuote(_x4, _x5, _x6) {
  return _getClientSideQuote.apply(this, arguments);
}
function _getClientSideQuote() {
  _getClientSideQuote = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(_ref2, router, config) {
    var tokenInAddress, tokenInChainId, tokenInDecimals, tokenInSymbol, tokenOutAddress, tokenOutChainId, tokenOutDecimals, tokenOutSymbol, amount, tradeType;
    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          tokenInAddress = _ref2.tokenInAddress, tokenInChainId = _ref2.tokenInChainId, tokenInDecimals = _ref2.tokenInDecimals, tokenInSymbol = _ref2.tokenInSymbol, tokenOutAddress = _ref2.tokenOutAddress, tokenOutChainId = _ref2.tokenOutChainId, tokenOutDecimals = _ref2.tokenOutDecimals, tokenOutSymbol = _ref2.tokenOutSymbol, amount = _ref2.amount, tradeType = _ref2.tradeType;
          return _context2.abrupt("return", getQuote({
            tradeType: tradeType,
            tokenIn: {
              address: tokenInAddress,
              chainId: tokenInChainId,
              decimals: tokenInDecimals,
              symbol: tokenInSymbol
            },
            tokenOut: {
              address: tokenOutAddress,
              chainId: tokenOutChainId,
              decimals: tokenOutDecimals,
              symbol: tokenOutSymbol
            },
            amount: amount
          }, router, config));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getClientSideQuote.apply(this, arguments);
}

exports.getClientSideQuote = getClientSideQuote;
exports.getRouter = getRouter;
