import type { Components, JSX } from "../types/components";

interface UaiCardHeader extends Components.UaiCardHeader, HTMLElement {}
export const UaiCardHeader: {
    prototype: UaiCardHeader;
    new (): UaiCardHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
