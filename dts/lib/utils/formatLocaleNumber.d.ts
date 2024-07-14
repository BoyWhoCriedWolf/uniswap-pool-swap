import { Currency, CurrencyAmount, Price } from "@uniswap/sdk-core";
interface FormatLocaleNumberArgs {
    number: CurrencyAmount<Currency> | Price<Currency, Currency> | number;
    locale?: string | null;
    options?: Intl.NumberFormatOptions;
    sigFigs?: number;
    fixedDecimals?: number;
}
export default function formatLocaleNumber({ number, locale, sigFigs, fixedDecimals, options, }: FormatLocaleNumberArgs): string;
export {};
