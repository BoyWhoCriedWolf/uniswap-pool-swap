/// <reference types="react" />
import { ChainId } from "@uniswap/sdk-core";
import { Field } from "state/swap/actions";
import { SwapState } from "state/swap/reducer";
export declare const ArrowContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export default function SwapPage({ className }: {
    className?: string;
}): JSX.Element;
/**
 * The swap component displays the swap interface, manages state for the swap, and triggers onchain swaps.
 *
 * In most cases, chainId should refer to the connected chain, i.e. `useWeb3React().chainId`.
 * However if this component is being used in a context that displays information from a different, unconnected
 * chain (e.g. the TDP), then chainId should refer to the unconnected chain.
 */
export declare function Swap({ className, initialInputCurrencyId, initialOutputCurrencyId, chainId, onCurrencyChange, disableTokenInputs, }: {
    className?: string;
    initialInputCurrencyId?: string | null;
    initialOutputCurrencyId?: string | null;
    chainId?: ChainId;
    onCurrencyChange?: (selected: Pick<SwapState, Field.INPUT | Field.OUTPUT>) => void;
    disableTokenInputs?: boolean;
}): JSX.Element;
