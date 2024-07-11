import { Token } from "@uniswap/sdk-core";
import { TokenInfo } from "@uniswap/token-lists";
export type TokenBalances = {
    [tokenAddress: string]: {
        usdValue: number;
        balance: number;
    };
};
/** Sorts tokens by currency amount (descending), then safety, then symbol (ascending). */
export declare function tokenComparator(balances: TokenBalances, a: Token, b: Token): 1 | -1;
/** Sorts tokens by query, giving precedence to exact matches and partial matches. */
export declare function useSortTokensByQuery<T extends Token | TokenInfo>(query: string, tokens?: T[]): T[];
