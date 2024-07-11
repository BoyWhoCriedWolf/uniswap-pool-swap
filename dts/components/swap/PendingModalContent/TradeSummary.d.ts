/// <reference types="react" />
import { InterfaceTrade } from "state/routing/types";
export declare function TradeSummary({ trade, }: {
    trade: Pick<InterfaceTrade, "inputAmount" | "postTaxOutputAmount">;
}): JSX.Element;
