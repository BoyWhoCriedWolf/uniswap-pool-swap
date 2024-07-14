import { PropsWithChildren } from "react";
type ExpandoRowProps = PropsWithChildren<{
    title?: string;
    numItems: number;
    isExpanded: boolean;
    toggle: () => void;
}>;
export declare function ExpandoRow({ title, numItems, isExpanded, toggle, children, }: ExpandoRowProps): JSX.Element | null;
export {};
