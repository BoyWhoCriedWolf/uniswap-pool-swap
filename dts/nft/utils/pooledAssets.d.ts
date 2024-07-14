import { BagItem, GenieAsset } from "nft/types";
export declare const calcPoolPrice: (asset: GenieAsset, position?: number) => string;
export declare const calcAvgGroupPoolPrice: (asset: GenieAsset, numberOfAssets: number) => string;
export declare const recalculateBagUsingPooledAssets: (uncheckedItemsInBag: BagItem[]) => BagItem[];
