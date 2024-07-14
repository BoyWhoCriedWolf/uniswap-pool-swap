import { Percent } from "@uniswap/sdk-core";
import { DutchOrderTrade, TradeFillType } from "state/routing/types";
export declare function useUniswapXSwapCallback({ trade, allowedSlippage, fiatValues, }: {
    trade?: DutchOrderTrade;
    fiatValues: {
        amountIn?: number;
        amountOut?: number;
    };
    allowedSlippage: Percent;
}): () => Promise<{
    type: TradeFillType.UniswapX;
    response: {
        orderHash: string;
        deadline: number;
    };
}>;
