/// <reference types="react" />
import { Connection } from "connection/types";
export declare const IconWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    size?: number | undefined;
}, never>;
export default function StatusIcon({ account, connection, size, showMiniIcons, }: {
    account: string;
    connection: Connection;
    size?: number;
    showMiniIcons?: boolean;
}): JSX.Element;
