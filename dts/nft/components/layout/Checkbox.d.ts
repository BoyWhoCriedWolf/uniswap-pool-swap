import React from "react";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hovered: boolean;
    children: React.ReactNode;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
