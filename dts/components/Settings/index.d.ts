/// <reference types="react" />
import { Percent } from "@uniswap/sdk-core";
import { InterfaceTrade } from "state/routing/types";
export default function SettingsTab({ autoSlippage, chainId, trade, showRoutingSettings, }: {
    autoSlippage: Percent;
    chainId?: number;
    trade?: InterfaceTrade;
    showRoutingSettings?: boolean;
}): JSX.Element;
