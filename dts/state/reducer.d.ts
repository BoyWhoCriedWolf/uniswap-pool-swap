/// <reference types="redux-persist/types/persistreducer" />
declare const appReducer: import("redux").Reducer<import("redux").CombinedState<{
    user: import("./user/reducer").UserState;
    transactions: import("./transactions/reducer").TransactionState;
    signatures: import("./signatures/reducer").SignatureState;
    lists: import("./lists/reducer").ListsState;
    application: import("./application/reducer").ApplicationState;
    wallets: import("./wallets/reducer").WalletState;
    mint: import("./mint/reducer").MintState;
    mintV3: import("./mint/v3/reducer").MintState;
    burn: import("./burn/reducer").BurnState;
    burnV3: import("./burn/v3/reducer").BurnV3State;
    multicall: import("@uniswap/redux-multicall").MulticallState;
    logs: import("./logs/slice").LogsState;
    routingApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("./routing/types").TradeResult, "routingApi">;
    }, never, "routingApi">;
    quickRouteApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuickRoute: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuickQuoteArgs, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("./routing/types").PreviewTradeResult, "quickRouteApi">;
    }, never, "quickRouteApi">;
}>, import("redux").AnyAction>;
export type AppState = ReturnType<typeof appReducer>;
declare const persistedReducer: import("redux").Reducer<import("redux").EmptyObject & {
    user: import("./user/reducer").UserState;
    transactions: import("./transactions/reducer").TransactionState;
    signatures: import("./signatures/reducer").SignatureState;
    lists: import("./lists/reducer").ListsState;
    application: import("./application/reducer").ApplicationState;
    wallets: import("./wallets/reducer").WalletState;
    mint: import("./mint/reducer").MintState;
    mintV3: import("./mint/v3/reducer").MintState;
    burn: import("./burn/reducer").BurnState;
    burnV3: import("./burn/v3/reducer").BurnV3State;
    multicall: import("@uniswap/redux-multicall").MulticallState;
    logs: import("./logs/slice").LogsState;
    routingApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuote: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuoteArgs, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("./routing/types").TradeResult, "routingApi">;
    }, never, "routingApi">;
    quickRouteApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuickRoute: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("./routing/types").GetQuickQuoteArgs, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("./routing/types").PreviewTradeResult, "quickRouteApi">;
    }, never, "quickRouteApi">;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction>;
export default persistedReducer;
