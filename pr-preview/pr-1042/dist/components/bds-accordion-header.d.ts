import type { Components, JSX } from "../types/components";

interface BdsAccordionHeader extends Components.BdsAccordionHeader, HTMLElement {}
export const BdsAccordionHeader: {
    prototype: BdsAccordionHeader;
    new (): BdsAccordionHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
