import type { Components, JSX } from "../types/components";

interface UaiInputPhone extends Components.UaiInputPhone, HTMLElement {}
export const UaiInputPhone: {
    prototype: UaiInputPhone;
    new (): UaiInputPhone;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
