import type { Components, JSX } from "../types/components";

interface UaiCardFooter extends Components.UaiCardFooter, HTMLElement {}
export const UaiCardFooter: {
    prototype: UaiCardFooter;
    new (): UaiCardFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
