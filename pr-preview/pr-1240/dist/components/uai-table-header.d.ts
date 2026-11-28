import type { Components, JSX } from "../types/components";

interface UaiTableHeader extends Components.UaiTableHeader, HTMLElement {}
export const UaiTableHeader: {
    prototype: UaiTableHeader;
    new (): UaiTableHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
