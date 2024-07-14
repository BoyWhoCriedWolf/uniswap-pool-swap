/// <reference types="react" />
import { Currency, Price } from "@uniswap/sdk-core";
interface TradePriceProps {
    price: Price<Currency, Currency>;
}
export default function TradePrice({ price }: TradePriceProps): JSX.Element;
export {};
