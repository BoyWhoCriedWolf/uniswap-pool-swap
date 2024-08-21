/// <reference types="react" />
import { Currency } from '@uniswap/sdk-core';
export default function SelectToken({ value, onChange }: {
    value?: Currency;
    onChange: (v: Currency) => void;
}): JSX.Element;
