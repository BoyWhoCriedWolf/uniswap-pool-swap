import { Chain, SearchTokensQuery } from "./__generated__/types-and-hooks";
export type SearchToken = NonNullable<NonNullable<SearchTokensQuery["searchTokens"]>[number]>;
export declare function useSearchTokens(searchQuery: string, chainId: number): {
    data: {
        readonly __typename?: "Token" | undefined;
        readonly id: string;
        readonly decimals?: number | undefined;
        readonly name?: string | undefined;
        readonly chain: Chain;
        readonly standard?: import("./__generated__/types-and-hooks").TokenStandard | undefined;
        readonly address?: string | undefined;
        readonly symbol?: string | undefined;
        readonly market?: {
            readonly __typename?: "TokenMarket" | undefined;
            readonly id: string;
            readonly price?: {
                readonly __typename?: "Amount" | undefined;
                readonly id: string;
                readonly value: number;
                readonly currency?: import("./__generated__/types-and-hooks").Currency | undefined;
            } | undefined;
            readonly pricePercentChange?: {
                readonly __typename?: "Amount" | undefined;
                readonly id: string;
                readonly value: number;
            } | undefined;
            readonly volume24H?: {
                readonly __typename?: "Amount" | undefined;
                readonly id: string;
                readonly value: number;
                readonly currency?: import("./__generated__/types-and-hooks").Currency | undefined;
            } | undefined;
        } | undefined;
        readonly project?: {
            readonly __typename?: "TokenProject" | undefined;
            readonly id: string;
            readonly logoUrl?: string | undefined;
            readonly safetyLevel?: import("./__generated__/types-and-hooks").SafetyLevel | undefined;
        } | undefined;
    }[];
    loading: boolean;
    error: import("@apollo/client").ApolloError | undefined;
};
