import { TokenInfo, TokenList } from "@uniswap/token-lists";
import { WrappedTokenInfo } from "state/lists/wrappedTokenInfo";
type TokenMap = Readonly<{
    [tokenAddress: string]: {
        token: WrappedTokenInfo;
        list?: TokenList;
    };
}>;
export type TokenAddressMap = Readonly<{
    [chainId: number]: TokenMap;
}>;
export declare function tokensToChainTokenMap(tokens: TokenList | TokenInfo[]): TokenAddressMap;
export {};
