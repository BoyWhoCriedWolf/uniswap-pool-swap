import { CollectionRow, ListingRow, ListingStatus } from "nft/types";
interface NFTListState {
    looksRareNonce: number;
    listings: ListingRow[];
    collectionsRequiringApproval: CollectionRow[];
    setLooksRareNonce: (nonce: number) => void;
    getLooksRareNonce: () => number;
    setListings: (listings: ListingRow[]) => void;
    setCollectionsRequiringApproval: (collections: CollectionRow[]) => void;
    setListingStatusAndCallback: (listing: ListingRow, status: ListingStatus, callback?: () => Promise<void>) => void;
    setCollectionStatusAndCallback: (collection: CollectionRow, status: ListingStatus, callback?: () => Promise<void>) => void;
}
export declare const useNFTList: import("zustand/traditional").UseBoundStoreWithEqualityFn<Omit<import("zustand").StoreApi<NFTListState>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: NFTListState | Partial<NFTListState> | ((state: NFTListState) => NFTListState | Partial<NFTListState>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
