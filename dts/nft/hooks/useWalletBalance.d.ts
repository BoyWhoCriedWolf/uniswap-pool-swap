import { BigNumber } from "@ethersproject/bignumber";
import type { Web3Provider } from "@ethersproject/providers";
interface WalletBalanceProps {
    address: string;
    balance: string;
    weiBalance: BigNumber;
    provider?: Web3Provider;
}
export declare function useWalletBalance(): WalletBalanceProps;
export {};
