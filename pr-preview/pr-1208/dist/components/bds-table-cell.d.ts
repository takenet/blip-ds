import type { Components, JSX } from "../types/components";

interface BdsTableCell extends Components.BdsTableCell, HTMLElement {}
export const BdsTableCell: {
    prototype: BdsTableCell;
    new (): BdsTableCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
