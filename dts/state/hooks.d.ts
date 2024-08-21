import { TypedUseSelectorHook } from 'react-redux';
import { store } from './index';
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<import("redux").CombinedState<{
    [x: string]: never;
    routing: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getTradeQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs | typeof import("@reduxjs/toolkit/dist/query").skipToken, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./routing/types").GetQuoteArgs, import("./routing/types").TradeResult, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, {}>, never, import("./routing/types").TradeResult, "routing">;
    }, never, "routing">;
    burnV3: import("./burn/v3/reducer").BurnV3State;
    mintV3: import("./mint/v3/reducer").MintState;
}>, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>;
