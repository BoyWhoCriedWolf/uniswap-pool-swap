import { PropsWithChildren } from 'react';
declare type BottomSheetModalProps = PropsWithChildren<{
    onClose: () => void;
    open: boolean;
    title?: string;
}>;
export declare function BottomSheetModal({ children, onClose, open, title }: BottomSheetModalProps): JSX.Element;
export {};
