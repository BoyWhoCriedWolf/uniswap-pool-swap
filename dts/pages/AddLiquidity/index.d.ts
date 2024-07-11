/// <reference types="react" />
import { FeeAmount } from "@uniswap/v3-sdk";
interface AddLiquidityProps {
    currencyIdA?: string;
    currencyIdB?: string;
    onChangeCurrencyIdA?: (v?: string) => void;
    onChangeCurrencyIdB?: (v?: string) => void;
    feeAmount?: FeeAmount;
    onChangeFeeAmount?: (v?: FeeAmount) => void;
    tokenId?: string;
    openPools?: () => void;
}
export default function AddLiquidityWrapper({ currencyIdA, currencyIdB, onChangeCurrencyIdA, onChangeCurrencyIdB, feeAmount, onChangeFeeAmount, tokenId, openPools, }?: AddLiquidityProps): JSX.Element;
export {};
