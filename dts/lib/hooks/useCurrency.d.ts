import { ChainId, Currency, Token } from "@uniswap/sdk-core";
export declare const UNKNOWN_TOKEN_SYMBOL = "UNKNOWN";
/**
 * Returns a Token from the tokenAddress.
 * Returns null if token is loading or null was passed.
 * Returns undefined if tokenAddress is invalid or token does not exist.
 */
export declare function useTokenFromActiveNetwork(tokenAddress: string | undefined): Token | null | undefined;
type TokenMap = {
    [address: string]: Token;
};
/**
 * Returns a Token from the tokenAddress.
 * Returns null if token is loading or null was passed.
 * Returns undefined if tokenAddress is invalid or token does not exist.
 */
export declare function useTokenFromMapOrNetwork(tokens: TokenMap, tokenAddress?: string | null): Token | undefined;
/**
 * Returns a Currency from the currencyId.
 * Returns null if currency is loading or null was passed.
 * Returns undefined if currencyId is invalid or token does not exist.
 */
export declare function useCurrencyFromMap(tokens: TokenMap, chainId: ChainId | undefined, currencyId?: string | null): Currency | undefined;
export {};
