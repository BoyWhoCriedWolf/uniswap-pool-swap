import { Currency } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import { ChartEntry } from "./types";
export declare function useDensityChartData({ currencyA, currencyB, feeAmount, }: {
    currencyA?: Currency;
    currencyB?: Currency;
    feeAmount?: FeeAmount;
}): {
    isLoading: boolean;
    error: any;
    formattedData: ChartEntry[] | undefined;
};
