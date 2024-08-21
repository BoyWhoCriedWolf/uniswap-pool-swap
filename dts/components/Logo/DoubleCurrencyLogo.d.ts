/// <reference types="react" />
import { Currency } from '@uniswap/sdk-core';
interface CurrencyLogoProps {
    currency?: Currency;
    onError?: () => void;
}
export declare function CurrencyLogo({ currency, onError }: CurrencyLogoProps): JSX.Element;
interface DoubleCurrencyLogoProps {
    currency0?: Currency;
    currency1?: Currency;
    onError0?: () => void;
    onError1?: () => void;
}
export declare function DoubleCurrencyLogo({ currency0, onError0, currency1, onError1 }: DoubleCurrencyLogoProps): JSX.Element;
interface DoubleLogoProps {
    logo1?: string;
    logo2?: string;
    onError1?: () => void;
    onError2?: () => void;
}
export default function DoubleLogo({ logo1, onError1, logo2, onError2 }: DoubleLogoProps): JSX.Element;
export {};
