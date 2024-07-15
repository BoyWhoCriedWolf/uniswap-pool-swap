import type { Filter } from "@ethersproject/providers";
import { Log } from "./utils";
export interface LogsState {
    [chainId: number]: {
        [filterKey: string]: {
            listeners: number;
            fetchingBlockNumber?: number;
            results?: {
                blockNumber: number;
                logs: Log[];
                error?: undefined;
            } | {
                blockNumber: number;
                logs?: undefined;
                error: true;
            };
        };
    };
}
declare const _default: import("redux").Reducer<LogsState, import("redux").AnyAction>;
export default _default;
export declare const addListener: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId: number;
    filter: Filter;
}, "logs/addListener">, removeListener: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId: number;
    filter: Filter;
}, "logs/removeListener">, fetchedLogs: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId: number;
    filter: Filter;
    results: {
        blockNumber: number;
        logs: Log[];
    };
}, "logs/fetchedLogs">, fetchedLogsError: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId: number;
    blockNumber: number;
    filter: Filter;
}, "logs/fetchedLogsError">, fetchingLogs: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    chainId: number;
    filters: Filter[];
    blockNumber: number;
}, "logs/fetchingLogs">;
