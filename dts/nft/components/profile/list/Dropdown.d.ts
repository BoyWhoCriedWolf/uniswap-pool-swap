/// <reference types="react" />
import { DropDownOption } from "nft/types";
interface DropdownArgs {
    dropDownOptions: DropDownOption[];
    width: number;
}
export declare const Dropdown: ({ dropDownOptions, width }: DropdownArgs) => JSX.Element;
export {};
