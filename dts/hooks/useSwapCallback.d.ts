import { Percent } from "@uniswap/sdk-core";
import { PermitSignature } from "hooks/usePermitAllowance";
import { InterfaceTrade, TradeFillType } from "state/routing/types";
export type SwapResult = Awaited<ReturnType<ReturnType<typeof useSwapCallback>>>;
export declare function useSwapCallback(trade: InterfaceTrade | undefined, // trade to execute, required
fiatValues: {
    amountIn?: number;
    amountOut?: number;
}, // usd values for amount in and out, logged for analytics
allowedSlippage: Percent, // in bips
permitSignature: PermitSignature | undefined): () => Promise<{
    type: TradeFillType.UniswapX;
    response: {
        orderHash: string;
        deadline: number;
    };
} | {
    type: TradeFillType.Classic;
    response: import("@ethersproject/abstract-provider").TransactionResponse;
}>;
