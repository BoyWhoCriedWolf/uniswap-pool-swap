import { ClassicTrade } from "state/routing/types";
export interface PriceImpact {
    priceImpactSeverity: PriceImpactSeverity;
    displayPercentage(): string;
}
interface PriceImpactSeverity {
    type: "warning" | "error";
    color: string;
}
export declare function usePriceImpact(trade?: ClassicTrade): PriceImpact | undefined;
export {};
