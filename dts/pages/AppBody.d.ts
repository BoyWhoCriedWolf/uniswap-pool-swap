import { PropsWithChildren } from "react";
interface BodyWrapperProps {
    $margin?: string;
    $maxWidth?: string;
}
export declare const BodyWrapper: import("styled-components").StyledComponent<"main", import("styled-components").DefaultTheme, BodyWrapperProps, never>;
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody(props: PropsWithChildren<BodyWrapperProps>): JSX.Element;
export {};
