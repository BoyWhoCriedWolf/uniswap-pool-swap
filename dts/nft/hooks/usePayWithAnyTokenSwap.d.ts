import { Percent } from "@uniswap/sdk-core";
import { Allowance } from "hooks/usePermit2Allowance";
import { InterfaceTrade } from "state/routing/types";
export default function usePayWithAnyTokenSwap(trade?: InterfaceTrade | undefined, allowance?: Allowance, allowedSlippage?: Percent): void;
