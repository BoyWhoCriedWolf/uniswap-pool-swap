import { GenieAsset, Markets, UniformAspectRatio, WalletAsset } from "nft/types";
import { ReactNode } from "react";
export declare function detailsHref(asset: GenieAsset | WalletAsset): string;
export declare function getNftDisplayComponent(asset: GenieAsset | WalletAsset, mediaShouldBePlaying: boolean, setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void, uniformAspectRatio?: UniformAspectRatio, setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void, renderedHeight?: number, setRenderedHeight?: (renderedHeight: number | undefined) => void): JSX.Element;
export declare function useSelectAsset({ selectAsset, unselectAsset, isSelected, isDisabled, onClick, }: {
    selectAsset?: () => void;
    unselectAsset?: () => void;
    isSelected: boolean;
    isDisabled: boolean;
    onClick?: () => void;
}): (e: React.MouseEvent) => void;
export declare function getMarketplaceIcon(market: Markets): ReactNode;
export declare const handleUniformAspectRatio: (uniformAspectRatio: UniformAspectRatio, e: React.SyntheticEvent<HTMLElement, Event>, setUniformAspectRatio?: ((uniformAspectRatio: UniformAspectRatio) => void) | undefined, renderedHeight?: number, setRenderedHeight?: ((renderedHeight: number | undefined) => void) | undefined) => void;
export declare function getHeightFromAspectRatio(uniformAspectRatio: UniformAspectRatio, renderedHeight?: number): number | undefined;
export declare function getMediaAspectRatio(uniformAspectRatio?: UniformAspectRatio, setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void): string;
