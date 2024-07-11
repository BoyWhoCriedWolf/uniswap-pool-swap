/// <reference types="react" />
import { Connection } from "connection/types";
interface OptionProps {
    connection: Connection;
}
export default function Option({ connection }: OptionProps): JSX.Element;
export {};
