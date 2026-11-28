import type { Components, JSX } from "../types/components";

interface UaiTableRow extends Components.UaiTableRow, HTMLElement {}
export const UaiTableRow: {
    prototype: UaiTableRow;
    new (): UaiTableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
