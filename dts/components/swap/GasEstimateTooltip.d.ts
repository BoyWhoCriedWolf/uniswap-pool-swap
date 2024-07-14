/// <reference types="react" />
import { SubmittableTrade } from "state/routing/types";
export default function GasEstimateTooltip({ trade, loading, }: {
    trade?: SubmittableTrade;
    loading: boolean;
}): JSX.Element | null;
