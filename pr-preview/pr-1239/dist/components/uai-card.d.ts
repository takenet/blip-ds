import type { Components, JSX } from "../types/components";

interface UaiCard extends Components.UaiCard, HTMLElement {}
export const UaiCard: {
    prototype: UaiCard;
    new (): UaiCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
