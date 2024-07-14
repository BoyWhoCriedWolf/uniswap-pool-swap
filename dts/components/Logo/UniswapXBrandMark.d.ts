/// <reference types="react" />
import { UnswapXRouterLabelProps } from "../RouterLabel/UniswapXRouterLabel";
type UniswapXBrandMarkProps = Omit<UnswapXRouterLabelProps, "children" | "fontWeight"> & {
    fontWeight?: "bold";
};
export default function UniswapXBrandMark({ fontWeight, ...props }: UniswapXBrandMarkProps): JSX.Element;
export {};
