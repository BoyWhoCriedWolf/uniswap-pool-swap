/// <reference types="react" />
import { Percent } from "@uniswap/sdk-core";
export declare function FiatValue({ fiatValue, priceImpact, }: {
    fiatValue: {
        data?: number;
        isLoading: boolean;
    };
    priceImpact?: Percent;
}): JSX.Element;
