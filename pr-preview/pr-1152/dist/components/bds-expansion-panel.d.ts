import type { Components, JSX } from "../types/components";

interface BdsExpansionPanel extends Components.BdsExpansionPanel, HTMLElement {}
export const BdsExpansionPanel: {
    prototype: BdsExpansionPanel;
    new (): BdsExpansionPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
