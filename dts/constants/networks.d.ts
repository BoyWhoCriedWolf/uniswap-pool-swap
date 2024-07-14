/**
 * Fallback JSON-RPC endpoints.
 * These are used if the integrator does not provide an endpoint, or if the endpoint does not work.
 *
 * MetaMask allows switching to any URL, but displays a warning if it is not on the "Safe" list:
 * https://github.com/MetaMask/metamask-mobile/blob/bdb7f37c90e4fc923881a07fca38d4e77c73a579/app/core/RPCMethods/wallet_addEthereumChain.js#L228-L235
 * https://chainid.network/chains.json
 *
 * These "Safe" URLs are listed first, followed by other fallback URLs, which are taken from chainlist.org.
 */
export declare const FALLBACK_URLS: {
    1: string[];
    5: string[];
    11155111: string[];
    137: string[];
    80001: string[];
    42161: string[];
    421613: string[];
    10: string[];
    420: string[];
    42220: string[];
    44787: string[];
    56: string[];
    43114: string[];
    8453: string[];
};
/**
 * Known JSON-RPC endpoints.
 * These are the URLs used by the interface when there is not another available source of chain data.
 */
export declare const RPC_URLS: {
    1: string[];
    5: string[];
    11155111: string[];
    10: string[];
    420: string[];
    42161: string[];
    421613: string[];
    137: string[];
    80001: string[];
    42220: string[];
    44787: string[];
    56: string[];
    43114: string[];
    8453: string[];
};
