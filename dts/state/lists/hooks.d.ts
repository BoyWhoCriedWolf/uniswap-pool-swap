import { TokenAddressMap } from "lib/hooks/useTokenList/utils";
import { AppState } from "state/reducer";
export declare function useAllLists(): AppState["lists"]["byUrl"];
export declare function useCombinedTokenMapFromUrls(urls: string[] | undefined): TokenAddressMap;
export declare function useCombinedActiveList(): TokenAddressMap;
export declare function useUnsupportedTokenList(): TokenAddressMap;
