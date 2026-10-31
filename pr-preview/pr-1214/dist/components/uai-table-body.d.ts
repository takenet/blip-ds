import type { Components, JSX } from "../types/components";

interface UaiTableBody extends Components.UaiTableBody, HTMLElement {}
export const UaiTableBody: {
    prototype: UaiTableBody;
    new (): UaiTableBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
