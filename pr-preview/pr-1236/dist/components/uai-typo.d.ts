import type { Components, JSX } from "../types/components";

interface UaiTypo extends Components.UaiTypo, HTMLElement {}
export const UaiTypo: {
    prototype: UaiTypo;
    new (): UaiTypo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
