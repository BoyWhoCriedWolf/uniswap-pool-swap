import { ChainId } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import type { ReactNode } from "react";
export declare const FEE_AMOUNT_DETAIL: Record<FeeAmount, {
    label: string;
    description: ReactNode;
    supportedChains: readonly ChainId[];
}>;
