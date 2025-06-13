import type { Components, JSX } from "../types/components";

interface BdsTestComponent extends Components.BdsTestComponent, HTMLElement {}
export const BdsTestComponent: {
    prototype: BdsTestComponent;
    new (): BdsTestComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
