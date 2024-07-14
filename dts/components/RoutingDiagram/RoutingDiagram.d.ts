/// <reference types="react" />
import { Currency } from "@uniswap/sdk-core";
import { RoutingDiagramEntry } from "utils/getRoutingDiagramEntries";
export default function RoutingDiagram({ currencyIn, currencyOut, routes, }: {
    currencyIn: Currency;
    currencyOut: Currency;
    routes: RoutingDiagramEntry[];
}): JSX.Element;
