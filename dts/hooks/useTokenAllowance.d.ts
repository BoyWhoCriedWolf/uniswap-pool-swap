import { ContractTransaction } from "@ethersproject/contracts";
import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { ApproveTransactionInfo } from "state/transactions/types";
export declare function useTokenAllowance(token?: Token, owner?: string, spender?: string): {
    tokenAllowance?: CurrencyAmount<Token>;
    isSyncing: boolean;
};
export declare function useUpdateTokenAllowance(amount: CurrencyAmount<Token> | undefined, spender: string): () => Promise<{
    response: ContractTransaction;
    info: ApproveTransactionInfo;
}>;
export declare function useRevokeTokenAllowance(token: Token | undefined, spender: string): () => Promise<{
    response: ContractTransaction;
    info: ApproveTransactionInfo;
}>;
