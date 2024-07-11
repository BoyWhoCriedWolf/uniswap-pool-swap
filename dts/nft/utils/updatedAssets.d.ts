import { BigNumber } from "@ethersproject/bignumber";
import { UpdatedGenieAsset } from "nft/types";
export declare const getTotalNftValue: (nfts: UpdatedGenieAsset[]) => BigNumber;
export declare function filterUpdatedAssetsByState(assets: UpdatedGenieAsset[]): {
    unchanged: UpdatedGenieAsset[];
    priceChanged: UpdatedGenieAsset[];
    unavailable: UpdatedGenieAsset[];
};
