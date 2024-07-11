import { Percent } from "@uniswap/sdk-core";
export declare enum SlippageValidationResult {
    TooLow = 0,
    TooHigh = 1,
    Valid = 2
}
export declare const MINIMUM_RECOMMENDED_SLIPPAGE: Percent;
export declare const MAXIMUM_RECOMMENDED_SLIPPAGE: Percent;
export default function validateUserSlippageTolerance(userSlippageTolerance: Percent): SlippageValidationResult;
