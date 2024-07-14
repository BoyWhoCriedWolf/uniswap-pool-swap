import { ChainId } from "@uniswap/sdk-core";
import { SerializableTransactionReceipt, TransactionDetails, TransactionInfo } from "./types";
export interface TransactionState {
    [chainId: number]: {
        [txHash: string]: TransactionDetails;
    };
}
interface AddTransactionPayload {
    chainId: ChainId;
    from: string;
    hash: string;
    info: TransactionInfo;
    nonce?: number;
    deadline?: number;
    receipt?: SerializableTransactionReceipt;
}
export declare const initialState: TransactionState;
export declare const addTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<AddTransactionPayload, "transactions/addTransaction">, clearAllTransactions: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "transactions/clearAllTransactions">, checkedTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "transactions/checkedTransaction">, finalizeTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "transactions/finalizeTransaction">, removeTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "transactions/removeTransaction">, cancelTransaction: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "transactions/cancelTransaction">;
declare const _default: import("redux").Reducer<TransactionState, import("redux").AnyAction>;
export default _default;
