import { Contract } from "@ethersproject/contracts";
import { JsonRpcProvider } from "@ethersproject/providers";
export declare function getContract(address: string, ABI: any, provider: JsonRpcProvider, account?: string): Contract;
