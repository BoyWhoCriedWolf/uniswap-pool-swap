import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import type { Web3Provider } from "@ethersproject/providers";
import { NftStandard } from "graphql/data/__generated__/types-and-hooks";
export type OfferItem = {
    price: BigNumber;
    tokens: {
        token: string;
        tokenId: BigNumberish;
        amount: number;
    }[];
};
type OrderItem = {
    price: BigNumberish;
    data: string;
};
type Order = {
    salt: BigNumberish;
    user: string;
    network: BigNumberish;
    intent: BigNumberish;
    delegateType: BigNumberish;
    deadline: BigNumberish;
    currency: string;
    dataMask: string;
    items: OrderItem[];
    r: string;
    s: string;
    v: number;
    signVersion: number;
};
export type OrderPayload = {
    order: string;
    isBundle: boolean;
    bundleName: string;
    bundleDesc: string;
    orderIds: number[];
    changePrice: boolean;
    isCollection: boolean;
};
export declare const signOrderData: (web3Provider: Web3Provider, order: Order) => Promise<void>;
export declare const encodeOrder: (order: Order) => string;
export declare const createSellOrder: (user: string, deadline: number, items: OfferItem[], nftStandard?: NftStandard) => Order;
export {};
