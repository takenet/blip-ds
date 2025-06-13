import type { Components, JSX } from "../types/components";

interface BdsTable extends Components.BdsTable, HTMLElement {}
export const BdsTable: {
    prototype: BdsTable;
    new (): BdsTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
