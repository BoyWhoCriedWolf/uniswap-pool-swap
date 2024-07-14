/// <reference types="react" />
import { SwapResult } from "hooks/useSwapCallback";
import { InterfaceTrade } from "state/routing/types";
import { ConfirmModalState } from "../ConfirmSwapModal";
export declare const PendingModalContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    gap?: "sm" | "md" | "lg" | "xl" | "xs" | undefined;
}, never>;
export type PendingConfirmModalState = Extract<ConfirmModalState, ConfirmModalState.APPROVING_TOKEN | ConfirmModalState.PERMITTING | ConfirmModalState.PENDING_CONFIRMATION | ConfirmModalState.WRAPPING | ConfirmModalState.RESETTING_TOKEN_ALLOWANCE>;
interface PendingModalContentProps {
    steps: PendingConfirmModalState[];
    currentStep: PendingConfirmModalState;
    trade?: InterfaceTrade;
    swapResult?: SwapResult;
    wrapTxHash?: string;
    hideStepIndicators?: boolean;
    tokenApprovalPending?: boolean;
    revocationPending?: boolean;
    swapError?: Error | string;
    onRetryUniswapXSignature?: () => void;
}
export declare function PendingModalContent({ steps, currentStep, trade, swapResult, wrapTxHash, hideStepIndicators, tokenApprovalPending, revocationPending, swapError, onRetryUniswapXSignature, }: PendingModalContentProps): JSX.Element | null;
export {};
