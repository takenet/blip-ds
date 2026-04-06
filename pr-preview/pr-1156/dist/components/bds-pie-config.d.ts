import type { Components, JSX } from "../types/components";

interface BdsPieConfig extends Components.BdsPieConfig, HTMLElement {}
export const BdsPieConfig: {
    prototype: BdsPieConfig;
    new (): BdsPieConfig;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
