import { Signer } from "@ethersproject/abstract-signer";
import type { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { NftStandard } from "graphql/data/__generated__/types-and-hooks";
import { ListingMarket, ListingStatus, WalletAsset } from "../types";
export declare const LOOKS_RARE_CREATOR_BASIS_POINTS = 50;
export declare const ListingMarkets: ListingMarket[];
export declare function approveCollection(operator: string, collectionAddress: string, signer: Signer, setStatus: (newStatus: ListingStatus) => void, nftStandard?: NftStandard): Promise<void>;
export declare function signListing(marketplace: ListingMarket, asset: WalletAsset, signer: JsonRpcSigner, provider: Web3Provider, looksRareNonce: number | undefined, setStatus: (newStatus: ListingStatus) => void): Promise<boolean>;
