import type { Components, JSX } from "../types/components";

interface UaiCardBody extends Components.UaiCardBody, HTMLElement {}
export const UaiCardBody: {
    prototype: UaiCardBody;
    new (): UaiCardBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
