import type { Components, JSX } from "../types/components";

interface BdsMenuExibition extends Components.BdsMenuExibition, HTMLElement {}
export const BdsMenuExibition: {
    prototype: BdsMenuExibition;
    new (): BdsMenuExibition;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
