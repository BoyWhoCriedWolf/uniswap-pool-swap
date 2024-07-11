import { UniswapXOrderDetails } from "state/signatures/types";
import { UniswapXBackendOrder } from "./types";
interface UpdaterProps {
    pendingOrders: UniswapXOrderDetails[];
    onOrderUpdate: (order: UniswapXOrderDetails, backendUpdate: UniswapXBackendOrder) => void;
}
export default function OrderUpdater({ pendingOrders, onOrderUpdate, }: UpdaterProps): null;
export {};
