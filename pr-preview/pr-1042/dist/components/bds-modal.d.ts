import type { Components, JSX } from "../types/components";

interface BdsModal extends Components.BdsModal, HTMLElement {}
export const BdsModal: {
    prototype: BdsModal;
    new (): BdsModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
