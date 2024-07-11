/// <reference types="react" />
import { Percent } from "@uniswap/sdk-core";
import { InterfaceTrade } from "state/routing/types";
export default function SwapHeader({ autoSlippage, chainId, trade, }: {
    autoSlippage: Percent;
    chainId?: number;
    trade?: InterfaceTrade;
}): JSX.Element;
