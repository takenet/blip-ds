import type { Components, JSX } from "../types/components";

interface BdsAccordionBody extends Components.BdsAccordionBody, HTMLElement {}
export const BdsAccordionBody: {
    prototype: BdsAccordionBody;
    new (): BdsAccordionBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
