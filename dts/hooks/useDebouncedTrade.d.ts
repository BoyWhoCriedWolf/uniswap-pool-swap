import { Currency, CurrencyAmount, Percent, TradeType } from "@uniswap/sdk-core";
import { ClassicTrade, InterfaceTrade, RouterPreference, TradeState } from "state/routing/types";
export declare function useDebouncedTrade(tradeType: TradeType, amountSpecified?: CurrencyAmount<Currency>, otherCurrency?: Currency, routerPreferenceOverride?: RouterPreference.X, account?: string, inputTax?: Percent, outputTax?: Percent): {
    state: TradeState;
    trade?: InterfaceTrade;
    swapQuoteLatency?: number;
};
export declare function useDebouncedTrade(tradeType: TradeType, amountSpecified?: CurrencyAmount<Currency>, otherCurrency?: Currency, routerPreferenceOverride?: RouterPreference.API | RouterPreference.CLIENT, account?: string, inputTax?: Percent, outputTax?: Percent): {
    state: TradeState;
    trade?: ClassicTrade;
    swapQuoteLatency?: number;
};
