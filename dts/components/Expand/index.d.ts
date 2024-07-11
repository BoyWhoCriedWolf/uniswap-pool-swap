import { PropsWithChildren, ReactElement } from "react";
export default function Expand({ header, button, children, testId, isOpen, onToggle, }: PropsWithChildren<{
    header: ReactElement;
    button: ReactElement;
    testId?: string;
    isOpen: boolean;
    onToggle: () => void;
}>): JSX.Element;
