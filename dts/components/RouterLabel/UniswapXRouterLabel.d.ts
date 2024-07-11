/// <reference types="react" />
import { BoxProps } from "../../nft/components/Box";
declare const Gradient: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export { Gradient as UniswapXGradient };
export declare const UniswapXRouterIcon: ({ testId }: {
    testId?: string | undefined;
}) => JSX.Element;
export type UnswapXRouterLabelProps = BoxProps & {
    disableTextGradient?: boolean;
    testId?: string;
};
export default function UniswapXRouterLabel({ children, disableTextGradient, testId, ...rest }: UnswapXRouterLabelProps): JSX.Element;
