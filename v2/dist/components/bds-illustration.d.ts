import type { Components, JSX } from "../types/components";

interface BdsIllustration extends Components.BdsIllustration, HTMLElement {}
export const BdsIllustration: {
    prototype: BdsIllustration;
    new (): BdsIllustration;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
