import type { Components, JSX } from "../types/components";

interface BdsCounterText extends Components.BdsCounterText, HTMLElement {}
export const BdsCounterText: {
    prototype: BdsCounterText;
    new (): BdsCounterText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
