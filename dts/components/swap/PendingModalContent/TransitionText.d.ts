import { ReactNode } from "react";
interface TransitionTextProps {
    initialText: ReactNode;
    transitionText: ReactNode;
    transitionTimeMs?: number;
    onTransition?: () => void;
}
export declare function TransitionText({ initialText, transitionText, transitionTimeMs, onTransition, }: TransitionTextProps): JSX.Element;
export {};
