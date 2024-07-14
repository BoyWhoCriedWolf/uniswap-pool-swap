import { NftTradeInput } from "graphql/data/__generated__/types-and-hooks";
import { BagItem } from "nft/types";
export declare const buildNftTradeInputFromBagItems: (itemsInBag: BagItem[]) => NftTradeInput[];
