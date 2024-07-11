/// <reference types="react" />
import { InterfaceTrade } from "state/routing/types";
type GasBreakdownTooltipProps = {
    trade: InterfaceTrade;
    hideUniswapXDescription?: boolean;
};
export declare function GasBreakdownTooltip({ trade, hideUniswapXDescription, }: GasBreakdownTooltipProps): JSX.Element;
export declare function UniswapXDescription(): JSX.Element;
export {};
