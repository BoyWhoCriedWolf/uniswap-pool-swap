/// <reference types="react" />
export declare enum ThemeMode {
    LIGHT = 0,
    DARK = 1,
    AUTO = 2
}
export declare function SystemThemeUpdater(): null;
export declare function ThemeColorMetaUpdater(): null;
export declare function useIsDarkMode(): boolean;
export declare function useDarkModeManager(): [boolean, (mode: ThemeMode) => void];
export default function ThemeToggle({ disabled }: {
    disabled?: boolean;
}): JSX.Element;
