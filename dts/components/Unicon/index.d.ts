import React from "react";
interface Props {
    address: string;
    size?: number;
    randomSeed?: number;
    border?: boolean;
    mobile?: boolean;
}
declare function _Unicon({ address, size, randomSeed, mobile }: Props): JSX.Element | null;
export declare const Unicon: React.MemoExoticComponent<typeof _Unicon>;
export {};
