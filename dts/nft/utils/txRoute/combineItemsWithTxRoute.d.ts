import { RoutingItem, UpdatedGenieAsset } from "nft/types";
export declare const compareAssetsWithTransactionRoute: (items: UpdatedGenieAsset[], txRoute?: RoutingItem[]) => {
    hasPriceAdjustment: boolean;
    updatedAssets: UpdatedGenieAsset[];
};
