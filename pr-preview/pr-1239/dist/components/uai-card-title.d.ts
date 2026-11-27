import type { Components, JSX } from "../types/components";

interface UaiCardTitle extends Components.UaiCardTitle, HTMLElement {}
export const UaiCardTitle: {
    prototype: UaiCardTitle;
    new (): UaiCardTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
