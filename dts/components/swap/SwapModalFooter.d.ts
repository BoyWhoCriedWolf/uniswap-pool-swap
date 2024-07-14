import { Percent } from "@uniswap/sdk-core";
import { SwapResult } from "hooks/useSwapCallback";
import { ReactNode } from "react";
import { InterfaceTrade } from "state/routing/types";
export default function SwapModalFooter({ trade, allowedSlippage, swapResult, onConfirm, swapErrorMessage, disabledConfirm, fiatValueInput, fiatValueOutput, showAcceptChanges, onAcceptChanges, isLoading, }: {
    trade: InterfaceTrade;
    swapResult?: SwapResult;
    allowedSlippage: Percent;
    onConfirm: () => void;
    swapErrorMessage?: ReactNode;
    disabledConfirm: boolean;
    fiatValueInput: {
        data?: number;
        isLoading: boolean;
    };
    fiatValueOutput: {
        data?: number;
        isLoading: boolean;
    };
    showAcceptChanges: boolean;
    onAcceptChanges: () => void;
    isLoading: boolean;
}): JSX.Element;
