import { GenieAsset, Trait } from "nft/types";
import { NftAssetsFilterInput, NftAssetSortableField } from "../__generated__/types-and-hooks";
export declare const ASSET_PAGE_SIZE = 25;
export interface AssetFetcherParams {
    address: string;
    orderBy: NftAssetSortableField;
    asc: boolean;
    filter: NftAssetsFilterInput;
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export declare function useNftAssets(params: AssetFetcherParams): {
    data: GenieAsset[] | undefined;
    hasNext: boolean | undefined;
    loading: boolean;
    loadMore: () => Promise<import("@apollo/client").ApolloQueryResult<import("../__generated__/types-and-hooks").AssetQuery>>;
};
export interface SweepFetcherParams {
    contractAddress: string;
    markets?: string[];
    price?: {
        high?: number | string;
        low?: number | string;
        symbol: string;
    };
    traits?: Trait[];
}
export declare function useSweepNftAssets(params: SweepFetcherParams): {
    data: GenieAsset[] | undefined;
    loading: boolean;
};
