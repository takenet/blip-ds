import type { Components, JSX } from "../types/components";

interface BdsLine extends Components.BdsLine, HTMLElement {}
export const BdsLine: {
    prototype: BdsLine;
    new (): BdsLine;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
