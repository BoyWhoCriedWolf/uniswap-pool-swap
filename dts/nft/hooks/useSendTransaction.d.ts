import type { JsonRpcSigner } from "@ethersproject/providers";
import { RouteResponse, TxResponse, TxStateType, UpdatedGenieAsset } from "../types";
interface TxState {
    state: TxStateType;
    setState: (state: TxStateType) => void;
    txHash: string;
    clearTxHash: () => void;
    purchasedWithErc20: boolean;
    sendTransaction: (signer: JsonRpcSigner, selectedAssets: UpdatedGenieAsset[], transactionData: RouteResponse, purchasedWithErc20: boolean) => Promise<TxResponse | undefined>;
}
export declare const useSendTransaction: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<TxState>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: TxState | Partial<TxState> | ((state: TxState) => TxState | Partial<TxState>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
