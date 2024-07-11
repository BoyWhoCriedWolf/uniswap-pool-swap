import { CurrencyAmount, Percent, Token } from "@uniswap/sdk-core";
import { InterfaceTrade } from "state/routing/types";
export declare function useMaxAmountIn(trade: InterfaceTrade | undefined, allowedSlippage: Percent): CurrencyAmount<Token> | undefined;
