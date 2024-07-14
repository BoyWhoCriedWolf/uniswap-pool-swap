import { PropsWithChildren } from "react";
export declare function useCachedPortfolioBalancesQuery({ account, }: {
    account?: string;
}): import("@apollo/client").QueryResult<import("graphql/data/__generated__/types-and-hooks").PortfolioBalancesQuery, import("graphql/data/__generated__/types-and-hooks").Exact<{
    ownerAddress: string;
    chains: import("graphql/data/__generated__/types-and-hooks").Chain | readonly import("graphql/data/__generated__/types-and-hooks").Chain[];
}>>;
export default function PrefetchBalancesWrapper({ children, shouldFetchOnAccountUpdate, className, }: PropsWithChildren<{
    shouldFetchOnAccountUpdate: boolean;
    className?: string;
}>): JSX.Element;
