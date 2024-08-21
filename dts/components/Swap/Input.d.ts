/// <reference types="react" />
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { PriceImpact } from 'hooks/usePriceImpact';
import { Field } from 'state/swap';
import { ThemedText } from 'theme';
export declare const Balance: import("styled-components").StyledComponent<typeof ThemedText.Body2, import("styled-components").DefaultTheme, {}, never>;
export declare function useFormattedFieldAmount({ currencyAmount, fieldAmount, }: {
    currencyAmount?: CurrencyAmount<Currency>;
    fieldAmount?: string;
}): string;
interface FieldWrapperProps {
    field: Field;
    maxAmount?: string;
    approved?: boolean;
    fiatValueChange?: PriceImpact;
    subheader: string;
}
export declare function FieldWrapper({ field, maxAmount, approved, fiatValueChange, className, subheader, }: FieldWrapperProps & {
    className?: string;
}): JSX.Element;
export default function Input(): JSX.Element;
export {};
