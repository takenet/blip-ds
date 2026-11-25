import type { Components, JSX } from "../types/components";

interface UaiStepper extends Components.UaiStepper, HTMLElement {}
export const UaiStepper: {
    prototype: UaiStepper;
    new (): UaiStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
