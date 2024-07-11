/// <reference types="react" />
import { DefaultTheme } from "styled-components";
export declare enum BadgeVariant {
    DEFAULT = "DEFAULT",
    NEGATIVE = "NEGATIVE",
    POSITIVE = "POSITIVE",
    PRIMARY = "PRIMARY",
    WARNING = "WARNING",
    PROMOTIONAL = "PROMOTIONAL",
    BRANDED = "BRANDED",
    SOFT = "SOFT",
    WARNING_OUTLINE = "WARNING_OUTLINE"
}
interface BadgeProps {
    variant?: BadgeVariant;
}
declare const Badge: import("styled-components").StyledComponent<"div", DefaultTheme, BadgeProps & {
    children?: import("react").ReactNode;
}, never>;
export default Badge;
