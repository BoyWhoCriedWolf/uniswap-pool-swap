import type { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { SetPriceMethod, WarningType } from "nft/components/profile/list/shared";
import { CollectionRow, Listing, ListingMarket, ListingRow, ListingStatus, WalletAsset } from "nft/types";
import { Dispatch } from "react";
export declare function approveCollectionRow(collectionRow: CollectionRow, signer: JsonRpcSigner, setCollectionStatusAndCallback: (collection: CollectionRow, status: ListingStatus, callback?: () => Promise<void>) => void): Promise<void>;
export declare function signListingRow(listing: ListingRow, signer: JsonRpcSigner, provider: Web3Provider, getLooksRareNonce: () => number, setLooksRareNonce: (nonce: number) => void, setListingStatusAndCallback: (listing: ListingRow, status: ListingStatus, callback?: () => Promise<void>) => void): Promise<void>;
export declare const getTotalEthValue: (sellAssets: WalletAsset[]) => number;
export declare const verifyStatus: (status: ListingStatus) => boolean;
export declare function useSubscribeListingState(): void;
export declare function useHandleGlobalPriceToggle(globalOverride: boolean, setListPrice: Dispatch<number | undefined>, setPrice: (price?: number) => void, listPrice?: number, globalPrice?: number): void;
export declare function useSyncPriceWithGlobalMethod(asset: WalletAsset, setListPrice: Dispatch<number | undefined>, setGlobalPrice: Dispatch<number | undefined>, setGlobalOverride: Dispatch<boolean>, listPrice?: number, globalPrice?: number, globalPriceMethod?: SetPriceMethod): void;
export declare function useUpdateInputAndWarnings(setWarningType: Dispatch<WarningType>, inputRef: React.MutableRefObject<HTMLInputElement>, asset: WalletAsset, listPrice?: number): void;
export declare const getRoyalty: (listingMarket: ListingMarket, asset: WalletAsset) => number;
export declare const findListingIssues: (sellAssets: WalletAsset[]) => {
    missingExpiration: boolean;
    overMaxExpiration: boolean;
    listingsMissingPrice: [WalletAsset, Listing][];
    listingsBelowFloor: [WalletAsset, Listing][];
    listingsAboveSellOrderFloor: [WalletAsset, Listing][];
};