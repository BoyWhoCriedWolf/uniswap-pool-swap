/// <reference types="react" />
import { NftStandard } from "graphql/data/__generated__/types-and-hooks";
import { Markets } from "nft/types";
export declare const MarketplaceContainer: ({ isSelected, marketplace, tokenType, listedPrice, hidePrice, }: {
    isSelected: boolean;
    marketplace?: Markets | undefined;
    tokenType?: NftStandard | undefined;
    listedPrice?: string | undefined;
    hidePrice?: boolean | undefined;
}) => JSX.Element | null;
interface RankingProps {
    provider: {
        url?: string;
        rank?: number;
    };
}
export declare const Ranking: ({ provider }: RankingProps) => JSX.Element | null;
export declare const Suspicious: () => JSX.Element;
export {};
