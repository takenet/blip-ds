import type { Components, JSX } from "../types/components";

interface BdsTab extends Components.BdsTab, HTMLElement {}
export const BdsTab: {
    prototype: BdsTab;
    new (): BdsTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
