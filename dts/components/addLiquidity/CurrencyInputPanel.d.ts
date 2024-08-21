/// <reference types="react" />
import { Currency } from '@uniswap/sdk-core';
declare function CurrencyInputPanel({ value, onUserInput, hideInput, onMax, onCurrencySelect, showMaxButton, currency, showCommonBases, disabledCurrency, }?: {
    value?: string;
    onUserInput?: (v: string) => void;
    hideInput?: boolean;
    onMax?: () => void;
    onCurrencySelect?: (v: Currency) => void;
    showMaxButton?: boolean;
    currency?: Currency;
    showCommonBases?: boolean;
    disabledCurrency?: boolean;
}): JSX.Element;
export default CurrencyInputPanel;
