import { Currency, CurrencyAmount } from "@uniswap/sdk-core";
export declare function useUSDPrice(currencyAmount?: CurrencyAmount<Currency>, prefetchCurrency?: Currency): {
    data?: number;
    isLoading: boolean;
};
