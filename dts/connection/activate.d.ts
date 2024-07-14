import { ChainId } from "@uniswap/sdk-core";
import { Connection } from "connection/types";
export declare enum ActivationStatus {
    PENDING = 0,
    ERROR = 1,
    IDLE = 2
}
type ActivationPendingState = {
    status: ActivationStatus.PENDING;
    connection: Connection;
};
type ActivationErrorState = {
    status: ActivationStatus.ERROR;
    connection: Connection;
    error: any;
};
declare const IDLE_ACTIVATION_STATE: {
    readonly status: ActivationStatus.IDLE;
};
type ActivationState = ActivationPendingState | ActivationErrorState | typeof IDLE_ACTIVATION_STATE;
export declare function useActivationState(): {
    activationState: ActivationState;
    tryActivation: (connection: Connection, onSuccess: () => void, chainId?: ChainId | undefined) => Promise<void>;
    cancelActivation: () => void;
};
export {};
