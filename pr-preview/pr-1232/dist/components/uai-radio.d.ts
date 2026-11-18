import type { Components, JSX } from "../types/components";

interface UaiRadio extends Components.UaiRadio, HTMLElement {}
export const UaiRadio: {
    prototype: UaiRadio;
    new (): UaiRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
