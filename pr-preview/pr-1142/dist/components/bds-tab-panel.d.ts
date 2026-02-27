import type { Components, JSX } from "../types/components";

interface BdsTabPanel extends Components.BdsTabPanel, HTMLElement {}
export const BdsTabPanel: {
    prototype: BdsTabPanel;
    new (): BdsTabPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
