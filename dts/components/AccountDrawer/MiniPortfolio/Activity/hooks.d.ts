import { Activity } from "./types";
export declare function useAllActivities(account: string): {
    loading: boolean;
    activities: Activity[] | undefined;
    refetch: (variables?: Partial<import("graphql/data/__generated__/types-and-hooks").Exact<{
        account: string;
    }>> | undefined) => Promise<import("@apollo/client").ApolloQueryResult<import("graphql/data/__generated__/types-and-hooks").ActivityQuery>>;
};
export declare function usePendingActivity(): {
    hasPendingActivity: boolean;
    pendingActivityCount: number;
};
