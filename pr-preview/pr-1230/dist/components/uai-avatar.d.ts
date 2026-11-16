import type { Components, JSX } from "../types/components";

interface UaiAvatar extends Components.UaiAvatar, HTMLElement {}
export const UaiAvatar: {
    prototype: UaiAvatar;
    new (): UaiAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
