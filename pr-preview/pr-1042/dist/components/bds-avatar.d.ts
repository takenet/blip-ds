import type { Components, JSX } from "../types/components";

interface BdsAvatar extends Components.BdsAvatar, HTMLElement {}
export const BdsAvatar: {
    prototype: BdsAvatar;
    new (): BdsAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
