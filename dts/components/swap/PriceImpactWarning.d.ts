/// <reference types="react" />
import { Percent } from "@uniswap/sdk-core";
interface PriceImpactWarningProps {
    priceImpact: Percent;
}
export default function PriceImpactWarning({ priceImpact, }: PriceImpactWarningProps): JSX.Element;
export {};
