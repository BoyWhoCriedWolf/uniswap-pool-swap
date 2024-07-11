import { TokenList, VersionUpgrade } from "@uniswap/token-lists";
export declare function shouldAcceptVersionUpdate(listUrl: string, current: TokenList, update: TokenList, targetBump: VersionUpgrade.PATCH | VersionUpgrade.MINOR): boolean;
