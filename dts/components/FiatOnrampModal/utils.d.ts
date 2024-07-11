import { MoonpaySupportedCurrencyCode } from "./constants";
export declare function getDefaultCurrencyCode(address: string | undefined, chainName: string | undefined): MoonpaySupportedCurrencyCode;
/**
 * You should use useParams() from react-router-dom instead of this function if possible.
 * This function is only used in the case where we need to parse the path outside the scope of the router.
 */
export declare function parsePathParts(pathname: string): {
    network?: string;
    tokenAddress?: string;
};
