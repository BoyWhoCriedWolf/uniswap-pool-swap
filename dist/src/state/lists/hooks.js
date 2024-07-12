import { tokensToChainTokenMap } from '../../lib/hooks/useTokenList/utils.js';
import { useMemo } from 'react';
import { useAppSelector } from '../hooks.js';
import sortByListPriority from '../../utils/listSort.js';
import BROKEN_LIST from '../../constants/tokenLists/broken.tokenlist.json.js';
import { DEFAULT_ACTIVE_LIST_URLS, UNSUPPORTED_LIST_URLS } from '../../constants/lists.js';

function useAllLists() {
  return useAppSelector(state => state.lists.byUrl);
}

/**
 * Combine the tokens in map2 with the tokens on map1, where tokens on map1 take precedence
 * @param map1 the base token map
 * @param map2 the map of additioanl tokens to add to the base map
 */
function combineMaps(map1, map2) {
  const chainIds = Object.keys(Object.keys(map1).concat(Object.keys(map2)).reduce((memo, value) => {
    memo[value] = true;
    return memo;
  }, {})).map(id => parseInt(id));
  return chainIds.reduce((memo, chainId) => {
    memo[chainId] = {
      ...map2[chainId],
      // map1 takes precedence
      ...map1[chainId]
    };
    return memo;
  }, {});
}

// merge tokens contained within lists from urls
function useCombinedTokenMapFromUrls(urls) {
  const lists = useAllLists();
  return useMemo(() => {
    if (!urls) return {};
    return urls.slice()
    // sort by priority so top priority goes last
    .sort(sortByListPriority).reduce((allTokens, currentUrl) => {
      const current = lists[currentUrl]?.current;
      if (!current) return allTokens;
      try {
        return combineMaps(allTokens, tokensToChainTokenMap(current));
      } catch (error) {
        console.error("Could not show token list due to error", error);
        return allTokens;
      }
    }, {});
  }, [lists, urls]);
}

// get all the tokens from active lists, combine with local default tokens
function useCombinedActiveList() {
  const activeTokens = useCombinedTokenMapFromUrls(DEFAULT_ACTIVE_LIST_URLS);
  return activeTokens;
}

// list of tokens not supported on interface for various reasons, used to show warnings and prevent swaps and adds
function useUnsupportedTokenList() {
  // get hard-coded broken tokens
  const brokenListMap = useMemo(() => tokensToChainTokenMap(BROKEN_LIST), []);

  // get dynamic list of unsupported tokens
  const loadedUnsupportedListMap = useCombinedTokenMapFromUrls(UNSUPPORTED_LIST_URLS);

  // format into one token address map
  return useMemo(() => combineMaps(brokenListMap, loadedUnsupportedListMap), [brokenListMap, loadedUnsupportedListMap]);
}

export { useAllLists, useCombinedActiveList, useCombinedTokenMapFromUrls, useUnsupportedTokenList };
