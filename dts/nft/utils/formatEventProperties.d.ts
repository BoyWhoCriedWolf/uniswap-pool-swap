import { GenieAsset } from "nft/types";
export declare const formatAssetEventProperties: (assets: GenieAsset[]) => {
    collection_addresses: string[];
    token_ids: string[];
    token_types: (import("../../graphql/data/__generated__/types-and-hooks").NftStandard | undefined)[];
};
