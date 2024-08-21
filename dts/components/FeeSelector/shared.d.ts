import { ChainId } from '@uniswap/sdk-core';
import { FeeAmount } from '@uniswap/v3-sdk';
export declare const FEE_AMOUNT_DETAIL: Record<FeeAmount, {
    label: string;
    description: string;
    supportedChains: readonly ChainId[];
}>;
