/// <reference types="react" />
import { AssetRow } from "nft/types";
export declare const enum Section {
    APPROVE = 0,
    SIGN = 1
}
interface ListModalSectionProps {
    sectionType: Section;
    active: boolean;
    content: AssetRow[];
    toggleSection: React.DispatchWithoutAction;
}
export declare const ListModalSection: ({ sectionType, active, content, toggleSection, }: ListModalSectionProps) => JSX.Element;
export {};
