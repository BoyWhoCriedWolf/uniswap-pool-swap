import { Activity } from "./types";
interface ActivityGroup {
    title: string;
    transactions: Array<Activity>;
}
export declare const createGroups: (activities?: Array<Activity>) => ActivityGroup[] | undefined;
export {};
