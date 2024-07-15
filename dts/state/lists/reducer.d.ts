import { TokenList } from "@uniswap/token-lists";
export interface ListsState {
    readonly byUrl: {
        readonly [url: string]: {
            readonly current: TokenList | null;
            readonly pendingUpdate: TokenList | null;
            readonly loadingRequestId: string | null;
            readonly error: string | null;
        };
    };
    readonly lastInitializedDefaultListOfLists?: string[];
}
type ListState = ListsState["byUrl"][string];
export declare const NEW_LIST_STATE: ListState;
export declare const initialState: ListsState;
declare const _default: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<ListsState>;
export default _default;
