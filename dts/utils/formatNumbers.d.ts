import { Currency, CurrencyAmount, Percent, Price, Token } from '@uniswap/sdk-core';
import { SupportedLocale } from 'constants/locales';
import { SupportedLocalCurrency } from '../constants/localCurrencies';
export declare function currencyAmountToPreciseFloat(currencyAmount: CurrencyAmount<Currency> | undefined): number | undefined;
export declare function priceToPreciseFloat(price: Price<Currency, Currency> | undefined): number | undefined;
interface FormatDollarArgs {
    num: number | undefined | null;
    lessPreciseStablecoinValues?: boolean;
}
export declare function formatDollar({ num, lessPreciseStablecoinValues }: FormatDollarArgs): string;
export declare function formatTransactionAmount(num: number | undefined | null, maxDigits?: number): string;
declare type Nullish<T> = T | null | undefined;
declare type NumberFormatOptions = Intl.NumberFormatOptions;
declare type FormatterType = NumberType | FormatterRule[];
declare type HardCodedInputFormat = {
    input: number;
    prefix?: string;
    hardcodedOutput?: undefined;
} | {
    input?: undefined;
    prefix?: undefined;
    hardcodedOutput: string;
};
declare type FormatterBaseRule = {
    formatterOptions: NumberFormatOptions;
};
declare type FormatterExactRule = {
    upperBound?: undefined;
    exact: number;
} & FormatterBaseRule;
declare type FormatterUpperBoundRule = {
    upperBound: number;
    exact?: undefined;
} & FormatterBaseRule;
declare type FormatterRule = (FormatterExactRule | FormatterUpperBoundRule) & {
    hardCodedInput?: HardCodedInputFormat;
};
export declare enum NumberType {
    TokenNonTx = "token-non-tx",
    TokenTx = "token-tx",
    SwapPrice = "swap-price",
    SwapTradeAmount = "swap-trade-amount",
    SwapDetailsAmount = "swap-details-amount",
    FiatTokenDetails = "fiat-token-details",
    FiatTokenPrice = "fiat-token-price",
    FiatTokenStats = "fiat-token-stats",
    FiatTokenQuantity = "fiat-token-quantity",
    FiatGasPrice = "fiat-gas-price",
    PortfolioBalance = "portfolio-balance",
    NFTTokenFloorPrice = "nft-token-floor-price",
    NFTCollectionStats = "nft-collection-stats",
    NFTTokenFloorPriceTrailingZeros = "nft-token-floor-price-trailing-zeros"
}
interface FormatNumberOptions {
    input: Nullish<number>;
    type?: FormatterType;
    placeholder?: string;
    locale?: SupportedLocale;
    localCurrency?: SupportedLocalCurrency;
    conversionRate?: number;
}
interface FormatPriceOptions {
    price: Nullish<Price<Currency, Currency>>;
    type: FormatterType;
    locale?: SupportedLocale;
    localCurrency?: SupportedLocalCurrency;
    conversionRate?: number;
}
export declare enum Bound {
    LOWER = "LOWER",
    UPPER = "UPPER"
}
interface FormatTickPriceOptions {
    price?: Price<Token, Token>;
    atLimit: {
        [bound in Bound]?: boolean | undefined;
    };
    direction: Bound;
    placeholder?: string;
    numberType?: NumberType;
    locale?: SupportedLocale;
    localCurrency?: SupportedLocalCurrency;
    conversionRate?: number;
}
export declare function formatTickPrice({ price, atLimit, direction, placeholder, numberType, locale, localCurrency, conversionRate, }: FormatTickPriceOptions): string;
export declare function useFormatterLocales(): {
    formatterLocale: SupportedLocale;
    formatterLocalCurrency: SupportedLocalCurrency;
};
interface FormatCurrencyAmountOptions {
    amount: Nullish<CurrencyAmount<Currency>>;
    type?: FormatterType;
    placeholder?: string;
    locale?: SupportedLocale;
    localCurrency?: SupportedLocalCurrency;
    conversionRate?: number;
}
interface FormatNumberOrStringOptions {
    input: Nullish<number | string>;
    type: FormatterType;
    locale?: SupportedLocale;
    localCurrency?: SupportedLocalCurrency;
    conversionRate?: number;
}
interface FormatNumberOrStringOptions {
    input: Nullish<number | string>;
    type: FormatterType;
    locale?: SupportedLocale;
    localCurrency?: SupportedLocalCurrency;
    conversionRate?: number;
}
interface FormatFiatPriceOptions {
    price: Nullish<number | string>;
    type?: FormatterType;
    locale?: SupportedLocale;
    localCurrency?: SupportedLocalCurrency;
    conversionRate?: number;
}
export declare function useFormatter(): {
    formatCurrencyAmount: (options: Omit<FormatCurrencyAmountOptions, "locale" | "localCurrency" | "conversionRate">) => string;
    formatFiatPrice: (options: Omit<FormatFiatPriceOptions, "locale" | "localCurrency" | "conversionRate">) => string;
    formatNumber: (options: Omit<FormatNumberOptions, "locale" | "localCurrency" | "conversionRate">) => string;
    formatNumberOrString: (options: Omit<FormatNumberOrStringOptions, "locale" | "localCurrency" | "conversionRate">) => string;
    formatPercent: (percent: Nullish<number>) => string;
    formatPrice: (options: Omit<FormatPriceOptions, "locale" | "localCurrency" | "conversionRate">) => string;
    formatPriceImpact: (priceImpact: Percent | undefined) => string;
    formatReviewSwapCurrencyAmount: (amount: CurrencyAmount<Currency>) => string;
    formatSlippage: (slippage: Percent | undefined) => string;
    formatTickPrice: (options: Omit<FormatTickPriceOptions, "locale" | "localCurrency" | "conversionRate">) => string;
};
export {};
