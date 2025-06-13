import type { Components, JSX } from "../types/components";

interface BdsTableBody extends Components.BdsTableBody, HTMLElement {}
export const BdsTableBody: {
    prototype: BdsTableBody;
    new (): BdsTableBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
