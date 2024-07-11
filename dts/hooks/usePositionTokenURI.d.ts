import { BigNumber } from "@ethersproject/bignumber";
import JSBI from "jsbi";
type TokenId = number | JSBI | BigNumber;
type UsePositionTokenURIResult = {
    valid: true;
    loading: false;
    result: {
        name: string;
        description: string;
        image: string;
    };
} | {
    valid: false;
    loading: false;
} | {
    valid: true;
    loading: true;
};
export declare function usePositionTokenURI(tokenId: TokenId | undefined): UsePositionTokenURIResult;
export {};
