import type { Components, JSX } from "../types/components";

interface BdsDataTable extends Components.BdsDataTable, HTMLElement {}
export const BdsDataTable: {
    prototype: BdsDataTable;
    new (): BdsDataTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
