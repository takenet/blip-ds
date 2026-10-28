import type { Components, JSX } from "../types/components";

interface BdsAccordionGroup extends Components.BdsAccordionGroup, HTMLElement {}
export const BdsAccordionGroup: {
    prototype: BdsAccordionGroup;
    new (): BdsAccordionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
