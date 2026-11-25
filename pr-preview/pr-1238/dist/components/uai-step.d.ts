import type { Components, JSX } from "../types/components";

interface UaiStep extends Components.UaiStep, HTMLElement {}
export const UaiStep: {
    prototype: UaiStep;
    new (): UaiStep;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
