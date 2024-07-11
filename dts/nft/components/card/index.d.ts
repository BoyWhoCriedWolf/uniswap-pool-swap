import { GenieAsset, UniformAspectRatio, WalletAsset } from "nft/types";
import { ReactNode } from "react";
interface NftCardProps {
    asset: GenieAsset | WalletAsset;
    display: NftCardDisplayProps;
    isSelected: boolean;
    isDisabled: boolean;
    selectAsset?: () => void;
    unselectAsset?: () => void;
    onButtonClick?: () => void;
    onCardClick?: () => void;
    sendAnalyticsEvent?: () => void;
    mediaShouldBePlaying: boolean;
    uniformAspectRatio?: UniformAspectRatio;
    setUniformAspectRatio?: (uniformAspectRatio: UniformAspectRatio) => void;
    renderedHeight?: number;
    setRenderedHeight?: (renderedHeight: number | undefined) => void;
    setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void;
    testId?: string;
    hideDetails?: boolean;
}
export interface NftCardDisplayProps {
    primaryInfo?: ReactNode;
    primaryInfoIcon?: ReactNode;
    primaryInfoRight?: ReactNode;
    secondaryInfo?: ReactNode;
    selectedInfo?: ReactNode;
    notSelectedInfo?: ReactNode;
    disabledInfo?: ReactNode;
}
/**
 * NftCard is a component that displays an NFT asset.
 *
 * By default, clicking on the card will navigate to the details page.
 * If you wish to override this behavior, pass a value for the onCardClick prop.
 */
export declare const NftCard: ({ asset, display, isSelected, selectAsset, unselectAsset, isDisabled, onButtonClick, onCardClick, sendAnalyticsEvent, mediaShouldBePlaying, uniformAspectRatio, setUniformAspectRatio, renderedHeight, setRenderedHeight, setCurrentTokenPlayingMedia, testId, hideDetails, }: NftCardProps) => JSX.Element;
export {};
