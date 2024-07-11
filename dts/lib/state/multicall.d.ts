/// <reference types="react" />
declare const multicall: {
    reducerPath: string;
    reducer: import("redux").Reducer<import("@uniswap/redux-multicall").MulticallState, import("redux").AnyAction>;
    actions: any;
    hooks: {
        useMultipleContractSingleData: (chainId: number | undefined, latestBlockNumber: number | undefined, addresses: (string | undefined)[], contractInterface: import("@ethersproject/abi").Interface, methodName: string, callInputs?: (string | number | import("ethers").BigNumber | import("@uniswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined, options?: Partial<import("@uniswap/redux-multicall").ListenerOptionsWithGas> | undefined) => import("@uniswap/redux-multicall").CallState[];
        useSingleContractMultipleData: (chainId: number | undefined, latestBlockNumber: number | undefined, contract: import("ethers").Contract | null | undefined, methodName: string, callInputs: ((string | number | import("ethers").BigNumber | import("@uniswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined)[], options?: Partial<import("@uniswap/redux-multicall").ListenerOptionsWithGas> | undefined) => import("@uniswap/redux-multicall").CallState[];
        useSingleContractWithCallData: (chainId: number | undefined, latestBlockNumber: number | undefined, contract: import("ethers").Contract | null | undefined, callDatas: string[], options?: Partial<import("@uniswap/redux-multicall").ListenerOptionsWithGas> | undefined) => import("@uniswap/redux-multicall").CallState[];
        useSingleCallResult: (chainId: number | undefined, latestBlockNumber: number | undefined, contract: import("ethers").Contract | null | undefined, methodName: string, inputs?: (string | number | import("ethers").BigNumber | import("@uniswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined, options?: Partial<import("@uniswap/redux-multicall").ListenerOptionsWithGas> | undefined) => import("@uniswap/redux-multicall").CallState;
        useMultiChainMultiContractSingleData: (chainToBlockNumber: Record<number, number | undefined>, chainToAddresses: Record<number, (string | undefined)[]>, contractInterface: import("@ethersproject/abi").Interface, methodName: string, callInputs?: (string | number | import("ethers").BigNumber | import("@uniswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined, options?: Partial<import("@uniswap/redux-multicall").ListenerOptionsWithGas> | undefined) => Record<number, import("@uniswap/redux-multicall").CallState[]>;
        useMultiChainSingleContractSingleData: (chainToBlockNumber: Record<number, number | undefined>, chainToAddress: Record<number, string | undefined>, contractInterface: import("@ethersproject/abi").Interface, methodName: string, callInputs?: (string | number | import("ethers").BigNumber | import("@uniswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined, options?: Partial<import("@uniswap/redux-multicall").ListenerOptionsWithGas> | undefined) => Record<number, import("@uniswap/redux-multicall").CallState>;
    };
    Updater: (props: Pick<import("@uniswap/redux-multicall/dist/updater").UpdaterProps, "chainId" | "contract" | "listenerOptions" | "latestBlockNumber" | "isDebug">) => JSX.Element;
};
export default multicall;
export declare function MulticallUpdater(): JSX.Element;
