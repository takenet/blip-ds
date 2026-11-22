import type { Components, JSX } from "../types/components";

interface BdsCardFooter extends Components.BdsCardFooter, HTMLElement {}
export const BdsCardFooter: {
    prototype: BdsCardFooter;
    new (): BdsCardFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
