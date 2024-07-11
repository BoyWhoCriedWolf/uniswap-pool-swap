import { Currency, CurrencyAmount, NativeCurrency, Percent, Token } from "@uniswap/sdk-core";
import { ClassicTrade, TradeState } from "state/routing/types";
export default function useDerivedPayWithAnyTokenSwapInfo(inputCurrency?: Currency, parsedOutputAmount?: CurrencyAmount<NativeCurrency | Token>): {
    state: TradeState;
    trade?: ClassicTrade;
    maximumAmountIn?: CurrencyAmount<Token>;
    allowedSlippage: Percent;
};
