/// <reference types="react" />
import { DetailsOrigin, GenieAsset, UpdatedGenieAsset, WalletAsset } from "nft/types";
export declare function getRarityStatus(rarityStatusCache: Map<string, boolean>, id: string, assets?: (GenieAsset | undefined)[]): boolean | undefined;
export declare const getAssetHref: (asset: GenieAsset | WalletAsset, origin?: DetailsOrigin) => string;
export declare const getMarketplaceIcon: (marketplace: string, size?: string | number) => JSX.Element | null;
export declare const generateTweetForAsset: (asset: GenieAsset) => string;
export declare const generateTweetForPurchase: (assets: UpdatedGenieAsset[], txHashUrl: string) => string;
export declare const generateTweetForList: (assets: WalletAsset[]) => string;
