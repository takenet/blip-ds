import type { Components, JSX } from "../types/components";

interface BdsAccordion extends Components.BdsAccordion, HTMLElement {}
export const BdsAccordion: {
    prototype: BdsAccordion;
    new (): BdsAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
