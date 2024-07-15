import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { TradeType, Token, CurrencyAmount } from '@uniswap/sdk-core';
import { routeAmountsToString, AlphaRouter } from '@uniswap/smart-order-router';
import { ba as QuoteState, bb as URAQuoteType, bc as asSupportedChain, bd as DEPRECATED_RPC_PROVIDERS, be as SwapRouterNativeAssets, bf as nativeOnChain } from './index-518438ba.js';
import JSBI from 'jsbi';
import { Protocol } from '@uniswap/router-sdk';
import { Pool } from '@uniswap/v3-sdk';
import 'react';
import '@reach/dialog/styles.css';
import '@web3-react/coinbase-wallet';
import '@web3-react/core';
import '@web3-react/gnosis-safe';
import '@web3-react/metamask';
import '@web3-react/network';
import '@web3-react/types';
import 'ua-parser-js';
import '@ethersproject/providers';
import '@ethersproject/properties';
import '@reduxjs/toolkit';
import 'ms';
import '@web3-react/walletconnect-v2';
import '@babel/runtime/helpers/extends';
import '@uniswap/analytics';
import 'jotai/utils';
import 'inter-ui';
import 'polyfill-object.fromentries';
import '@juggle/resize-observer';
import 'array.prototype.flat';
import 'array.prototype.flatmap';
import '@sentry/react';
import '@sentry/tracing';
import '@uniswap/analytics-events';
import '@reduxjs/toolkit/query/react';
import 'redux-persist';
import '@uniswap/redux-multicall';
import 'tiny-invariant';
import 'statsig-react';
import '@ethersproject/address';
import '@ethersproject/constants';
import '@ethersproject/contracts';
import 'localforage';
import '@babel/runtime/helpers/defineProperty';
import '@uniswap/token-lists';
import '@uniswap/uniswapx-sdk';
import '@babel/runtime/helpers/slicedToArray';
import '@ethersproject/bignumber';
import '@uniswap/v2-sdk';
import '@uniswap/permit2-sdk';
import '@babel/runtime/helpers/toConsumableArray';
import 'react-redux';
import 'uuid';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/possibleConstructorReturn';
import '@babel/runtime/helpers/getPrototypeOf';
import '@babel/runtime/helpers/inherits';
import '@babel/runtime/helpers/wrapNativeSuper';
import '@babel/runtime/helpers/typeof';
import '@apollo/client';
import '@apollo/client/utilities';
import 'react-dom/client';
import 'react-query';
import 'rebass/styled-components';
import 'styled-components';
import 'jotai';
import 'react-feather';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import 'copy-to-clipboard';
import 'react-router-dom';
import 'rebass';
import '@ethersproject/bytes';
import '@ethersproject/strings';
import 'qs';
import 'polished';
import './assets/src/nft/css/sprinkles.css.ts.vanilla-319f3907.css';
import '@vanilla-extract/sprinkles/createRuntimeSprinkles';
import 'zustand/middleware';
import 'zustand/shallow';
import 'zustand/traditional';
import 'zustand';
import '@vanilla-extract/dynamic';
import '@ethersproject/abi';
import '@ethersproject/units';
import 'video-extensions';
import 'numbro';
import '@reach/dialog';
import 'react-spring';
import 'react-use-gesture';
import 'use-resize-observer';
import '@reach/portal';
import 'react-popper';
import '@ethersproject/hash';
import 'graphql';
import 'ethers/lib/utils';
import '@metamask/jazzicon';
import './assets/src/nft/css/common.css.ts.vanilla-056078d2.css';
import 'cids';
import 'multicodec';
import 'multihashes';
import '@babel/runtime/helpers/esm/typeof';
import './assets/src/nft/css/loading.css.ts.vanilla-6ffab675.css';
import 'clsx';
import './assets/src/nft/css/reset.css.ts.vanilla-269392d2.css';
import 'react-infinite-scroll-component';
import 'ethers/lib/ethers';
import 'react-virtualized-auto-sizer';
import 'react-window';
import './assets/src/components/SearchModal/CurrencyList/index.css.ts.vanilla-1c457c50.css';
import '@uniswap/universal-router-sdk';
import 'react-dom';
import './assets/src/nft/components/modals/Overlay.css.ts.vanilla-277df776.css';
import './assets/src/nft/components/bag/Bag.css.ts.vanilla-1f408a70.css';
import './assets/src/nft/components/bag/BagRow.css.ts.vanilla-e3abd6f7.css';
import '@looksrare/sdk';
import '@opensea/seaport-js';
import '@opensea/seaport-js/lib/constants';
import '@ethersproject/keccak256';
import '@ethersproject/random';
import './assets/src/nft/components/layout/Checkbox.css.ts.vanilla-074d33a2.css';
import './assets/src/nft/components/collection/CollectionNfts.css.ts.vanilla-1b346de7.css';
import './assets/src/nft/components/collection/FilterButton.css.ts.vanilla-2f795c12.css';
import 'react-window-infinite-loader';
import './assets/src/nft/components/profile/view/ProfilePage.css.ts.vanilla-76dc4eb2.css';
import './assets/src/nft/pages/collection/index.css.ts.vanilla-aa6ee9ae.css';
import 'web-vitals';
import 'd3';
import 'jpeg-js';
import 'png-ts';

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
      var pools = subRoute.protocol === Protocol.V2 ? subRoute.route.pairs : subRoute.route.pools;
      var curRoute = [];
      for (var i = 0; i < pools.length; i++) {
        var nextPool = pools[i];
        var tokenIn = tokenPath[i];
        var tokenOut = tokenPath[i + 1];
        var edgeAmountIn = undefined;
        if (i === 0) {
          edgeAmountIn = tradeType === TradeType.EXACT_INPUT ? _amount.quotient.toString() : _quote.quotient.toString();
        }
        var edgeAmountOut = undefined;
        if (i === pools.length - 1) {
          edgeAmountOut = tradeType === TradeType.EXACT_INPUT ? _quote.quotient.toString() : _amount.quotient.toString();
        }
        if (nextPool instanceof Pool) {
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
    routeString: routeAmountsToString(route)
  };
  return {
    state: QuoteState.SUCCESS,
    data: {
      routing: URAQuoteType.CLASSIC,
      quote: result,
      allQuotes: []
    }
  };
}

var routers = new Map();
function getRouter(chainId) {
  var router = routers.get(chainId);
  if (router) return router;
  var supportedChainId = asSupportedChain(chainId);
  if (supportedChainId) {
    var provider = DEPRECATED_RPC_PROVIDERS[supportedChainId];
    var _router = new AlphaRouter({
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
  _getQuote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref, router, routerConfig) {
    var tradeType, tokenIn, tokenOut, amountRaw, tokenInIsNative, tokenOutIsNative, currencyIn, currencyOut, baseCurrency, quoteCurrency, amount, swapRoute;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          tradeType = _ref.tradeType, tokenIn = _ref.tokenIn, tokenOut = _ref.tokenOut, amountRaw = _ref.amount;
          tokenInIsNative = Object.values(SwapRouterNativeAssets).includes(tokenIn.address);
          tokenOutIsNative = Object.values(SwapRouterNativeAssets).includes(tokenOut.address);
          currencyIn = tokenInIsNative ? nativeOnChain(tokenIn.chainId) : new Token(tokenIn.chainId, tokenIn.address, tokenIn.decimals, tokenIn.symbol);
          currencyOut = tokenOutIsNative ? nativeOnChain(tokenOut.chainId) : new Token(tokenOut.chainId, tokenOut.address, tokenOut.decimals, tokenOut.symbol);
          baseCurrency = tradeType === TradeType.EXACT_INPUT ? currencyIn : currencyOut;
          quoteCurrency = tradeType === TradeType.EXACT_INPUT ? currencyOut : currencyIn;
          amount = CurrencyAmount.fromRawAmount(baseCurrency, JSBI.BigInt(amountRaw)); // TODO (WEB-2055): explore initializing client side routing on first load (when amountRaw is null) if there are enough users using client-side router preference.
          _context.next = 10;
          return router.route(amount, quoteCurrency, tradeType, /*swapConfig=*/undefined, routerConfig);
        case 10:
          swapRoute = _context.sent;
          if (swapRoute) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", {
            state: QuoteState.NOT_FOUND
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
  _getClientSideQuote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref2, router, config) {
    var tokenInAddress, tokenInChainId, tokenInDecimals, tokenInSymbol, tokenOutAddress, tokenOutChainId, tokenOutDecimals, tokenOutSymbol, amount, tradeType;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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

export { getClientSideQuote, getRouter };
