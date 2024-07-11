import { SwapPriceUpdateUserResponse } from "@uniswap/analytics-events";
import { Percent } from "@uniswap/sdk-core";
import { SwapResult } from "hooks/useSwapCallback";
import { InterfaceTrade } from "state/routing/types";
import { RoutingDiagramEntry } from "./getRoutingDiagramEntries";
export declare const formatSwapPriceUpdatedEventProperties: (trade: InterfaceTrade, priceUpdate: number | undefined, response: SwapPriceUpdateUserResponse) => {
    chain_id: number | undefined;
    response: SwapPriceUpdateUserResponse;
    token_in_symbol: string | undefined;
    token_out_symbol: string | undefined;
    price_update_basis_points: number | undefined;
};
interface AnalyticsEventProps {
    trade: InterfaceTrade;
    swapResult?: SwapResult;
    allowedSlippage: Percent;
    transactionDeadlineSecondsSinceEpoch?: number;
    isAutoSlippage: boolean;
    isAutoRouterApi: boolean;
    routes?: RoutingDiagramEntry[];
    fiatValueInput?: number;
    fiatValueOutput?: number;
}
export declare const formatSwapButtonClickEventProperties: ({ trade, swapResult, allowedSlippage, transactionDeadlineSecondsSinceEpoch, isAutoSlippage, isAutoRouterApi, routes, fiatValueInput, fiatValueOutput, }: AnalyticsEventProps) => {
    estimated_network_fee_usd: number | undefined;
    transaction_hash: string | undefined;
    order_hash: string | undefined;
    transaction_deadline_seconds: number | undefined;
    token_in_address: string | undefined;
    token_out_address: string | undefined;
    token_in_symbol: string | undefined;
    token_out_symbol: string | undefined;
    token_in_amount: number | undefined;
    token_out_amount: number | undefined;
    token_in_amount_usd: number | undefined;
    token_out_amount_usd: number | undefined;
    price_impact_basis_points: number | undefined;
    allowed_slippage_basis_points: number;
    is_auto_router_api: boolean;
    is_auto_slippage: boolean;
    chain_id: number | undefined;
    swap_quote_block_number: string | null | undefined;
};
export {};
