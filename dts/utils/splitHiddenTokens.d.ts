import { TokenBalance } from "graphql/data/__generated__/types-and-hooks";
export declare function splitHiddenTokens(tokenBalances: TokenBalance[], options?: {
    hideSmallBalances?: boolean;
}): {
    visibleTokens: TokenBalance[];
    hiddenTokens: TokenBalance[];
};
