import { ChainId } from "@uniswap/sdk-core";
import { PositionInfo } from "./cache";
type UseMultiChainPositionsData = {
    positions?: PositionInfo[];
    loading: boolean;
};
/**
 * Returns all positions for a given account on multiple chains.
 *
 * This hook doesn't use the redux-multicall library to avoid having to manually fetching blocknumbers for each chain.
 *
 * @param account - account to fetch positions for
 * @param chains - chains to fetch positions from
 * @returns positions, fees
 */
export default function useMultiChainPositions(account: string, chains?: ChainId[]): UseMultiChainPositionsData;
export {};
