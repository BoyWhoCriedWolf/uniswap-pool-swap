import React__default, { useState, useEffect, useMemo, useCallback, useReducer, useRef } from 'react';
import { Trans } from '../../../node_modules/@lingui/react/dist/index.mjs.js';
import { InterfacePageName, SwapEventName, InterfaceSectionName, BrowserEvent, InterfaceElementName, InterfaceEventName, SharedEventName } from '@uniswap/analytics-events';
import { ChainId, CurrencyAmount } from '@uniswap/sdk-core';
import { UNIVERSAL_ROUTER_ADDRESS } from '@uniswap/universal-router-sdk';
import { useWeb3React } from '@web3-react/core';
import { Trace, sendAnalyticsEvent, TraceEvent } from '../../analytics/index.js';
import { useToggleAccountDrawer } from '../../components/AccountDrawer/index.js';
import AddressInputPanel from '../../components/AddressInputPanel/index.js';
import { ButtonPrimary, ButtonLight, ButtonError } from '../../components/Button/index.js';
import { GrayCard } from '../../components/Card/index.js';
import { AutoColumn } from '../../components/Column/index.js';
import SwapCurrencyInputPanel from '../../components/CurrencyInputPanel/SwapCurrencyInputPanel.js';
import { NetworkAlert } from '../../components/NetworkAlert/NetworkAlert.js';
import { AutoRow } from '../../components/Row/index.js';
import confirmPriceImpactWithoutFee from '../../components/swap/confirmPriceImpactWithoutFee.js';
import ConfirmSwapModal from '../../components/swap/ConfirmSwapModal.js';
import PriceImpactModal from '../../components/swap/PriceImpactModal.js';
import PriceImpactWarning from '../../components/swap/PriceImpactWarning.js';
import { SwapWrapper, ArrowWrapper } from '../../components/swap/styled.js';
import SwapDetailsDropdown from '../../components/swap/SwapDetailsDropdown.js';
import { SwitchLocaleLink } from '../../components/SwitchLocaleLink/index.js';
import TokenSafetyModal from '../../components/TokenSafety/TokenSafetyModal.js';
import { useConnectionReady } from '../../connection/eagerlyConnect.js';
import { getChainInfo } from '../../constants/chainInfo.js';
import { asSupportedChain, isSupportedChain } from '../../constants/chains.js';
import { TOKEN_SHORTHANDS, getSwapCurrencyId } from '../../constants/tokens.js';
import { useUniswapXDefaultEnabled } from '../../featureFlags/flags/uniswapXDefault.js';
import { useCurrency, useDefaultActiveTokens } from '../../hooks/Tokens.js';
import { useIsSwapUnsupported } from '../../hooks/useIsSwapUnsupported.js';
import { useMaxAmountIn } from '../../hooks/useMaxAmountIn.js';
import usePermit2Allowance, { AllowanceState } from '../../hooks/usePermit2Allowance.js';
import usePrevious from '../../hooks/usePrevious.js';
import { useSwapCallback } from '../../hooks/useSwapCallback.js';
import { useSwitchChain } from '../../hooks/useSwitchChain.js';
import { useUSDPrice } from '../../hooks/useUSDPrice.js';
import useWrapCallback, { WrapType, WrapErrorText } from '../../hooks/useWrapCallback.js';
import JSBI from 'jsbi';
import { formatSwapQuoteReceivedEventProperties } from '../../lib/utils/analytics.js';
import { Repeat, ArrowDown } from 'react-feather';
import { Text } from 'rebass';
import { useAppSelector } from '../../state/hooks.js';
import { TradeState } from '../../state/routing/types.js';
import { isClassicTrade, isPreviewTrade } from '../../state/routing/utils.js';
import { Field, replaceSwapState, forceExactInput } from '../../state/swap/actions.js';
import { useDerivedSwapInfo, useSwapActionHandlers } from '../../state/swap/hooks.js';
import swapReducer, { initialState } from '../../state/swap/reducer.js';
import styled, { useTheme } from 'styled-components';
import { colors } from '../../theme/colors.js';
import { LinkStyledButton } from '../../theme/components/index.js';
import { maybeLogFirstSwapAction } from '../../tracing/swapFlowLoggers.js';
import { computeFiatValuePriceImpact } from '../../utils/computeFiatValuePriceImpact.js';
import { useFormatter, NumberType } from '../../utils/formatNumbers.js';
import { maxAmountSpend } from '../../utils/maxAmountSpend.js';
import { computeRealizedPriceImpact, warningSeverity } from '../../utils/prices.js';
import { didUserReject } from '../../utils/swapErrorToUserReadableMessage.js';
import { useScreenSize } from '../../hooks/useScreenSize.js';
import { useIsDarkMode } from '../../theme/components/ThemeToggle.js';
import { OutputTaxTooltipBody } from './TaxTooltipBody.js';
import { UniswapXOptIn } from './UniswapXOptIn.js';
import { ThemedText } from '../../theme/components/text.js';
import { useTrace } from '@uniswap/analytics';

const ArrowContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
const SwapSection = styled.div`
  // background-color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.surface2;
}};

  border-radius: 16px;
  color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.neutral2;
}};
  font-size: 16px;
  font-weight: 700;
  height: 120px;
  line-height: 20px;
  position: relative;
`;
const OutputSwapSection = styled(SwapSection)`
  border-bottom: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return `1px solid ${theme.surface1}`;
}};
`;
function getIsReviewableQuote(trade, tradeState, swapInputError) {
  if (swapInputError) return false;
  // if the current quote is a preview quote, allow the user to progress to the Swap review screen
  if (isPreviewTrade(trade)) return true;
  return Boolean(trade && tradeState === TradeState.VALID);
}
function largerPercentValue(a, b) {
  if (a && b) {
    return a.greaterThan(b) ? a : b;
  } else if (a) {
    return a;
  } else if (b) {
    return b;
  }
  return undefined;
}
function SwapPage(_ref4) {
  let {
    className
  } = _ref4;
  const {
    chainId: connectedChainId
  } = useWeb3React();
  // const loadedUrlParams = useDefaultsFromURLSearch();

  // const location = useLocation();

  const supportedChainId = asSupportedChain(connectedChainId);
  return /*#__PURE__*/React__default.createElement(Trace, {
    page: InterfacePageName.SWAP_PAGE,
    shouldLogImpression: true
  }, /*#__PURE__*/React__default.createElement(Swap, {
    className: className,
    chainId: supportedChainId ?? ChainId.MAINNET
    // initialInputCurrencyId={loadedUrlParams?.[Field.INPUT]?.currencyId}
    // initialOutputCurrencyId={loadedUrlParams?.[Field.OUTPUT]?.currencyId}
    ,
    disableTokenInputs: supportedChainId === undefined
  }), /*#__PURE__*/React__default.createElement(NetworkAlert, null), /*#__PURE__*/React__default.createElement(SwitchLocaleLink, null));
}

/**
 * The swap component displays the swap interface, manages state for the swap, and triggers onchain swaps.
 *
 * In most cases, chainId should refer to the connected chain, i.e. `useWeb3React().chainId`.
 * However if this component is being used in a context that displays information from a different, unconnected
 * chain (e.g. the TDP), then chainId should refer to the unconnected chain.
 */
function Swap(_ref5) {
  let {
    className,
    initialInputCurrencyId,
    initialOutputCurrencyId,
    chainId,
    onCurrencyChange,
    disableTokenInputs = false
  } = _ref5;
  const connectionReady = useConnectionReady();
  const {
    account,
    chainId: connectedChainId,
    connector
  } = useWeb3React();
  const trace = useTrace();

  // token warning stuff
  const prefilledInputCurrency = useCurrency(initialInputCurrencyId);
  const prefilledOutputCurrency = useCurrency(initialOutputCurrencyId);
  const [loadedInputCurrency, setLoadedInputCurrency] = useState(prefilledInputCurrency);
  const [loadedOutputCurrency, setLoadedOutputCurrency] = useState(prefilledOutputCurrency);
  useEffect(() => {
    setLoadedInputCurrency(prefilledInputCurrency);
    setLoadedOutputCurrency(prefilledOutputCurrency);
  }, [prefilledInputCurrency, prefilledOutputCurrency]);
  const [dismissTokenWarning, setDismissTokenWarning] = useState(false);
  const [showPriceImpactModal, setShowPriceImpactModal] = useState(false);
  const urlLoadedTokens = useMemo(() => [loadedInputCurrency, loadedOutputCurrency]?.filter(c => c?.isToken ?? false) ?? [], [loadedInputCurrency, loadedOutputCurrency]);
  const handleConfirmTokenWarning = useCallback(() => {
    setDismissTokenWarning(true);
  }, []);

  // dismiss warning if all imported tokens are in active lists
  const defaultTokens = useDefaultActiveTokens(chainId);
  const importTokensNotInDefault = useMemo(() => urlLoadedTokens && urlLoadedTokens.filter(token => {
    return !(token.address in defaultTokens);
  }).filter(token => {
    // Any token addresses that are loaded from the shorthands map do not need to show the import URL
    const supported = asSupportedChain(chainId);
    if (!supported) return true;
    return !Object.keys(TOKEN_SHORTHANDS).some(shorthand => {
      const shorthandTokenAddress = TOKEN_SHORTHANDS[shorthand][supported];
      return shorthandTokenAddress && shorthandTokenAddress === token.address;
    });
  }), [chainId, defaultTokens, urlLoadedTokens]);
  const theme = useTheme();

  // toggle wallet when disconnected
  const toggleWalletDrawer = useToggleAccountDrawer();

  // swap state
  const prefilledState = useMemo(() => ({
    [Field.INPUT]: {
      currencyId: initialInputCurrencyId
    },
    [Field.OUTPUT]: {
      currencyId: initialOutputCurrencyId
    }
  }), [initialInputCurrencyId, initialOutputCurrencyId]);
  const [state, dispatch] = useReducer(swapReducer, {
    ...initialState,
    ...prefilledState
  });
  const {
    typedValue,
    recipient,
    independentField
  } = state;
  const previousConnectedChainId = usePrevious(connectedChainId);
  const previousPrefilledState = usePrevious(prefilledState);
  useEffect(() => {
    const combinedInitialState = {
      ...initialState,
      ...prefilledState
    };
    const chainChanged = previousConnectedChainId && previousConnectedChainId !== connectedChainId;
    const prefilledInputChanged = previousPrefilledState && previousPrefilledState?.[Field.INPUT]?.currencyId !== prefilledState?.[Field.INPUT]?.currencyId;
    const prefilledOutputChanged = previousPrefilledState && previousPrefilledState?.[Field.OUTPUT]?.currencyId !== prefilledState?.[Field.OUTPUT]?.currencyId;
    if (chainChanged || prefilledInputChanged || prefilledOutputChanged) {
      dispatch(replaceSwapState({
        ...initialState,
        ...prefilledState,
        field: combinedInitialState.independentField ?? Field.INPUT,
        inputCurrencyId: combinedInitialState.INPUT.currencyId ?? undefined,
        outputCurrencyId: combinedInitialState.OUTPUT.currencyId ?? undefined
      }));
      // reset local state
      setSwapState({
        tradeToConfirm: undefined,
        swapError: undefined,
        showConfirm: false,
        swapResult: undefined
      });
    }
  }, [connectedChainId, prefilledState, previousConnectedChainId, previousPrefilledState]);
  const swapInfo = useDerivedSwapInfo(state, chainId);
  const {
    trade: {
      state: tradeState,
      trade,
      swapQuoteLatency
    },
    allowedSlippage,
    // autoSlippage,
    currencyBalances,
    parsedAmount,
    currencies,
    inputError: swapInputError,
    inputTax,
    outputTax
  } = swapInfo;
  const [inputTokenHasTax, outputTokenHasTax] = useMemo(() => [!inputTax.equalTo(0), !outputTax.equalTo(0)], [inputTax, outputTax]);
  useEffect(() => {
    // Force exact input if the user switches to an output token with tax
    if (outputTokenHasTax && independentField === Field.OUTPUT) dispatch(forceExactInput());
  }, [independentField, outputTokenHasTax, trade?.outputAmount]);
  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError
  } = useWrapCallback(currencies[Field.INPUT], currencies[Field.OUTPUT], typedValue);
  const showWrap = wrapType !== WrapType.NOT_APPLICABLE;
  const parsedAmounts = useMemo(() => showWrap ? {
    [Field.INPUT]: parsedAmount,
    [Field.OUTPUT]: parsedAmount
  } : {
    [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
    [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.postTaxOutputAmount
  }, [independentField, parsedAmount, showWrap, trade]);
  const showFiatValueInput = Boolean(parsedAmounts[Field.INPUT]);
  const showFiatValueOutput = Boolean(parsedAmounts[Field.OUTPUT]);
  const getSingleUnitAmount = currency => {
    if (!currency) return;
    return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(10 ** currency.decimals));
  };
  const fiatValueInput = useUSDPrice(parsedAmounts[Field.INPUT] ?? getSingleUnitAmount(currencies[Field.INPUT]), currencies[Field.INPUT]);
  const fiatValueOutput = useUSDPrice(parsedAmounts[Field.OUTPUT] ?? getSingleUnitAmount(currencies[Field.OUTPUT]), currencies[Field.OUTPUT]);
  const [routeNotFound, routeIsLoading, routeIsSyncing] = useMemo(() => [tradeState === TradeState.NO_ROUTE_FOUND, tradeState === TradeState.LOADING, tradeState === TradeState.LOADING && Boolean(trade)], [trade, tradeState]);
  const fiatValueTradeInput = useUSDPrice(trade?.inputAmount);
  const fiatValueTradeOutput = useUSDPrice(trade?.postTaxOutputAmount);
  const preTaxFiatValueTradeOutput = useUSDPrice(trade?.outputAmount);
  const [stablecoinPriceImpact, preTaxStablecoinPriceImpact] = useMemo(() => routeIsSyncing || !isClassicTrade(trade) ? [undefined, undefined] : [computeFiatValuePriceImpact(fiatValueTradeInput.data, fiatValueTradeOutput.data), computeFiatValuePriceImpact(fiatValueTradeInput.data, preTaxFiatValueTradeOutput.data)], [fiatValueTradeInput, fiatValueTradeOutput, preTaxFiatValueTradeOutput, routeIsSyncing, trade]);
  const {
    onSwitchTokens,
    onCurrencySelection,
    onUserInput,
    onChangeRecipient
  } = useSwapActionHandlers(dispatch);
  const dependentField = independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT;
  const handleTypeInput = useCallback(value => {
    onUserInput(Field.INPUT, value);
    maybeLogFirstSwapAction(trace);
  }, [onUserInput, trace]);
  const handleTypeOutput = useCallback(value => {
    onUserInput(Field.OUTPUT, value);
    maybeLogFirstSwapAction(trace);
  }, [onUserInput, trace]);

  // const navigate = useNavigate();
  const swapIsUnsupported = useIsSwapUnsupported(currencies[Field.INPUT], currencies[Field.OUTPUT]);

  // reset if they close warning without tokens in params
  const handleDismissTokenWarning = useCallback(() => {
    setDismissTokenWarning(true);
  }, []);
  //   navigate("/swap/");
  // }, [navigate]);

  // modal and loading
  const [{
    showConfirm,
    tradeToConfirm,
    swapError,
    swapResult
  }, setSwapState] = useState({
    showConfirm: false,
    tradeToConfirm: undefined,
    swapError: undefined,
    swapResult: undefined
  });
  const {
    formatCurrencyAmount
  } = useFormatter();
  const formattedAmounts = useMemo(() => ({
    [independentField]: typedValue,
    [dependentField]: showWrap ? parsedAmounts[independentField]?.toExact() ?? "" : formatCurrencyAmount({
      amount: parsedAmounts[dependentField],
      type: NumberType.SwapTradeAmount,
      placeholder: ""
    })
  }), [dependentField, formatCurrencyAmount, independentField, parsedAmounts, showWrap, typedValue]);
  const userHasSpecifiedInputOutput = Boolean(currencies[Field.INPUT] && currencies[Field.OUTPUT] && parsedAmounts[independentField]?.greaterThan(JSBI.BigInt(0)));
  const maximumAmountIn = useMaxAmountIn(trade, allowedSlippage);
  const allowance = usePermit2Allowance(maximumAmountIn ?? (parsedAmounts[Field.INPUT]?.currency.isToken ? parsedAmounts[Field.INPUT] : undefined), isSupportedChain(chainId) ? UNIVERSAL_ROUTER_ADDRESS(chainId) : undefined, trade?.fillType);
  const maxInputAmount = useMemo(() => maxAmountSpend(currencyBalances[Field.INPUT]), [currencyBalances]);
  const showMaxButton = Boolean(maxInputAmount?.greaterThan(0) && !parsedAmounts[Field.INPUT]?.equalTo(maxInputAmount));
  const swapFiatValues = useMemo(() => {
    return {
      amountIn: fiatValueTradeInput.data,
      amountOut: fiatValueTradeOutput.data
    };
  }, [fiatValueTradeInput, fiatValueTradeOutput]);

  // the callback to execute the swap
  const swapCallback = useSwapCallback(trade, swapFiatValues, allowedSlippage, allowance.state === AllowanceState.ALLOWED ? allowance.permitSignature : undefined);
  const handleContinueToReview = useCallback(() => {
    setSwapState({
      tradeToConfirm: trade,
      swapError: undefined,
      showConfirm: true,
      swapResult: undefined
    });
  }, [trade]);
  const clearSwapState = useCallback(() => {
    setSwapState(currentState => ({
      ...currentState,
      swapError: undefined,
      swapResult: undefined
    }));
  }, []);
  const handleSwap = useCallback(() => {
    if (!swapCallback) {
      return;
    }
    if (preTaxStablecoinPriceImpact && !confirmPriceImpactWithoutFee(preTaxStablecoinPriceImpact)) {
      return;
    }
    swapCallback().then(result => {
      setSwapState(currentState => ({
        ...currentState,
        swapError: undefined,
        swapResult: result
      }));
    }).catch(error => {
      setSwapState(currentState => ({
        ...currentState,
        swapError: error,
        swapResult: undefined
      }));
    });
  }, [swapCallback, preTaxStablecoinPriceImpact]);
  const handleOnWrap = useCallback(async () => {
    if (!onWrap) return;
    try {
      const txHash = await onWrap();
      setSwapState(currentState => ({
        ...currentState,
        swapError: undefined,
        txHash
      }));
      onUserInput(Field.INPUT, "");
    } catch (error) {
      if (!didUserReject(error)) {
        sendAnalyticsEvent(SwapEventName.SWAP_ERROR, {
          wrapType,
          input: currencies[Field.INPUT],
          output: currencies[Field.OUTPUT]
        });
      }
      console.error("Could not wrap/unwrap", error);
      setSwapState(currentState => ({
        ...currentState,
        swapError: error,
        txHash: undefined
      }));
    }
  }, [currencies, onUserInput, onWrap, wrapType]);

  // warnings on the greater of fiat value price impact and execution price impact
  const {
    priceImpactSeverity,
    largerPriceImpact
  } = useMemo(() => {
    if (!isClassicTrade(trade)) {
      return {
        priceImpactSeverity: 0,
        largerPriceImpact: undefined
      };
    }
    const marketPriceImpact = trade?.priceImpact ? computeRealizedPriceImpact(trade) : undefined;
    const largerPriceImpact = largerPercentValue(marketPriceImpact, preTaxStablecoinPriceImpact);
    return {
      priceImpactSeverity: warningSeverity(largerPriceImpact),
      largerPriceImpact
    };
  }, [preTaxStablecoinPriceImpact, trade]);
  const handleConfirmDismiss = useCallback(() => {
    setSwapState(currentState => ({
      ...currentState,
      showConfirm: false
    }));
    // If there was a swap, we want to clear the input
    if (swapResult) {
      onUserInput(Field.INPUT, "");
    }
  }, [onUserInput, swapResult]);
  const handleAcceptChanges = useCallback(() => {
    setSwapState(currentState => ({
      ...currentState,
      tradeToConfirm: trade
    }));
  }, [trade]);
  const handleInputSelect = useCallback(inputCurrency => {
    onCurrencySelection(Field.INPUT, inputCurrency);
    onCurrencyChange?.({
      [Field.INPUT]: {
        currencyId: getSwapCurrencyId(inputCurrency)
      },
      [Field.OUTPUT]: state[Field.OUTPUT]
    });
    maybeLogFirstSwapAction(trace);
  }, [onCurrencyChange, onCurrencySelection, state, trace]);
  const inputCurrencyNumericalInputRef = useRef(null);
  const handleMaxInput = useCallback(() => {
    maxInputAmount && onUserInput(Field.INPUT, maxInputAmount.toExact());
    maybeLogFirstSwapAction(trace);
  }, [maxInputAmount, onUserInput, trace]);
  const handleOutputSelect = useCallback(outputCurrency => {
    onCurrencySelection(Field.OUTPUT, outputCurrency);
    onCurrencyChange?.({
      [Field.INPUT]: state[Field.INPUT],
      [Field.OUTPUT]: {
        currencyId: getSwapCurrencyId(outputCurrency)
      }
    });
    maybeLogFirstSwapAction(trace);
  }, [onCurrencyChange, onCurrencySelection, state, trace]);
  const showPriceImpactWarning = isClassicTrade(trade) && largerPriceImpact && priceImpactSeverity > 3;
  const prevTrade = usePrevious(trade);
  useEffect(() => {
    if (!trade || prevTrade === trade) return; // no new swap quote to log

    sendAnalyticsEvent(SwapEventName.SWAP_QUOTE_RECEIVED, {
      ...formatSwapQuoteReceivedEventProperties(trade, allowedSlippage, swapQuoteLatency, inputTax, outputTax),
      ...trace
    });
  }, [prevTrade, trade, trace, allowedSlippage, swapQuoteLatency, inputTax, outputTax]);
  const showDetailsDropdown = Boolean(!showWrap && userHasSpecifiedInputOutput && (trade || routeIsLoading || routeIsSyncing));
  const inputCurrency = currencies[Field.INPUT] ?? undefined;
  const switchChain = useSwitchChain();
  const switchingChain = useAppSelector(state => state.wallets.switchingChain);
  const showOptInSmall = !useScreenSize().navSearchInputVisible;
  const isDark = useIsDarkMode();
  const isUniswapXDefaultEnabled = useUniswapXDefaultEnabled();
  const swapElement = /*#__PURE__*/React__default.createElement(SwapWrapper, {
    isDark: isDark,
    className: className,
    id: "swap-page"
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      backgroundColor: colors.dark_blue,
      padding: 8
    }
  }, /*#__PURE__*/React__default.createElement(TokenSafetyModal, {
    isOpen: importTokensNotInDefault.length > 0 && !dismissTokenWarning,
    tokenAddress: importTokensNotInDefault[0]?.address,
    secondTokenAddress: importTokensNotInDefault[1]?.address,
    onContinue: handleConfirmTokenWarning,
    onCancel: handleDismissTokenWarning,
    showCancel: true
  }), trade && showConfirm && /*#__PURE__*/React__default.createElement(ConfirmSwapModal, {
    trade: trade,
    inputCurrency: inputCurrency,
    originalTrade: tradeToConfirm,
    onAcceptChanges: handleAcceptChanges,
    onCurrencySelection: onCurrencySelection,
    swapResult: swapResult,
    allowedSlippage: allowedSlippage,
    clearSwapState: clearSwapState,
    onConfirm: handleSwap,
    allowance: allowance,
    swapError: swapError,
    onDismiss: handleConfirmDismiss,
    fiatValueInput: fiatValueTradeInput,
    fiatValueOutput: fiatValueTradeOutput
  }), showPriceImpactModal && showPriceImpactWarning && /*#__PURE__*/React__default.createElement(PriceImpactModal, {
    priceImpact: largerPriceImpact,
    onDismiss: () => setShowPriceImpactModal(false),
    onContinue: () => {
      setShowPriceImpactModal(false);
      handleContinueToReview();
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "relative"
    }
  }, /*#__PURE__*/React__default.createElement(SwapSection, null, /*#__PURE__*/React__default.createElement(Trace, {
    section: InterfaceSectionName.CURRENCY_INPUT_PANEL
  }, /*#__PURE__*/React__default.createElement(SwapCurrencyInputPanel, {
    label: /*#__PURE__*/React__default.createElement(Trans, {
      id: "xNB0TS",
      message: "Sell"
    }),
    disabled: disableTokenInputs,
    value: formattedAmounts[Field.INPUT],
    showMaxButton: showMaxButton,
    currency: currencies[Field.INPUT] ?? null,
    onUserInput: handleTypeInput,
    onMax: handleMaxInput,
    fiatValue: showFiatValueInput ? fiatValueInput : undefined,
    onCurrencySelect: handleInputSelect,
    otherCurrency: currencies[Field.OUTPUT],
    showCommonBases: true,
    id: InterfaceSectionName.CURRENCY_INPUT_PANEL,
    loading: independentField === Field.OUTPUT && routeIsSyncing,
    ref: inputCurrencyNumericalInputRef
  }))), /*#__PURE__*/React__default.createElement(ArrowWrapper, {
    clickable: isSupportedChain(chainId)
  }, /*#__PURE__*/React__default.createElement(TraceEvent, {
    events: [BrowserEvent.onClick],
    name: SwapEventName.SWAP_TOKENS_REVERSED,
    element: InterfaceElementName.SWAP_TOKENS_REVERSE_ARROW_BUTTON
  }, /*#__PURE__*/React__default.createElement(ArrowContainer, {
    "data-testid": "swap-currency-button",
    onClick: () => {
      if (disableTokenInputs) return;
      onSwitchTokens(inputTokenHasTax, formattedAmounts[dependentField]);
      maybeLogFirstSwapAction(trace);
    }
  }, /*#__PURE__*/React__default.createElement(Repeat, {
    size: "24",
    color: colors.light_blue
  }))))), /*#__PURE__*/React__default.createElement(AutoColumn, {
    gap: "xs"
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(OutputSwapSection, null, /*#__PURE__*/React__default.createElement(Trace, {
    section: InterfaceSectionName.CURRENCY_OUTPUT_PANEL
  }, /*#__PURE__*/React__default.createElement(SwapCurrencyInputPanel, {
    value: formattedAmounts[Field.OUTPUT],
    disabled: disableTokenInputs,
    onUserInput: handleTypeOutput,
    label: /*#__PURE__*/React__default.createElement(Trans, {
      id: "qiOIiY",
      message: "Buy"
    }),
    showMaxButton: false,
    hideBalance: false,
    fiatValue: showFiatValueOutput ? fiatValueOutput : undefined,
    priceImpact: stablecoinPriceImpact,
    currency: currencies[Field.OUTPUT] ?? null,
    onCurrencySelect: handleOutputSelect,
    otherCurrency: currencies[Field.INPUT],
    showCommonBases: true,
    id: InterfaceSectionName.CURRENCY_OUTPUT_PANEL,
    loading: independentField === Field.INPUT && routeIsSyncing,
    numericalInputSettings: {
      // We disable numerical input here if the selected token has tax, since we cannot guarantee exact_outputs for FOT tokens
      disabled: outputTokenHasTax,
      // Focus the input currency panel if the user tries to type into the disabled output currency panel
      onDisabledClick: () => inputCurrencyNumericalInputRef.current?.focus(),
      disabledTooltipBody: /*#__PURE__*/React__default.createElement(OutputTaxTooltipBody, {
        currencySymbol: currencies[Field.OUTPUT]?.symbol
      })
    }
  })), recipient !== null && !showWrap ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(AutoRow, {
    justify: "space-between",
    style: {
      padding: "0 1rem"
    }
  }, /*#__PURE__*/React__default.createElement(ArrowWrapper, {
    clickable: false
  }, /*#__PURE__*/React__default.createElement(ArrowDown, {
    size: "16",
    color: theme.neutral2
  })), /*#__PURE__*/React__default.createElement(LinkStyledButton, {
    id: "remove-recipient-button",
    onClick: () => onChangeRecipient(null)
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "ZA1iFe",
    message: "- Remove recipient"
  }))), /*#__PURE__*/React__default.createElement(AddressInputPanel, {
    id: "recipient",
    value: recipient,
    onChange: onChangeRecipient
  })) : null)), showPriceImpactWarning && /*#__PURE__*/React__default.createElement(PriceImpactWarning, {
    priceImpact: largerPriceImpact
  }), /*#__PURE__*/React__default.createElement("div", null, swapIsUnsupported ? /*#__PURE__*/React__default.createElement(ButtonPrimary, {
    $borderRadius: "16px",
    disabled: true
  }, /*#__PURE__*/React__default.createElement(ThemedText.DeprecatedMain, {
    mb: "4px"
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "Z941Tw",
    message: "Unsupported asset"
  }))) : switchingChain ? /*#__PURE__*/React__default.createElement(ButtonPrimary, {
    $borderRadius: "16px",
    disabled: true
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "dygCbX",
    message: "Connecting to {0}",
    values: {
      0: getChainInfo(switchingChain)?.label
    }
  })) : connectionReady && !account ? /*#__PURE__*/React__default.createElement(TraceEvent, {
    events: [BrowserEvent.onClick],
    name: InterfaceEventName.CONNECT_WALLET_BUTTON_CLICKED,
    properties: {
      received_swap_quote: getIsReviewableQuote(trade, tradeState, swapInputError)
    },
    element: InterfaceElementName.CONNECT_WALLET_BUTTON
  }, /*#__PURE__*/React__default.createElement(ButtonLight, {
    onClick: toggleWalletDrawer,
    fontWeight: 535,
    $borderRadius: "16px"
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "VHOVEJ",
    message: "Connect wallet"
  }))) : chainId && chainId !== connectedChainId ? /*#__PURE__*/React__default.createElement(ButtonPrimary, {
    $borderRadius: "16px",
    onClick: async () => {
      try {
        await switchChain(connector, chainId);
      } catch (error) {
        if (didUserReject(error)) ; else {
          // TODO(WEB-3306): This UX could be improved to show an error state.
          throw error;
        }
      }
    }
  }, "Connect to ", getChainInfo(chainId)?.label) : showWrap ? /*#__PURE__*/React__default.createElement(ButtonPrimary, {
    $borderRadius: "16px",
    disabled: Boolean(wrapInputError),
    onClick: handleOnWrap,
    fontWeight: 535,
    "data-testid": "wrap-button"
  }, wrapInputError ? /*#__PURE__*/React__default.createElement(WrapErrorText, {
    wrapInputError: wrapInputError
  }) : wrapType === WrapType.WRAP ? /*#__PURE__*/React__default.createElement(Trans, {
    id: "hf18Me",
    message: "Wrap"
  }) : wrapType === WrapType.UNWRAP ? /*#__PURE__*/React__default.createElement(Trans, {
    id: "R3B9EM",
    message: "Unwrap"
  }) : null) : routeNotFound && userHasSpecifiedInputOutput && !routeIsLoading && !routeIsSyncing ? /*#__PURE__*/React__default.createElement(GrayCard, {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React__default.createElement(ThemedText.DeprecatedMain, {
    mb: "4px"
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "t2JA0p",
    message: "Insufficient liquidity for this trade."
  }))) : /*#__PURE__*/React__default.createElement(TraceEvent, {
    events: [BrowserEvent.onClick],
    name: SharedEventName.ELEMENT_CLICKED,
    element: InterfaceElementName.SWAP_BUTTON
  }, /*#__PURE__*/React__default.createElement(ButtonError, {
    onClick: () => {
      showPriceImpactWarning ? setShowPriceImpactModal(true) : handleContinueToReview();
    },
    id: "swap-button",
    "data-testid": "swap-button",
    disabled: !getIsReviewableQuote(trade, tradeState, swapInputError),
    error: !swapInputError && priceImpactSeverity > 2 && allowance.state === AllowanceState.ALLOWED
  }, /*#__PURE__*/React__default.createElement(Text, {
    fontSize: 20
  }, swapInputError ? swapInputError : routeIsSyncing || routeIsLoading ? /*#__PURE__*/React__default.createElement(Trans, {
    id: "vH2C/2",
    message: "Swap"
  }) : priceImpactSeverity > 2 ? /*#__PURE__*/React__default.createElement(Trans, {
    id: "+q+Wa9",
    message: "Swap anyway"
  }) : /*#__PURE__*/React__default.createElement(Trans, {
    id: "vH2C/2",
    message: "Swap"
  })))))), !showOptInSmall && !isUniswapXDefaultEnabled && /*#__PURE__*/React__default.createElement(UniswapXOptIn, {
    isSmall: false,
    swapInfo: swapInfo
  })), showDetailsDropdown && /*#__PURE__*/React__default.createElement(SwapDetailsDropdown, {
    trade: trade,
    syncing: routeIsSyncing,
    loading: routeIsLoading,
    allowedSlippage: allowedSlippage
  }));
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, swapElement, showOptInSmall && !isUniswapXDefaultEnabled && /*#__PURE__*/React__default.createElement(UniswapXOptIn, {
    isSmall: true,
    swapInfo: swapInfo
  }));
}

export { ArrowContainer, Swap, SwapPage as default };
