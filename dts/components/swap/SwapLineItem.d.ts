import { Percent } from "@uniswap/sdk-core";
import React from "react";
import { InterfaceTrade } from "state/routing/types";
export declare enum SwapLineItemType {
    EXCHANGE_RATE = 0,
    NETWORK_COST = 1,
    INPUT_TOKEN_FEE_ON_TRANSFER = 2,
    OUTPUT_TOKEN_FEE_ON_TRANSFER = 3,
    PRICE_IMPACT = 4,
    MAX_SLIPPAGE = 5,
    MAXIMUM_INPUT = 6,
    MINIMUM_OUTPUT = 7,
    ROUTING_INFO = 8
}
interface SwapLineItemProps {
    trade: InterfaceTrade;
    syncing: boolean;
    allowedSlippage: Percent;
    type: SwapLineItemType;
}
declare function SwapLineItem(props: SwapLineItemProps): JSX.Element | null;
declare const _default: React.MemoExoticComponent<typeof SwapLineItem>;
export default _default;
