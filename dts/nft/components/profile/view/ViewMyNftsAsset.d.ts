/// <reference types="react" />
import { WalletAsset } from "nft/types";
interface ViewMyNftsAssetProps {
    asset: WalletAsset;
    mediaShouldBePlaying: boolean;
    setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void;
    hideDetails: boolean;
}
export declare const ViewMyNftsAsset: ({ asset, mediaShouldBePlaying, setCurrentTokenPlayingMedia, hideDetails, }: ViewMyNftsAssetProps) => JSX.Element;
export {};
