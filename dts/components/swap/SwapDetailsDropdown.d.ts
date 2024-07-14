/// <reference types="react" />
import { Percent } from "@uniswap/sdk-core";
import { InterfaceTrade } from "state/routing/types";
interface SwapDetailsProps {
    trade?: InterfaceTrade;
    syncing: boolean;
    loading: boolean;
    allowedSlippage: Percent;
}
export default function SwapDetailsDropdown(props: SwapDetailsProps): JSX.Element;
export {};
