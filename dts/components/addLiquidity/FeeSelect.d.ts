/// <reference types="react" />
import { FeeAmount } from '@uniswap/v3-sdk';
declare function FeeSelect({ value, onChange }: {
    value?: FeeAmount;
    onChange?: (v: FeeAmount) => void;
}): JSX.Element;
export default FeeSelect;
