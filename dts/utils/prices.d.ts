import { Trade } from "@uniswap/router-sdk";
import { Currency, CurrencyAmount, Percent, TradeType } from "@uniswap/sdk-core";
import { DefaultTheme } from "styled-components";
export declare function computeRealizedPriceImpact(trade: Trade<Currency, Currency, TradeType>): Percent;
export declare function computeRealizedLPFeeAmount(trade?: Trade<Currency, Currency, TradeType> | null): CurrencyAmount<Currency> | undefined;
type WarningSeverity = 0 | 1 | 2 | 3 | 4;
export declare function warningSeverity(priceImpact: Percent | undefined): WarningSeverity;
export declare function getPriceImpactWarning(priceImpact: Percent): "warning" | "error" | undefined;
export declare function getPriceImpactColor(priceImpact: Percent): keyof DefaultTheme | undefined;
export {};