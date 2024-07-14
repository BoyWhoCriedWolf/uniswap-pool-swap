import { Currency, CurrencyAmount, Percent, Price, Token } from "@uniswap/sdk-core";
import { SupportedLocalCurrency } from "constants/localCurrencies";
import { SupportedLocale } from "constants/locales";
import { Bound } from "state/mint/v3/actions";
type Nullish<T> = T | null | undefined;
type NumberFormatOptions = Intl.NumberFormatOptions;
type HardCodedInputFormat = {
    input: number;
    prefix?: string;
    hardcodedOutput?: undefined;
} | {
    input?: undefined;
    prefix?: undefined;
    hardcodedOutput: string;
};
type FormatterBaseRule = {
    formatterOptions: NumberFormatOptions;
};
type FormatterExactRule = {
    upperBound?: undefined;
    exact: number;
} & FormatterBaseRule;
type FormatterUpperBoundRule = {
    upperBound: number;
    exact?: undefined;
} & FormatterBaseRule;
type FormatterRule = (FormatterExactRule | FormatterUpperBoundRule) & {
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
type FormatterType = NumberType | FormatterRule[];
interface FormatNumberOptions {
    input: Nullish<number>;
    type?: FormatterType;
    placeholder?: string;
    locale?: SupportedLocale;
    localCurrency?: SupportedLocalCurrency;
    conversionRate?: number;
}
interface FormatCurrencyAmountOptions {
    amount: Nullish<CurrencyAmount<Currency>>;
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
export declare function useFormatterLocales(): {
    formatterLocale: SupportedLocale;
    formatterLocalCurrency: SupportedLocalCurrency;
};
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
