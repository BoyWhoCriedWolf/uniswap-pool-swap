import { BagItem, BagStatus, RoutingItem, UpdatedGenieAsset } from "nft/types";
export declare function getPurchasableAssets(itemsInBag: BagItem[]): UpdatedGenieAsset[];
export declare function getNextBagState(wishAssetsToBuy: UpdatedGenieAsset[], route: RoutingItem[], purchasingWithErc20: boolean): {
    newBagItems: BagItem[];
    nextBagStatus: BagStatus;
};
