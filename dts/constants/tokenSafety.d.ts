/// <reference types="react" />
import { SearchToken } from "graphql/data/SearchTokens";
export declare const TOKEN_SAFETY_ARTICLE = "https://support.uniswap.org/hc/en-us/articles/8723118437133";
export declare enum WARNING_LEVEL {
    MEDIUM = 0,
    UNKNOWN = 1,
    BLOCKED = 2
}
export declare function getWarningCopy(warning: Warning | null, plural?: boolean): {
    heading: JSX.Element | null;
    description: JSX.Element | null;
};
export type Warning = {
    level: WARNING_LEVEL;
    message: JSX.Element;
    /** Determines whether triangle/slash alert icon is used, and whether this token is supported/able to be traded. */
    canProceed: boolean;
};
export declare const NotFoundWarning: Warning;
export declare function checkWarning(tokenAddress: string, chainId?: number | null): Warning | null;
export declare function checkSearchTokenWarning(token: SearchToken): Warning | null;
export declare function displayWarningLabel(warning: Warning | null): boolean | null;
