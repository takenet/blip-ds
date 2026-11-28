import type { Components, JSX } from "../types/components";

interface BdsUpload extends Components.BdsUpload, HTMLElement {}
export const BdsUpload: {
    prototype: BdsUpload;
    new (): BdsUpload;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
