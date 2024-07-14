import { ChainId } from "@uniswap/sdk-core";
import { Connector } from "@web3-react/types";
export declare function useSwitchChain(): (connector: Connector, chainId: ChainId) => Promise<void>;
