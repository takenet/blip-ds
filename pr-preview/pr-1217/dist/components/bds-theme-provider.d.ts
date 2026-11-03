import type { Components, JSX } from "../types/components";

interface BdsThemeProvider extends Components.BdsThemeProvider, HTMLElement {}
export const BdsThemeProvider: {
    prototype: BdsThemeProvider;
    new (): BdsThemeProvider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
