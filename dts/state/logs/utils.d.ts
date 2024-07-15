import type { Filter } from "@ethersproject/providers";
export interface Log {
    topics: Array<string>;
    data: string;
    transactionIndex: number;
    logIndex: number;
    blockNumber: number;
}
/**
 * Converts a filter to the corresponding string key
 * @param filter the filter to convert
 */
export declare function filterToKey(filter: Filter): string;
/**
 * Convert a filter key to the corresponding filter
 * @param key key to convert
 */
export declare function keyToFilter(key: string): Filter;
/**
 * Determines whether a filter is for a historical log that doesn't need to be re-fetched.
 * @param filter The filter to check.
 * @param blockNumber The current block number.
 */
export declare function isHistoricalLog(filter: Filter, blockNumber: number): boolean;
