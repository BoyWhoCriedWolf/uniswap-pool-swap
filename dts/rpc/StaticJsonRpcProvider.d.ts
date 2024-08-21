import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { SupportedInterfaceChain } from '../constants/chains';
export default class AppStaticJsonRpcProvider extends StaticJsonRpcProvider {
    private _blockCache;
    get blockCache(): Map<string, Promise<any>>;
    constructor(chainId: SupportedInterfaceChain, url: string);
    send(method: string, params: Array<any>): Promise<any>;
}
