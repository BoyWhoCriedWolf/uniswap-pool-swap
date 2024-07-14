import { BagItem, BagStatus, UpdatedGenieAsset } from "nft/types";
interface BagState {
    bagStatus: BagStatus;
    bagManuallyClosed: boolean;
    setBagExpanded: ({ bagExpanded, manualClose, }: {
        bagExpanded: boolean;
        manualClose?: boolean;
    }) => void;
    setBagStatus: (state: BagStatus) => void;
    itemsInBag: BagItem[];
    setItemsInBag: (items: BagItem[]) => void;
    addAssetsToBag: (asset: UpdatedGenieAsset[], fromSweep?: boolean) => void;
    removeAssetsFromBag: (assets: UpdatedGenieAsset[], fromSweep?: boolean) => void;
    markAssetAsReviewed: (asset: UpdatedGenieAsset, toKeep: boolean) => void;
    lockSweepItems: (contractAddress: string) => void;
    didOpenUnavailableAssets: boolean;
    setDidOpenUnavailableAssets: (didOpen: boolean) => void;
    bagExpanded: boolean;
    toggleBag: () => void;
    usedSweep: boolean;
    isLocked: boolean;
    setLocked: (isLocked: boolean) => void;
    reset: () => void;
}
export declare const useBag: import("zustand/traditional").UseBoundStoreWithEqualityFn<Omit<import("zustand").StoreApi<BagState>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: BagState | Partial<BagState> | ((state: BagState) => BagState | Partial<BagState>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
