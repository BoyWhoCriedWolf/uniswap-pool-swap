import { WalletAsset, WalletCollection } from "../types";
interface WalletCollectionState {
    walletAssets: WalletAsset[];
    walletCollections: WalletCollection[];
    displayAssets: WalletAsset[];
    collectionFilters: string[];
    listFilter: string;
    setWalletAssets: (assets: WalletAsset[]) => void;
    setWalletCollections: (collections: WalletCollection[]) => void;
    setCollectionFilters: (address: string) => void;
    clearCollectionFilters: () => void;
    setListFilter: (value: string) => void;
    setDisplayAssets: (walletAssets: WalletAsset[], listFilter: string) => void;
}
export declare const useWalletCollections: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<WalletCollectionState>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: WalletCollectionState | Partial<WalletCollectionState> | ((state: WalletCollectionState) => WalletCollectionState | Partial<WalletCollectionState>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
