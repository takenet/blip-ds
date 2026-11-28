import type { Components, JSX } from "../types/components";

interface BdsCardTitle extends Components.BdsCardTitle, HTMLElement {}
export const BdsCardTitle: {
    prototype: BdsCardTitle;
    new (): BdsCardTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
