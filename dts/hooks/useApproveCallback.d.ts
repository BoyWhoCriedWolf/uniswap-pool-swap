import { Currency, CurrencyAmount } from "@uniswap/sdk-core";
import { ApprovalState } from "lib/hooks/useApproval";
export { ApprovalState } from "lib/hooks/useApproval";
export declare function useApproveCallback(amountToApprove?: CurrencyAmount<Currency>, spender?: string): [ApprovalState, () => Promise<void>];
