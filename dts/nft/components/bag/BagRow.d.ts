import { GenieAsset, UpdatedGenieAsset } from "nft/types";
import { MouseEvent } from "react";
export declare const RemoveButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("components/Button").ThemeButtonProps & import("react").RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const RemoveAssetButton: ({ onClick, }: {
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}) => JSX.Element;
interface BagRowProps {
    asset: UpdatedGenieAsset;
    usdPrice?: number;
    removeAsset: (assets: GenieAsset[]) => void;
    showRemove?: boolean;
    grayscale?: boolean;
    isMobile: boolean;
}
export declare const BagRow: ({ asset, usdPrice, removeAsset, showRemove, grayscale, isMobile, }: BagRowProps) => JSX.Element;
interface PriceChangeBagRowProps {
    asset: UpdatedGenieAsset;
    usdPrice?: number;
    markAssetAsReviewed: (asset: UpdatedGenieAsset, toKeep: boolean) => void;
    top?: boolean;
    isMobile: boolean;
}
export declare const PriceChangeBagRow: ({ asset, usdPrice, markAssetAsReviewed, top, isMobile, }: PriceChangeBagRowProps) => JSX.Element;
interface UnavailableAssetsHeaderRowProps {
    assets?: UpdatedGenieAsset[];
    usdPrice?: number;
    clearUnavailableAssets: () => void;
    didOpenUnavailableAssets: boolean;
    setDidOpenUnavailableAssets: (didOpen: boolean) => void;
    isMobile: boolean;
}
export declare const UnavailableAssetsHeaderRow: ({ assets, usdPrice, clearUnavailableAssets, didOpenUnavailableAssets, setDidOpenUnavailableAssets, isMobile, }: UnavailableAssetsHeaderRowProps) => JSX.Element | null;
export {};
