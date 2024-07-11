import { Currency, CurrencyAmount, Percent, TradeType } from "@uniswap/sdk-core";
import { ClassicTrade, INTERNAL_ROUTER_PREFERENCE_PRICE, RouterPreference, SubmittableTrade, TradeState } from "./types";
export declare function useRoutingAPITrade<TTradeType extends TradeType>(skipFetch: boolean, tradeType: TTradeType, amountSpecified: CurrencyAmount<Currency> | undefined, otherCurrency: Currency | undefined, routerPreference: typeof INTERNAL_ROUTER_PREFERENCE_PRICE, account?: string, inputTax?: Percent, outputTax?: Percent): {
    state: TradeState;
    trade?: ClassicTrade;
    currentTrade?: ClassicTrade;
    swapQuoteLatency?: number;
};
export declare function useRoutingAPITrade<TTradeType extends TradeType>(skipFetch: boolean, tradeType: TTradeType, amountSpecified: CurrencyAmount<Currency> | undefined, otherCurrency: Currency | undefined, routerPreference: RouterPreference, account?: string, inputTax?: Percent, outputTax?: Percent): {
    state: TradeState;
    trade?: SubmittableTrade;
    currentTrade?: SubmittableTrade;
    swapQuoteLatency?: number;
};
