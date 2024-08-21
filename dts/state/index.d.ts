declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    [x: string]: never;
    routing: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getTradeQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs | typeof import("@reduxjs/toolkit/dist/query").skipToken, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./routing/types").GetQuoteArgs, import("./routing/types").TradeResult, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, {}>, never, import("./routing/types").TradeResult, "routing">;
    }, never, "routing">;
    burnV3: import("./burn/v3/reducer").BurnV3State;
    mintV3: import("./mint/v3/reducer").MintState;
}>, import("redux").AnyAction>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    [x: string]: never;
    routing: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getTradeQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs | typeof import("@reduxjs/toolkit/dist/query").skipToken, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./routing/types").GetQuoteArgs, import("./routing/types").TradeResult, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, {}>, never, import("./routing/types").TradeResult, "routing">;
    }, never, "routing">;
    burnV3: import("./burn/v3/reducer").BurnV3State;
    mintV3: import("./mint/v3/reducer").MintState;
}>, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    [x: string]: never;
    routing: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getTradeQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs | typeof import("@reduxjs/toolkit/dist/query").skipToken, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./routing/types").GetQuoteArgs, import("./routing/types").TradeResult, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, {}>, never, import("./routing/types").TradeResult, "routing">;
    }, never, "routing">;
    burnV3: import("./burn/v3/reducer").BurnV3State;
    mintV3: import("./mint/v3/reducer").MintState;
}>, import("redux").AnyAction, undefined>, import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    getTradeQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs | typeof import("@reduxjs/toolkit/dist/query").skipToken, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./routing/types").GetQuoteArgs, import("./routing/types").TradeResult, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, {}>, never, import("./routing/types").TradeResult, "routing">;
}, string, "routing">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>]>>;
export declare type AppState = ReturnType<typeof reducer>;
export {};
