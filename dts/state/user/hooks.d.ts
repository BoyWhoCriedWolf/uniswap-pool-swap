import { Percent, Token } from "@uniswap/sdk-core";
import { Pair } from "@uniswap/v2-sdk";
import { SupportedLocale } from "constants/locales";
import { RouterPreference } from "state/routing/types";
import { SerializedToken, SlippageTolerance } from "./types";
export declare function serializeToken(token: Token): SerializedToken;
export declare function useUserLocale(): SupportedLocale | null;
export declare function useUserLocaleManager(): [
    SupportedLocale | null,
    (newLocale: SupportedLocale) => void
];
export declare function useRouterPreference(): [
    RouterPreference,
    (routerPreference: RouterPreference) => void
];
/**
 * Return the user's slippage tolerance, from the redux store, and a function to update the slippage tolerance
 */
export declare function useUserSlippageTolerance(): [
    Percent | SlippageTolerance.Auto,
    (slippageTolerance: Percent | SlippageTolerance.Auto) => void
];
/**
 *Returns user slippage tolerance, replacing the auto with a default value
 * @param defaultSlippageTolerance the value to replace auto with
 */
export declare function useUserSlippageToleranceWithDefault(defaultSlippageTolerance: Percent): Percent;
export declare function useUserHideClosedPositions(): [
    boolean,
    (newHideClosedPositions: boolean) => void
];
export declare function useUserTransactionTTL(): [number, (slippage: number) => void];
export declare function useAddUserToken(): (token: Token) => void;
export declare function usePairAdder(): (pair: Pair) => void;
export declare function useHideBaseWalletBanner(): [boolean, () => void];
export declare function useUserDisabledUniswapX(): boolean;
export declare function useUserOptedOutOfUniswapX(): boolean;
/**
 * Given two tokens return the liquidity token that represents its liquidity shares
 * @param tokenA one of the two tokens
 * @param tokenB the other token
 */
export declare function toV2LiquidityToken([tokenA, tokenB]: [Token, Token]): Token;
/**
 * Returns all the pairs of tokens that are tracked by the user for the current chain ID.
 */
export declare function useTrackedTokenPairs(): [Token, Token][];
