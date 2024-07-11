import React from "react";
export declare const MODAL_TRANSITION_DURATION = 200;
interface ModalProps {
    isOpen: boolean;
    onDismiss?: () => void;
    onSwipe?: () => void;
    height?: number;
    minHeight?: number | false;
    maxHeight?: number;
    maxWidth?: number;
    initialFocusRef?: React.RefObject<any>;
    children?: React.ReactNode;
    $scrollOverlay?: boolean;
    hideBorder?: boolean;
}
export default function Modal({ isOpen, onDismiss, minHeight, maxHeight, maxWidth, height, initialFocusRef, children, onSwipe, $scrollOverlay, hideBorder, }: ModalProps): JSX.Element;
export {};
