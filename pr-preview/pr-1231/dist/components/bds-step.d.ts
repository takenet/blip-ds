import type { Components, JSX } from "../types/components";

interface BdsStep extends Components.BdsStep, HTMLElement {}
export const BdsStep: {
    prototype: BdsStep;
    new (): BdsStep;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
