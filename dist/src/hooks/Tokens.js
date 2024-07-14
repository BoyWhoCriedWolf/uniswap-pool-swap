import { ChainId, Token } from '@uniswap/sdk-core';
import { useWeb3React } from '@web3-react/core';
import { getChainInfo } from '../constants/chainInfo.js';
import { DEFAULT_LIST_OF_LISTS, DEFAULT_INACTIVE_LIST_URLS } from '../constants/lists.js';
import { useTokenFromMapOrNetwork, useCurrencyFromMap } from '../lib/hooks/useCurrency.js';
import { getTokenFilter } from '../lib/hooks/useTokenList/filtering.js';
import { useMemo } from 'react';
import { useAppSelector } from '../state/hooks.js';
import { useUserAddedTokens } from '../state/user/useUserAddedTokens.js';
import { isL2ChainId } from '../utils/chains.js';
import { useCombinedTokenMapFromUrls, useCombinedActiveList, useAllLists, useUnsupportedTokenList } from '../state/lists/hooks.js';
import { WrappedTokenInfo } from '../state/lists/wrappedTokenInfo.js';
import { deserializeToken } from '../state/user/deserializeToken.js';

// reduce token map into standard address <-> Token mapping, optionally include user added tokens
function useTokensFromMap(tokenMap, chainId) {
  return useMemo(() => {
    if (!chainId) return {};

    // reduce to just tokens
    return Object.keys(tokenMap[chainId] ?? {}).reduce((newMap, address) => {
      newMap[address] = tokenMap[chainId][address].token;
      return newMap;
    }, {});
  }, [chainId, tokenMap]);
}

// TODO(WEB-2347): after disallowing unchecked index access, refactor ChainTokenMap to not use ?'s

/** Returns tokens from all token lists on all chains, combined with user added tokens */
function useAllTokensMultichain() {
  const allTokensFromLists = useCombinedTokenMapFromUrls(DEFAULT_LIST_OF_LISTS);
  const userAddedTokensMap = useAppSelector(_ref => {
    let {
      user: {
        tokens
      }
    } = _ref;
    return tokens;
  });
  return useMemo(() => {
    const chainTokenMap = {};
    if (userAddedTokensMap) {
      Object.keys(userAddedTokensMap).forEach(key => {
        const chainId = Number(key);
        const tokenMap = {};
        Object.values(userAddedTokensMap[chainId]).forEach(serializedToken => {
          tokenMap[serializedToken.address] = deserializeToken(serializedToken);
        });
        chainTokenMap[chainId] = tokenMap;
      });
    }
    Object.keys(allTokensFromLists).forEach(key => {
      const chainId = Number(key);
      const tokenMap = chainTokenMap[chainId] ?? {};
      Object.values(allTokensFromLists[chainId]).forEach(_ref2 => {
        let {
          token
        } = _ref2;
        tokenMap[token.address] = token;
      });
      chainTokenMap[chainId] = tokenMap;
    });
    return chainTokenMap;
  }, [allTokensFromLists, userAddedTokensMap]);
}

/** Returns all tokens from the default list + user added tokens */
function useDefaultActiveTokens(chainId) {
  const defaultListTokens = useCombinedActiveList();
  const tokensFromMap = useTokensFromMap(defaultListTokens, chainId);
  const userAddedTokens = useUserAddedTokens();
  return useMemo(() => {
    return userAddedTokens
    // reduce into all ALL_TOKENS filtered by the current chain
    .reduce((tokenMap, token) => {
      tokenMap[token.address] = token;
      return tokenMap;
    },
    // must make a copy because reduce modifies the map, and we do not
    // want to make a copy in every iteration
    {
      ...tokensFromMap
    });
  }, [tokensFromMap, userAddedTokens]);
}
function useUnsupportedTokens() {
  const {
    chainId
  } = useWeb3React();
  const listsByUrl = useAllLists();
  const unsupportedTokensMap = useUnsupportedTokenList();
  const unsupportedTokens = useTokensFromMap(unsupportedTokensMap, chainId);

  // checks the default L2 lists to see if `bridgeInfo` has an L1 address value that is unsupported
  const l2InferredBlockedTokens = useMemo(() => {
    if (!chainId || !isL2ChainId(chainId)) {
      return {};
    }
    if (!listsByUrl) {
      return {};
    }
    const listUrl = getChainInfo(chainId).defaultListUrl;
    const list = listsByUrl[listUrl]?.current;
    if (!list) {
      return {};
    }
    const unsupportedSet = new Set(Object.keys(unsupportedTokens));
    return list.tokens.reduce((acc, tokenInfo) => {
      const bridgeInfo = tokenInfo.extensions?.bridgeInfo;
      if (bridgeInfo && bridgeInfo[ChainId.MAINNET] && bridgeInfo[ChainId.MAINNET].tokenAddress && unsupportedSet.has(bridgeInfo[ChainId.MAINNET].tokenAddress)) {
        const address = bridgeInfo[ChainId.MAINNET].tokenAddress;
        // don't rely on decimals--it's possible that a token could be bridged w/ different decimals on the L2
        return {
          ...acc,
          [address]: new Token(ChainId.MAINNET, address, tokenInfo.decimals)
        };
      }
      return acc;
    }, {});
  }, [chainId, listsByUrl, unsupportedTokens]);
  return {
    ...unsupportedTokens,
    ...l2InferredBlockedTokens
  };
}
function useSearchInactiveTokenLists(search) {
  let minResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  const lists = useAllLists();
  const inactiveUrls = DEFAULT_INACTIVE_LIST_URLS;
  const {
    chainId
  } = useWeb3React();
  const activeTokens = useDefaultActiveTokens(chainId);
  return useMemo(() => {
    if (!search || search.trim().length === 0) return [];
    const tokenFilter = getTokenFilter(search);
    const result = [];
    const addressSet = {};
    for (const url of inactiveUrls) {
      const list = lists[url]?.current;
      if (!list) continue;
      for (const tokenInfo of list.tokens) {
        if (tokenInfo.chainId === chainId && tokenFilter(tokenInfo)) {
          try {
            const wrapped = new WrappedTokenInfo(tokenInfo, list);
            if (!(wrapped.address in activeTokens) && !addressSet[wrapped.address]) {
              addressSet[wrapped.address] = true;
              result.push(wrapped);
              if (result.length >= minResults) return result;
            }
          } catch {
            continue;
          }
        }
      }
    }
    return result;
  }, [activeTokens, chainId, inactiveUrls, lists, minResults, search]);
}

// Check if currency is included in custom list from user storage
function useIsUserAddedToken(currency) {
  const userAddedTokens = useUserAddedTokens();
  if (!currency) {
    return false;
  }
  return !!userAddedTokens.find(token => currency.equals(token));
}

// undefined if invalid or does not exist
// null if loading or null was passed
// otherwise returns the token
function useToken(tokenAddress) {
  const {
    chainId
  } = useWeb3React();
  const tokens = useDefaultActiveTokens(chainId);
  return useTokenFromMapOrNetwork(tokens, tokenAddress);
}
function useCurrency(currencyId, chainId) {
  const {
    chainId: connectedChainId
  } = useWeb3React();
  const tokens = useDefaultActiveTokens(chainId ?? connectedChainId);
  return useCurrencyFromMap(tokens, chainId ?? connectedChainId, currencyId);
}

export { useAllTokensMultichain, useCurrency, useDefaultActiveTokens, useIsUserAddedToken, useSearchInactiveTokenLists, useToken, useUnsupportedTokens };
