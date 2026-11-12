import type { Components, JSX } from "../types/components";

interface UaiLogo extends Components.UaiLogo, HTMLElement {}
export const UaiLogo: {
    prototype: UaiLogo;
    new (): UaiLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
