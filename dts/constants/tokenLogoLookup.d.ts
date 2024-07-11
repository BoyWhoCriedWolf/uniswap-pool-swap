declare class TokenLogoLookupTable {
    private dict;
    private initialized;
    initialize(): void;
    getIcons(address?: string | null, chainId?: number | null): string[] | undefined;
}
declare const _default: TokenLogoLookupTable;
export default _default;
