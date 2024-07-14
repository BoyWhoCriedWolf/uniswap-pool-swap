import { ReactNode } from "react";
declare const ActionButton: ({ isDisabled, isSelected, clickActionButton, children, }: {
    isDisabled: boolean;
    isSelected: boolean;
    clickActionButton: (e: React.MouseEvent) => void;
    children: ReactNode;
}) => JSX.Element;
declare const Container: ({ isSelected, isDisabled, detailsHref, testId, onClick, children, }: {
    isSelected: boolean;
    isDisabled: boolean;
    detailsHref?: string | undefined;
    testId?: string | undefined;
    children: ReactNode;
    onClick?: ((e: React.MouseEvent) => void) | undefined;
}) => JSX.Element;
declare const DetailsRelativeContainer: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const DetailsContainer: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const InfoContainer: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const PrimaryRow: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const PrimaryDetails: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const PrimaryInfo: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const SecondaryRow: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const SecondaryDetails: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const SecondaryInfo: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
export { ActionButton, Container, DetailsContainer, DetailsRelativeContainer, InfoContainer, PrimaryDetails, PrimaryInfo, PrimaryRow, SecondaryDetails, SecondaryInfo, SecondaryRow, };
