import type { Components, JSX } from "../types/components";

interface BdsNavbarContent extends Components.BdsNavbarContent, HTMLElement {}
export const BdsNavbarContent: {
    prototype: BdsNavbarContent;
    new (): BdsNavbarContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
