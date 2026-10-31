import type { Components, JSX } from "../types/components";

interface UaiTableCell extends Components.UaiTableCell, HTMLElement {}
export const UaiTableCell: {
    prototype: UaiTableCell;
    new (): UaiTableCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
