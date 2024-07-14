import { ChainId, Currency, CurrencyAmount, Percent } from "@uniswap/sdk-core";
import { ParsedQs } from "qs";
import { ReactNode } from "react";
import { AnyAction } from "redux";
import { InterfaceTrade, TradeState } from "state/routing/types";
import { Field } from "./actions";
import { SwapState } from "./reducer";
export declare function useSwapActionHandlers(dispatch: React.Dispatch<AnyAction>): {
    onCurrencySelection: (field: Field, currency: Currency) => void;
    onSwitchTokens: (newOutputHasTax: boolean, previouslyEstimatedOutput: string) => void;
    onUserInput: (field: Field, typedValue: string) => void;
    onChangeRecipient: (recipient: string | null) => void;
};
export type SwapInfo = {
    currencies: {
        [field in Field]?: Currency;
    };
    currencyBalances: {
        [field in Field]?: CurrencyAmount<Currency>;
    };
    inputTax: Percent;
    outputTax: Percent;
    parsedAmount?: CurrencyAmount<Currency>;
    inputError?: ReactNode;
    trade: {
        trade?: InterfaceTrade;
        state: TradeState;
        uniswapXGasUseEstimateUSD?: number;
        error?: any;
        swapQuoteLatency?: number;
    };
    allowedSlippage: Percent;
    autoSlippage: Percent;
};
export declare function useDerivedSwapInfo(state: SwapState, chainId: ChainId | undefined): SwapInfo;
export declare function queryParametersToSwapState(parsedQs: ParsedQs): SwapState;
export declare function useDefaultsFromURLSearch(): SwapState;
