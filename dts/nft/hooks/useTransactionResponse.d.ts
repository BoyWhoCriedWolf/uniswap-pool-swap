import { TxResponse } from "nft/types";
type TransactionResponseValue = TxResponse | undefined;
type TransactionResponseState = {
    transactionResponse: TransactionResponseValue;
    setTransactionResponse: (txResponse: TransactionResponseValue) => void;
};
export declare const useTransactionResponse: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<TransactionResponseState>, "setState"> & {
    setState<A extends string | {
        type: unknown;
    }>(partial: TransactionResponseState | Partial<TransactionResponseState> | ((state: TransactionResponseState) => TransactionResponseState | Partial<TransactionResponseState>), replace?: boolean | undefined, action?: A | undefined): void;
}>;
export {};
