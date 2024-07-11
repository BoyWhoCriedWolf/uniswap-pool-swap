import { PropsWithChildren } from "react";
import { Icon } from "react-feather";
type SegmentProps<T> = PropsWithChildren<{
    active?: boolean;
    value: T;
    Icon?: Icon;
    onSelect?: (v: T) => void;
    testId?: string;
}>;
export declare function Segment<T>({ active, value, Icon, onSelect, testId, children, }: SegmentProps<T>): JSX.Element;
export declare function SegmentedControl<T>({ selected, onSelect, children, }: {
    selected: T;
    onSelect: (v: T) => void;
    children: React.ReactElement<SegmentProps<T>>[];
}): JSX.Element;
export {};
