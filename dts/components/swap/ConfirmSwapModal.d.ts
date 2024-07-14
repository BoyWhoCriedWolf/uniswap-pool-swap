/// <reference types="react" />
import { Currency, Percent } from "@uniswap/sdk-core";
import { Allowance } from "hooks/usePermit2Allowance";
import { SwapResult } from "hooks/useSwapCallback";
import { InterfaceTrade } from "state/routing/types";
import { Field } from "state/swap/actions";
export declare enum ConfirmModalState {
    REVIEWING = 0,
    WRAPPING = 1,
    RESETTING_TOKEN_ALLOWANCE = 2,
    APPROVING_TOKEN = 3,
    PERMITTING = 4,
    PENDING_CONFIRMATION = 5
}
export default function ConfirmSwapModal({ trade, inputCurrency, originalTrade, onAcceptChanges, allowedSlippage, allowance, clearSwapState, onConfirm, onDismiss, onCurrencySelection, swapError, swapResult, fiatValueInput, fiatValueOutput, }: {
    trade: InterfaceTrade;
    inputCurrency?: Currency;
    originalTrade?: InterfaceTrade;
    swapResult?: SwapResult;
    allowedSlippage: Percent;
    allowance: Allowance;
    onAcceptChanges: () => void;
    clearSwapState: () => void;
    onConfirm: () => void;
    swapError?: Error;
    onDismiss: () => void;
    onCurrencySelection: (field: Field, currency: Currency) => void;
    fiatValueInput: {
        data?: number;
        isLoading: boolean;
    };
    fiatValueOutput: {
        data?: number;
        isLoading: boolean;
    };
}): JSX.Element;
