import { ApolloError } from "@apollo/client";
import { FeeTierDistributionQuery } from "./__generated__/types-and-hooks";
export default function useFeeTierDistributionQuery(token0: string | undefined, token1: string | undefined, interval: number): {
    error?: ApolloError;
    isLoading: boolean;
    data: FeeTierDistributionQuery;
};
