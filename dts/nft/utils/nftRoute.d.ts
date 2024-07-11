import { NftRouteResponse } from "graphql/data/__generated__/types-and-hooks";
import { RouteResponse, RoutingItem } from "nft/types";
export declare function buildRouteResponse(routeResponse: NftRouteResponse, useErc20Token: boolean): {
    route: RoutingItem[];
    routeResponse: RouteResponse;
};
