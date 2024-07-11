/// <reference types="react" />
import { Warning } from "constants/tokenSafety";
export declare const BlockedIcon: import("styled-components").StyledComponent<import("react-feather").Icon, import("styled-components").DefaultTheme, {
    size?: string | undefined;
}, never>;
export default function TokenSafetyIcon({ warning, }: {
    warning: Warning | null;
}): JSX.Element | null;
