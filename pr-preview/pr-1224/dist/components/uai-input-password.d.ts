import type { Components, JSX } from "../types/components";

interface UaiInputPassword extends Components.UaiInputPassword, HTMLElement {}
export const UaiInputPassword: {
    prototype: UaiInputPassword;
    new (): UaiInputPassword;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
