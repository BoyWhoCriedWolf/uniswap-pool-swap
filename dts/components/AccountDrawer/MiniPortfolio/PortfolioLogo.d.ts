import { ChainId, Currency } from "@uniswap/sdk-core";
import React from "react";
interface PortfolioLogoProps {
    chainId: ChainId;
    accountAddress?: string;
    currencies?: Array<Currency | undefined>;
    images?: Array<string | undefined>;
    size?: string;
    style?: React.CSSProperties;
}
/**
 * Renders an image by prioritizing a list of sources, and then eventually a fallback contract icon
 */
export declare function PortfolioLogo(props: PortfolioLogoProps): JSX.Element;
export {};
