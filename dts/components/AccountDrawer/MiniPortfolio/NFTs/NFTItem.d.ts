/// <reference types="react" />
import { WalletAsset } from "nft/types";
export declare function NFT({ asset, mediaShouldBePlaying, setCurrentTokenPlayingMedia, }: {
    asset: WalletAsset;
    mediaShouldBePlaying: boolean;
    setCurrentTokenPlayingMedia: (tokenId: string | undefined) => void;
}): JSX.Element;
