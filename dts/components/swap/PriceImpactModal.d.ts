/// <reference types="react" />
import { Percent } from "@uniswap/sdk-core";
interface PriceImpactModalProps {
    priceImpact: Percent;
    onDismiss: () => void;
    onContinue: () => void;
}
export default function PriceImpactModal({ priceImpact, onDismiss, onContinue, }: PriceImpactModalProps): JSX.Element;
export {};
