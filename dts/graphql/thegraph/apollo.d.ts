import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export declare const apolloClient: ApolloClient<NormalizedCacheObject>;
export declare const chainToApolloClient: Record<number, ApolloClient<NormalizedCacheObject>>;
export declare const chainToApolloBlockClient: Record<number, ApolloClient<NormalizedCacheObject>>;
