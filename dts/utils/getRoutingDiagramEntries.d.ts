import { Protocol } from "@uniswap/router-sdk";
import { Currency, Percent } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import { ClassicTrade } from "state/routing/types";
export interface RoutingDiagramEntry {
    percent: Percent;
    path: [Currency, Currency, FeeAmount][];
    protocol: Protocol;
}
/**
 * Loops through all routes on a trade and returns an array of diagram entries.
 */
export default function getRoutingDiagramEntries(trade: ClassicTrade): RoutingDiagramEntry[];
