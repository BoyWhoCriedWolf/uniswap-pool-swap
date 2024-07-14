/// <reference types="react" />
import { Currency } from "@uniswap/sdk-core";
interface CurrencySearchModalProps {
    isOpen: boolean;
    onDismiss: () => void;
    selectedCurrency?: Currency | null;
    onCurrencySelect: (currency: Currency) => void;
    otherSelectedCurrency?: Currency | null;
    showCommonBases?: boolean;
    showCurrencyAmount?: boolean;
    disableNonToken?: boolean;
    onlyShowCurrenciesWithBalance?: boolean;
}
declare const _default: import("react").NamedExoticComponent<CurrencySearchModalProps>;
export default _default;
