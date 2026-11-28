import type { Components, JSX } from "../types/components";

interface UaiThemeProvider extends Components.UaiThemeProvider, HTMLElement {}
export const UaiThemeProvider: {
    prototype: UaiThemeProvider;
    new (): UaiThemeProvider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
