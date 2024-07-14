/**
 * Returns true if the trade requires a confirmation of details before we can submit it
 * @param args either a pair of V2 trades or a pair of V3 trades
 */
function tradeMeaningfullyDiffers(tradeA, tradeB, slippage) {
  return tradeA.tradeType !== tradeB.tradeType || !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) || !tradeA.outputAmount.currency.equals(tradeB.outputAmount.currency) || tradeB.executionPrice.lessThan(tradeA.worstExecutionPrice(slippage));
}

export { tradeMeaningfullyDiffers };