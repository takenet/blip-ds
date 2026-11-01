import type { Components, JSX } from "../types/components";

interface UaiTable extends Components.UaiTable, HTMLElement {}
export const UaiTable: {
    prototype: UaiTable;
    new (): UaiTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
