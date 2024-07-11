import type { TokenList } from "@uniswap/token-lists";
/**
 * Fetches and validates a token list.
 * For a given token list URL, we try to fetch the list from all the possible HTTP URLs.
 * For example, IPFS URLs can be fetched through multiple gateways.
 */
export default function fetchTokenList(listUrl: string, resolveENSContentHash: (ensName: string) => Promise<string>, skipValidation?: boolean): Promise<TokenList>;
