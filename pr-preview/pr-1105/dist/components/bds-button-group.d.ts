import type { Components, JSX } from "../types/components";

interface BdsButtonGroup extends Components.BdsButtonGroup, HTMLElement {}
export const BdsButtonGroup: {
    prototype: BdsButtonGroup;
    new (): BdsButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
