import { WalletAsset } from "nft/types";
import { Dispatch } from "react";
interface PriceTextInputProps {
    listPrice?: number;
    setListPrice: Dispatch<number | undefined>;
    isGlobalPrice: boolean;
    setGlobalOverride: Dispatch<boolean>;
    globalOverride: boolean;
    asset: WalletAsset;
}
export declare const PriceTextInput: ({ listPrice, setListPrice, isGlobalPrice, setGlobalOverride, globalOverride, asset, }: PriceTextInputProps) => JSX.Element;
export {};
