import type { Components, JSX } from "../types/components";

interface BdsAlert extends Components.BdsAlert, HTMLElement {}
export const BdsAlert: {
    prototype: BdsAlert;
    new (): BdsAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
