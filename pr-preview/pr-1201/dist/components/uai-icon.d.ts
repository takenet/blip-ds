import type { Components, JSX } from "../types/components";

interface UaiIcon extends Components.UaiIcon, HTMLElement {}
export const UaiIcon: {
    prototype: UaiIcon;
    new (): UaiIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
