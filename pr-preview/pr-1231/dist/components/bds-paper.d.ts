import type { Components, JSX } from "../types/components";

interface BdsPaper extends Components.BdsPaper, HTMLElement {}
export const BdsPaper: {
    prototype: BdsPaper;
    new (): BdsPaper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
