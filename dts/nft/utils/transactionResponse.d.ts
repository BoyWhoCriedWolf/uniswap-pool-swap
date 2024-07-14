import { BigNumber } from "@ethersproject/bignumber";
import { TxResponse, UpdatedGenieAsset } from "nft/types";
export declare const parseTransactionResponse: (transactionResponse: TxResponse | undefined, ethPrice: number) => {
    nftsPurchased: UpdatedGenieAsset[];
    nftsNotPurchased: UpdatedGenieAsset[];
    showPurchasedModal: boolean;
    showRefundModal: boolean;
    totalPurchaseValue: BigNumber;
    totalRefundValue: BigNumber;
    totalUSDRefund: number;
    txFeeFiat: number;
};
export declare const getSuccessfulImageSize: (numSuccessful: number, isMobile: boolean) => number;
