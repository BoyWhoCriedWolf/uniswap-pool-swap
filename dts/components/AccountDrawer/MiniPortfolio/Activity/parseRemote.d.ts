import { AssetActivityPartsFragment } from "graphql/data/__generated__/types-and-hooks";
import { useFormatter } from "utils/formatNumbers";
import { Activity } from "./types";
type FormatNumberOrStringFunctionType = ReturnType<typeof useFormatter>["formatNumberOrString"];
export declare function parseRemoteActivities(formatNumberOrString: FormatNumberOrStringFunctionType, assetActivities?: readonly AssetActivityPartsFragment[]): {
    [hash: string]: Activity;
} | undefined;
/**
 * Keeps track of the time since a given timestamp, keeping it up to date every second when necessary
 * @param timestamp
 * @returns
 */
export declare function useTimeSince(timestamp: number): string;
export {};
