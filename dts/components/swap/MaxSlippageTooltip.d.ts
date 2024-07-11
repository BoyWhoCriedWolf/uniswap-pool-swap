/// <reference types="react" />
import { Percent } from "@uniswap/sdk-core";
import { InterfaceTrade } from "state/routing/types";
export declare function MaxSlippageTooltip({ trade, allowedSlippage, }: {
    trade: InterfaceTrade;
    allowedSlippage: Percent;
}): JSX.Element;
