import type { Components, JSX } from "../types/components";

interface BdsLoadingPage extends Components.BdsLoadingPage, HTMLElement {}
export const BdsLoadingPage: {
    prototype: BdsLoadingPage;
    new (): BdsLoadingPage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
