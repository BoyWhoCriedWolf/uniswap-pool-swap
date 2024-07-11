import { Percent } from "@uniswap/sdk-core";
import { ClassicTrade } from "state/routing/types";
/**
 * Returns slippage tolerance based on values from current trade, gas estimates from api, and active network.
 * Auto slippage is only relevant for Classic swaps because UniswapX slippage is determined by the backend service
 */
export default function useClassicAutoSlippageTolerance(trade?: ClassicTrade): Percent;
