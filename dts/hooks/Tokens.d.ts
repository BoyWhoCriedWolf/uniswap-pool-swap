import { ChainId, Currency, Token } from "@uniswap/sdk-core";
import { WrappedTokenInfo } from "../state/lists/wrappedTokenInfo";
type Maybe<T> = T | null | undefined;
export type ChainTokenMap = {
    [chainId in number]?: {
        [address in string]?: Token;
    };
};
/** Returns tokens from all token lists on all chains, combined with user added tokens */
export declare function useAllTokensMultichain(): ChainTokenMap;
/** Returns all tokens from the default list + user added tokens */
export declare function useDefaultActiveTokens(chainId: Maybe<ChainId>): {
    [address: string]: Token;
};
export declare function useUnsupportedTokens(): {
    [address: string]: Token;
};
export declare function useSearchInactiveTokenLists(search: string | undefined, minResults?: number): WrappedTokenInfo[];
export declare function useIsUserAddedToken(currency: Currency | undefined | null): boolean;
export declare function useToken(tokenAddress?: string | null): Token | null | undefined;
export declare function useCurrency(currencyId: Maybe<string>, chainId?: ChainId): Currency | undefined;
export {};
