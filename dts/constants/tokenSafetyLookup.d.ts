import { ListsState } from "state/lists/reducer";
export declare enum TOKEN_LIST_TYPES {
    UNI_DEFAULT = 1,
    UNI_EXTENDED = 2,
    UNKNOWN = 3,
    BLOCKED = 4,
    BROKEN = 5
}
declare class TokenSafetyLookupTable {
    initialized: boolean;
    dict: {
        [key: string]: TOKEN_LIST_TYPES;
    };
    update(lists: ListsState): void;
    checkToken(address: string, chainId?: number | null): TOKEN_LIST_TYPES;
}
declare const _default: TokenSafetyLookupTable;
export default _default;
