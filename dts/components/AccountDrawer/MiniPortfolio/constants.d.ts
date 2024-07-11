import { SwapOrderStatus, TransactionStatus } from "graphql/data/__generated__/types-and-hooks";
import { UniswapXOrderStatus } from "lib/hooks/orders/types";
import { TransactionType } from "state/transactions/types";
export declare const DEFAULT_NFT_QUERY_AMOUNT = 26;
export declare const CancelledTransactionTitleTable: {
    [key in TransactionType]: string;
};
export declare function getActivityTitle(type: TransactionType, status: TransactionStatus, alternate?: boolean): string;
export declare const OrderTextTable: {
    [status in UniswapXOrderStatus]: {
        title: string;
        status: TransactionStatus;
        statusMessage?: string;
    };
};
export declare const MOONPAY_SENDER_ADDRESSES: string[];
export declare const OrderStatusTable: {
    [key in SwapOrderStatus]: UniswapXOrderStatus;
};
