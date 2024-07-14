import { ListingMarket, WalletAsset } from "../types";
interface SellAssetState {
    sellAssets: WalletAsset[];
    issues: number;
    showResolveIssues: boolean;
    selectSellAsset: (asset: WalletAsset) => void;
    removeSellAsset: (asset: WalletAsset) => void;
    reset: () => void;
    setGlobalExpiration: (expirationTime: number) => void;
    setAssetListPrice: (asset: WalletAsset, price?: number, marketplace?: ListingMarket) => void;
    setGlobalMarketplaces: (marketplaces: ListingMarket[]) => void;
    removeAssetMarketplace: (asset: WalletAsset, marketplace: ListingMarket) => void;
    toggleShowResolveIssues: () => void;
    setIssues: (issues: number) => void;
}
export declare const useSellAsset: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<SellAssetState>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: SellAssetState | Partial<SellAssetState> | ((state: SellAssetState) => SellAssetState | Partial<SellAssetState>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
