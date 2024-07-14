import { TokenTradeRouteInput } from "graphql/data/__generated__/types-and-hooks";
import { ClassicTrade } from "state/routing/types";
export declare function buildAllTradeRouteInputs(trade: ClassicTrade): {
    mixedTokenTradeRouteInputs?: TokenTradeRouteInput[];
    v2TokenTradeRouteInputs?: TokenTradeRouteInput[];
    v3TokenTradeRouteInputs?: TokenTradeRouteInput[];
};
