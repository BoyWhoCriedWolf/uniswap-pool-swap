export declare const navSearchInputVisibleSize = 1100;
declare const BREAKPOINTS_ADDITIONAL: {
    navSearchInputVisible: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
};
export declare function useScreenSize(): Record<keyof typeof BREAKPOINTS_ADDITIONAL, boolean>;
export {};
