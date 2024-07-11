import { BigNumber } from "@ethersproject/bignumber";
import { Percent } from "@uniswap/sdk-core";
import { FeeOptions } from "@uniswap/v3-sdk";
import { ClassicTrade, TradeFillType } from "state/routing/types";
import { PermitSignature } from "./usePermitAllowance";
interface SwapOptions {
    slippageTolerance: Percent;
    deadline?: BigNumber;
    permit?: PermitSignature;
    feeOptions?: FeeOptions;
}
export declare function useUniversalRouterSwapCallback(trade: ClassicTrade | undefined, fiatValues: {
    amountIn?: number;
    amountOut?: number;
}, options: SwapOptions): () => Promise<{
    type: TradeFillType.Classic;
    response: import("@ethersproject/abstract-provider").TransactionResponse;
}>;
export {};
