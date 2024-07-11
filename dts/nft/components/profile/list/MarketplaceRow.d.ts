import { ListingMarket, WalletAsset } from "nft/types";
import { Dispatch, DispatchWithoutAction } from "react";
import { SetPriceMethod } from "./shared";
interface MarketplaceRowProps {
    globalPriceMethod?: SetPriceMethod;
    globalPrice?: number;
    setGlobalPrice: Dispatch<number | undefined>;
    selectedMarkets: ListingMarket[];
    removeMarket?: () => void;
    asset: WalletAsset;
    expandMarketplaceRows?: boolean;
    rowHovered?: boolean;
    toggleExpandMarketplaceRows: DispatchWithoutAction;
}
export declare const MarketplaceRow: ({ globalPriceMethod, globalPrice, setGlobalPrice, selectedMarkets, removeMarket, asset, expandMarketplaceRows, toggleExpandMarketplaceRows, rowHovered, }: MarketplaceRowProps) => JSX.Element;
export {};
