/// <reference types="react" />
import { BigNumber } from "@ethersproject/bignumber";
import { Price, Token } from "@uniswap/sdk-core";
import { Position } from "@uniswap/v3-sdk";
interface PositionListItemProps {
    token0: string;
    token1: string;
    tokenId: BigNumber;
    fee: number;
    liquidity: BigNumber;
    tickLower: number;
    tickUpper: number;
}
export declare function getPriceOrderingFromPositionForUI(position?: Position): {
    priceLower?: Price<Token, Token>;
    priceUpper?: Price<Token, Token>;
    quote?: Token;
    base?: Token;
};
export default function PositionListItem({ token0: token0Address, token1: token1Address, tokenId, fee: feeAmount, liquidity, tickLower, tickUpper, }: PositionListItemProps): JSX.Element;
export {};
