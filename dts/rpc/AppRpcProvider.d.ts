import { JsonRpcProvider } from "@ethersproject/providers";
import { SupportedInterfaceChain } from "constants/chains";
import AppStaticJsonRpcProvider from "./StaticJsonRpcProvider";
interface ProviderPerformance {
    callCount: number;
    latency: number;
    failureCount: number;
    lastEvaluated: number;
}
interface FallbackProviderEvaluation {
    provider: JsonRpcProvider;
    performance: ProviderPerformance;
}
/**
 * This provider balances requests among multiple JSON-RPC endpoints.
 */
export default class AppRpcProvider extends AppStaticJsonRpcProvider {
    providerEvaluations: ReadonlyArray<FallbackProviderEvaluation>;
    readonly evaluationIntervalMs: number;
    constructor(chainId: SupportedInterfaceChain, providers: JsonRpcProvider[], evaluationIntervalMs?: number);
    /**
     * Perform a JSON-RPC request.
     * Throws an error if all providers fail to perform the operation.
     */
    perform(method: string, params: {
        [name: string]: any;
    }): Promise<any>;
    /**
     * Evaluates the performance of a provider. Updates latency and failure count metrics.
     */
    evaluateProvider(config: FallbackProviderEvaluation): Promise<void>;
    static sortProviders(providerEvaluations: FallbackProviderEvaluation[]): FallbackProviderEvaluation[];
}
export {};
