import { Currency } from "@uniswap/sdk-core";
import { ReactNode } from "react";
export declare function ConfirmationModalContent({ title, bottomContent, onDismiss, topContent, headerContent, }: {
    title: ReactNode;
    onDismiss: () => void;
    topContent: () => ReactNode;
    bottomContent?: () => ReactNode;
    headerContent?: () => ReactNode;
}): JSX.Element;
interface ConfirmationModalProps {
    isOpen: boolean;
    onDismiss: () => void;
    hash?: string;
    reviewContent: () => ReactNode;
    attemptingTxn: boolean;
    pendingText: ReactNode;
    currencyToAdd?: Currency;
}
export default function TransactionConfirmationModal({ isOpen, onDismiss, attemptingTxn, hash, pendingText, reviewContent, currencyToAdd, }: ConfirmationModalProps): JSX.Element | null;
export {};
