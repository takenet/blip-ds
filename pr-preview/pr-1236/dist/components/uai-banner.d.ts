import type { Components, JSX } from "../types/components";

interface UaiBanner extends Components.UaiBanner, HTMLElement {}
export const UaiBanner: {
    prototype: UaiBanner;
    new (): UaiBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
