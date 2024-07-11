import { RouteResponse, UpdatedGenieAsset } from "nft/types";
export declare function usePurchaseAssets(): (routingData: RouteResponse, assetsToBuy: UpdatedGenieAsset[], purchasingWithErc20?: boolean) => Promise<void>;
