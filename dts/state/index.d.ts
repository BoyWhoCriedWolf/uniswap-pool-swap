/// <reference types="redux-persist/types/persistreducer" />
/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
export declare function createDefaultStore(): import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
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
        getQuote: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").TradeResult, "routingApi">;
    }, never, "routingApi">;
    quickRouteApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuickRoute: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuickQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").PreviewTradeResult, "quickRouteApi">;
    }, never, "quickRouteApi">;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<import("redux").EmptyObject & {
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
        getQuote: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").TradeResult, "routingApi">;
    }, never, "routingApi">;
    quickRouteApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuickRoute: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuickQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").PreviewTradeResult, "quickRouteApi">;
    }, never, "quickRouteApi">;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction, undefined>, import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    getQuote: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").TradeResult, "routingApi">;
}, string, "routingApi">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>, import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    getQuickRoute: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuickQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").PreviewTradeResult, "quickRouteApi">;
}, string, "quickRouteApi">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>]>>;
declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
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
        getQuote: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").TradeResult, "routingApi">;
    }, never, "routingApi">;
    quickRouteApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuickRoute: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuickQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").PreviewTradeResult, "quickRouteApi">;
    }, never, "quickRouteApi">;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<import("redux").EmptyObject & {
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
        getQuote: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").TradeResult, "routingApi">;
    }, never, "routingApi">;
    quickRouteApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getQuickRoute: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuickQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").PreviewTradeResult, "quickRouteApi">;
    }, never, "quickRouteApi">;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction, undefined>, import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    getQuote: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").TradeResult, "routingApi">;
}, string, "routingApi">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>, import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    getQuickRoute: import("@reduxjs/toolkit/query/react").QueryDefinition<import("./routing/types").GetQuickQuoteArgs, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, never, import("./routing/types").PreviewTradeResult, "quickRouteApi">;
}, string, "quickRouteApi">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>]>>;
export declare const persistor: import("redux-persist").Persistor;
export default store;
