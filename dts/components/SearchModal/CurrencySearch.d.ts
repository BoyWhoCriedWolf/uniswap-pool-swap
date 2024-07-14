/// <reference types="react" />
import { Currency } from "@uniswap/sdk-core";
interface CurrencySearchProps {
    isOpen: boolean;
    onDismiss: () => void;
    selectedCurrency?: Currency | null;
    onCurrencySelect: (currency: Currency, hasWarning?: boolean) => void;
    otherSelectedCurrency?: Currency | null;
    showCommonBases?: boolean;
    showCurrencyAmount?: boolean;
    disableNonToken?: boolean;
    onlyShowCurrenciesWithBalance?: boolean;
}
export declare function CurrencySearch({ selectedCurrency, onCurrencySelect, otherSelectedCurrency, showCommonBases, showCurrencyAmount, disableNonToken, onDismiss, isOpen, onlyShowCurrenciesWithBalance, }: CurrencySearchProps): JSX.Element;
export {};
