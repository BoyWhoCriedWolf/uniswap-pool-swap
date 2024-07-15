import { Currency, CurrencyAmount, Percent, TradeType } from "@uniswap/sdk-core";
import { PreviewTrade, TradeState } from "./types";
export declare function usePreviewTrade(skipFetch: boolean | undefined, tradeType: TradeType, amountSpecified: CurrencyAmount<Currency> | undefined, otherCurrency: Currency | undefined, inputTax?: Percent, outputTax?: Percent): {
    state: TradeState;
    trade?: PreviewTrade;
    currentTrade?: PreviewTrade;
    swapQuoteLatency?: number;
};
