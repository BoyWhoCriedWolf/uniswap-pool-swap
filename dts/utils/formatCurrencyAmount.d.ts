import { Currency, CurrencyAmount } from "@uniswap/sdk-core";
import { SupportedLocale } from "constants/locales";
export declare function formatCurrencyAmount(amount: CurrencyAmount<Currency> | undefined, sigFigs: number, locale?: SupportedLocale, fixedDecimals?: number): string;
