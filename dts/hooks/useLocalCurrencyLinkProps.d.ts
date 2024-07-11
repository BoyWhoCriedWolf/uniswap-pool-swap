import { SupportedLocalCurrency } from "constants/localCurrencies";
import type { To } from "react-router-dom";
export declare function useLocalCurrencyLinkProps(localCurrency?: SupportedLocalCurrency): {
    to?: To;
    onClick?: () => void;
};
