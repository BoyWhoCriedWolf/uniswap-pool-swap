import { Currency, CurrencyAmount } from "@uniswap/sdk-core";
import { ReactNode } from "react";
import { Field } from "state/swap/actions";
interface AmountProps {
    isLoading: boolean;
    field: Field;
    tooltipText?: ReactNode;
    label: ReactNode;
    amount: CurrencyAmount<Currency>;
    usdAmount?: number;
    currency: Currency;
}
export declare function SwapModalHeaderAmount({ tooltipText, label, amount, usdAmount, field, currency, isLoading, }: AmountProps): JSX.Element;
export {};
