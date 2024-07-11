import { Percent } from "@uniswap/sdk-core";
export declare function useSwapTaxes(inputTokenAddress: string | undefined, outputTokenAddress: string | undefined): {
    inputTax: Percent;
    outputTax: Percent;
};
