/// <reference types="react" />
import { Currency, Percent } from "@uniswap/sdk-core";
import { InterfaceTrade } from "state/routing/types";
export default function SwapModalHeader({ trade, inputCurrency, allowedSlippage, }: {
    trade: InterfaceTrade;
    inputCurrency?: Currency;
    allowedSlippage: Percent;
}): JSX.Element;
