/// <reference types="react" />
interface BagHeaderProps {
    numberOfAssets: number;
    closeBag: () => void;
    resetFlow: () => void;
    isProfilePage: boolean;
}
export declare const BagHeader: ({ numberOfAssets, closeBag, resetFlow, isProfilePage, }: BagHeaderProps) => JSX.Element;
export {};
