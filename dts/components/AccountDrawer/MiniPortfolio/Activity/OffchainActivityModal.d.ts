/// <reference types="react" />
import { UniswapXOrderStatus } from "lib/hooks/orders/types";
import { UniswapXOrderDetails } from "state/signatures/types";
type SelectedOrderInfo = {
    modalOpen?: boolean;
    orderHash: string;
    status: UniswapXOrderStatus;
    details?: UniswapXOrderDetails;
};
export declare function useOpenOffchainActivityModal(): (order: {
    orderHash: string;
    status: UniswapXOrderStatus;
}) => void;
export declare function OrderContent({ order }: {
    order: SelectedOrderInfo;
}): JSX.Element;
export declare function OffchainActivityModal(): JSX.Element;
export {};
