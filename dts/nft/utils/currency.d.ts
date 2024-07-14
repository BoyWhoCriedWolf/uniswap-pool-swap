export declare const formatUsdPrice: (price: number) => string;
export declare const formatEth: (price: number) => string;
export declare const formatUSDPriceWithCommas: (price: number) => string;
export declare const formatEthPrice: (price: string | undefined) => number;
export declare const ethNumberStandardFormatter: (amount: string | number | undefined, includeDollarSign?: boolean, removeZeroes?: boolean, roundToNearestWholeNumber?: boolean) => string;
export declare const formatWeiToDecimal: (amount: string, removeZeroes?: boolean) => string;
export declare function wrapScientificNotation(value: string | number): string;
