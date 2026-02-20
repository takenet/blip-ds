import type { Components, JSX } from "../types/components";

interface BdsInputPassword extends Components.BdsInputPassword, HTMLElement {}
export const BdsInputPassword: {
    prototype: BdsInputPassword;
    new (): BdsInputPassword;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
