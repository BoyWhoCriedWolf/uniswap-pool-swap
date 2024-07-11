/// <reference types="node" />
import "polyfill-object.fromentries";
import { Buffer } from "buffer";
declare global {
    interface Window {
        Buffer: typeof Buffer;
    }
}
