import React from "react";
export interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, "ref" | "onChange" | "as"> {
    value: string | number;
    onUserInput: (input: string) => void;
    error?: boolean;
    fontSize?: string;
    align?: "right" | "left";
    prependSymbol?: string;
}
declare const MemoizedInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>>;
export { MemoizedInput as Input };
