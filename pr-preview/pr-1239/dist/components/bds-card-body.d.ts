import type { Components, JSX } from "../types/components";

interface BdsCardBody extends Components.BdsCardBody, HTMLElement {}
export const BdsCardBody: {
    prototype: BdsCardBody;
    new (): BdsCardBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
