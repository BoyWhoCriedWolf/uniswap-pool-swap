import { ChainId, Token } from "@uniswap/sdk-core";
import { Pool, Position } from "@uniswap/v3-sdk";
import { PositionDetails } from "types/position";
export type PositionInfo = {
    owner: string;
    chainId: ChainId;
    position: Position;
    pool: Pool;
    details: PositionDetails;
    inRange: boolean;
    closed: boolean;
    fees?: [number?, number?];
    prices?: [number?, number?];
};
type CachedPositionsEntry = {
    result: PositionInfo[];
    stale: boolean;
};
type UseCachedPositionsReturnType = [
    CachedPositionsEntry | undefined,
    (positions: PositionInfo[]) => void
];
/**
 * Caches positions to allow reusing between component mounts
 * @param account address to cache positions for
 * @returns cached positions for the account, whether the cache is stale, and a function to update the positions and cache
 */
export declare function useCachedPositions(account: string): UseCachedPositionsReturnType;
/**
 * Caches pool addresses to prevent components from having to re-compute them
 * @returns get and set functions for the cache
 */
export declare function usePoolAddressCache(): {
    get: (details: PositionDetails, chainId: ChainId) => string | undefined;
    set: (details: PositionDetails, chainId: ChainId, address: string) => void;
};
type TokenGetterFn = (addresses: string[], chainId: ChainId) => Promise<{
    [key: string]: Token | undefined;
}>;
export declare function useGetCachedTokens(chains: ChainId[]): TokenGetterFn;
export {};
