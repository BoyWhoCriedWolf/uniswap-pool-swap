import { WalletAsset } from "nft/types";
export declare function useNftBalance(ownerAddress: string, collectionFilters?: string[], assetsFilter?: {
    address: string;
    tokenId: string;
}[], first?: number, after?: string, last?: number, before?: string, skip?: boolean): {
    walletAssets: WalletAsset[] | undefined;
    hasNext: boolean | undefined;
    loadMore: () => Promise<import("@apollo/client").ApolloQueryResult<import("../__generated__/types-and-hooks").NftBalanceQuery>>;
    loading: boolean;
};
