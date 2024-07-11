import { Rewards } from "nft/types/airdrop";
interface CollectionrRewardsResponse {
    data: Array<Rewards>;
}
export declare const CollectionRewardsFetcher: (address: string) => Promise<CollectionrRewardsResponse>;
export {};
