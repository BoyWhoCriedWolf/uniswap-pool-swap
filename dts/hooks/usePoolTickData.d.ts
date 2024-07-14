import { Currency } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import JSBI from "jsbi";
export interface TickProcessed {
    tick: number;
    liquidityActive: JSBI;
    liquidityNet: JSBI;
    price0: string;
}
export declare function usePoolActiveLiquidity(currencyA: Currency | undefined, currencyB: Currency | undefined, feeAmount: FeeAmount | undefined): {
    isLoading: boolean;
    error: any;
    activeTick?: number;
    data?: TickProcessed[];
};
