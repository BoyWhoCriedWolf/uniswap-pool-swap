import { ListingMarket, WalletAsset } from "nft/types";
import { Dispatch } from "react";
import { SetPriceMethod } from "./shared";
interface NFTListRowProps {
    asset: WalletAsset;
    globalPriceMethod?: SetPriceMethod;
    setGlobalPrice: Dispatch<number | undefined>;
    globalPrice?: number;
    selectedMarkets: ListingMarket[];
}
/**
 * NFTListRow is the outermost row wrapper for an NFT Listing, which shows either the composite of multiple marketplaces listings
 * or can be expanded to show listings per marketplace
 */
export declare const NFTListRow: ({ asset, globalPriceMethod, globalPrice, setGlobalPrice, selectedMarkets, }: NFTListRowProps) => JSX.Element;
export {};
