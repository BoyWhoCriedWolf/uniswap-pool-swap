import { WrappedTokenInfo } from "state/lists/wrappedTokenInfo";
import { TokenQuery } from "./__generated__/types-and-hooks";
export type { Chain, TokenQuery } from "./__generated__/types-and-hooks";
export type TokenQueryData = TokenQuery["token"];
export declare class QueryToken extends WrappedTokenInfo {
    constructor(address: string, data: NonNullable<TokenQueryData>, logoSrc?: string);
}
