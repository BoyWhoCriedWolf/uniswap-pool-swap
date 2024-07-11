import { ChainId } from "@uniswap/sdk-core";
import { Web3ReactHooks } from "@web3-react/core";
import { Connector } from "@web3-react/types";
export declare enum ConnectionType {
    UNISWAP_WALLET_V2 = "UNISWAP_WALLET_V2",
    INJECTED = "INJECTED",
    COINBASE_WALLET = "COINBASE_WALLET",
    WALLET_CONNECT_V2 = "WALLET_CONNECT_V2",
    NETWORK = "NETWORK",
    GNOSIS_SAFE = "GNOSIS_SAFE",
    DEPRECATED_NETWORK = "DEPRECATED_NETWORK"
}
export declare function toConnectionType(value?: string): ConnectionType | undefined;
export interface Connection {
    getName(): string;
    connector: Connector;
    hooks: Web3ReactHooks;
    type: ConnectionType;
    getIcon?(isDarkMode: boolean): string;
    shouldDisplay(): boolean;
    overrideActivate?: (chainId?: ChainId) => boolean;
}
