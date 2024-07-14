/// <reference types="react" />
import { WalletCollection } from "nft/types";
interface FilterSidebarProps {
    fetchNextPage: () => void;
    hasNextPage?: boolean;
    isFetchingNextPage: boolean;
    walletCollections: WalletCollection[];
}
export declare const FilterSidebar: ({ fetchNextPage, hasNextPage, isFetchingNextPage, walletCollections, }: FilterSidebarProps) => JSX.Element;
export {};
