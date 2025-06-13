import type { Components, JSX } from "../types/components";

interface BdsAvatarGroup extends Components.BdsAvatarGroup, HTMLElement {}
export const BdsAvatarGroup: {
    prototype: BdsAvatarGroup;
    new (): BdsAvatarGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
