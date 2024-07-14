import { ReactNode } from "react";
export declare function useFastForwardBlockNumber(): (block: number) => void;
/** Requires that BlockUpdater be installed in the DOM tree. */
export default function useBlockNumber(): number | undefined;
export declare function useMainnetBlockNumber(): number | undefined;
export declare function BlockNumberProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
