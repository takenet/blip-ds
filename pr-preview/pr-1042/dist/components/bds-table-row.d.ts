import type { Components, JSX } from "../types/components";

interface BdsTableRow extends Components.BdsTableRow, HTMLElement {}
export const BdsTableRow: {
    prototype: BdsTableRow;
    new (): BdsTableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
