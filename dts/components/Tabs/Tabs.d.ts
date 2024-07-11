import { FC, PropsWithChildren, ReactNode } from "react";
declare const Tabs: FC<PropsWithChildren<{
    data?: Array<{
        label?: string;
        content?: ReactNode;
    }>;
    index?: number;
}>>;
export default Tabs;
