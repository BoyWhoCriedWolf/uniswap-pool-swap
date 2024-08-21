import AppStaticJsonRpcProvider from 'rpc/StaticJsonRpcProvider';
import StaticJsonRpcProvider from 'rpc/StaticJsonRpcProvider';
import { SupportedInterfaceChain } from './chains';
/**
 * These are the only JsonRpcProviders used directly by the interface.
 */
export declare const RPC_PROVIDERS: {
    [key in SupportedInterfaceChain]: StaticJsonRpcProvider;
};
export declare const DEPRECATED_RPC_PROVIDERS: {
    [key in SupportedInterfaceChain]: AppStaticJsonRpcProvider;
};
