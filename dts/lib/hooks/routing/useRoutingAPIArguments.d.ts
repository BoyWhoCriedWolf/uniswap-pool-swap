import { SkipToken } from "@reduxjs/toolkit/query/react";
import { Currency, CurrencyAmount, Percent, TradeType } from "@uniswap/sdk-core";
import { GetQuoteArgs, INTERNAL_ROUTER_PREFERENCE_PRICE, RouterPreference } from "state/routing/types";
/**
 * Returns query arguments for the Routing API query or undefined if the
 * query should be skipped. Input arguments do not need to be memoized, as they will
 * be destructured.
 */
export declare function useRoutingAPIArguments({ account, tokenIn, tokenOut, amount, tradeType, routerPreference, inputTax, outputTax, }: {
    account?: string;
    tokenIn?: Currency;
    tokenOut?: Currency;
    amount?: CurrencyAmount<Currency>;
    tradeType: TradeType;
    routerPreference: RouterPreference | typeof INTERNAL_ROUTER_PREFERENCE_PRICE;
    inputTax: Percent;
    outputTax: Percent;
}): GetQuoteArgs | SkipToken;
