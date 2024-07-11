import { Currency, CurrencyAmount, Percent } from "@uniswap/sdk-core";
import { Pair } from "@uniswap/v2-sdk";
import { ReactNode } from "react";
interface SwapCurrencyInputPanelProps {
    value: string;
    onUserInput: (value: string) => void;
    onMax?: () => void;
    showMaxButton: boolean;
    label: ReactNode;
    onCurrencySelect?: (currency: Currency) => void;
    currency?: Currency | null;
    hideBalance?: boolean;
    pair?: Pair | null;
    hideInput?: boolean;
    otherCurrency?: Currency | null;
    fiatValue?: {
        data?: number;
        isLoading: boolean;
    };
    priceImpact?: Percent;
    id: string;
    showCommonBases?: boolean;
    showCurrencyAmount?: boolean;
    disableNonToken?: boolean;
    renderBalance?: (amount: CurrencyAmount<Currency>) => ReactNode;
    locked?: boolean;
    loading?: boolean;
    disabled?: boolean;
    numericalInputSettings?: {
        disabled?: boolean;
        onDisabledClick?: () => void;
        disabledTooltipBody?: ReactNode;
    };
}
declare const SwapCurrencyInputPanel: import("react").ForwardRefExoticComponent<SwapCurrencyInputPanelProps & import("react").RefAttributes<HTMLInputElement>>;
export default SwapCurrencyInputPanel;
