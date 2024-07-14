/// <reference types="react" />
import { Currency } from "@uniswap/sdk-core";
import { AssetLogoBaseProps } from "./AssetLogo";
export default function CurrencyLogo(props: AssetLogoBaseProps & {
    currency?: Currency | null;
}): JSX.Element;
