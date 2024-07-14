import { Theme } from "./sprinkles.css";
export declare function cssObjectFromTheme(theme: Theme | (() => Theme), { extends: baseTheme }?: {
    extends?: Theme | (() => Theme);
}): {
    [x: string]: string;
};
