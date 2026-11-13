import type { Components, JSX } from "../types/components";

interface UaiNavbarContent extends Components.UaiNavbarContent, HTMLElement {}
export const UaiNavbarContent: {
    prototype: UaiNavbarContent;
    new (): UaiNavbarContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
