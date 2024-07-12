import { PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN, ALLOWED_PRICE_IMPACT_HIGH } from '../../constants/misc.js';

/**
 * Given the price impact, get user confirmation.
 *
 * @param priceImpactWithoutFee price impact of the trade without the fee.
 */
function confirmPriceImpactWithoutFee(priceImpactWithoutFee) {
  if (!priceImpactWithoutFee.lessThan(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN)) {
    return window.prompt("This swap has a price impact of at least ".concat(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN.toFixed(0), "%. Please type the word \"confirm\" to continue with this swap.")) === "confirm";
  } else if (!priceImpactWithoutFee.lessThan(ALLOWED_PRICE_IMPACT_HIGH)) {
    return window.confirm("This swap has a price impact of at least ".concat(ALLOWED_PRICE_IMPACT_HIGH.toFixed(0), "%. Please confirm that you would like to continue with this swap."));
  }
  return true;
}

export { confirmPriceImpactWithoutFee as default };
