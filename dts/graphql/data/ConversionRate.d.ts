import { SupportedLocalCurrency } from "constants/localCurrencies";
export declare function useLocalCurrencyConversionRate(localCurrency: SupportedLocalCurrency, skip?: boolean): {
    data: number | undefined;
    isLoading: boolean;
};
