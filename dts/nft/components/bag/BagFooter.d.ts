/// <reference types="react" />
interface BagFooterProps {
    setModalIsOpen: (open: boolean) => void;
    eventProperties: Record<string, unknown>;
}
export declare const BagFooter: ({ setModalIsOpen, eventProperties, }: BagFooterProps) => JSX.Element;
export {};
