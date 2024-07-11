import { RefObject } from "react";
export declare function useOnClickOutside<T extends HTMLElement>(node: RefObject<T | undefined>, handler: undefined | (() => void), ignoredNodes?: Array<RefObject<T | undefined>>): void;
