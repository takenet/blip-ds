import type { Components, JSX } from "../types/components";

interface BdsTypo extends Components.BdsTypo, HTMLElement {}
export const BdsTypo: {
    prototype: BdsTypo;
    new (): BdsTypo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
