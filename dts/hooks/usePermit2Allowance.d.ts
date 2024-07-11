import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { PermitSignature } from "hooks/usePermitAllowance";
import { TradeFillType } from "state/routing/types";
export declare enum AllowanceState {
    LOADING = 0,
    REQUIRED = 1,
    ALLOWED = 2
}
interface AllowanceRequired {
    state: AllowanceState.REQUIRED;
    token: Token;
    isApprovalLoading: boolean;
    isApprovalPending: boolean;
    isRevocationPending: boolean;
    approveAndPermit: () => Promise<void>;
    approve: () => Promise<void>;
    permit: () => Promise<void>;
    revoke: () => Promise<void>;
    needsSetupApproval: boolean;
    needsPermitSignature: boolean;
    allowedAmount: CurrencyAmount<Token>;
}
export type Allowance = {
    state: AllowanceState.LOADING;
} | {
    state: AllowanceState.ALLOWED;
    permitSignature?: PermitSignature;
} | AllowanceRequired;
export default function usePermit2Allowance(amount?: CurrencyAmount<Token>, spender?: string, tradeFillType?: TradeFillType): Allowance;
export {};
