/**
 * Close button for custom modal layouts. It is a native button with an accessible name, so it takes the focus and
 * works with Enter and Space. Use it when the default close button of uai-modal is hidden; listen to `click` on it
 * to close the modal; avoid it as the only way to dismiss a modal.
 *
 * @part button - The native close button.
 */
export declare class UaiModalCloseButton {
    /** Shows the close button when 'true'. Use to hide it without removing the element; a hidden button leaves the tab order. */
    active?: boolean;
    /** Accessible name of the button. Use a translated label; avoid leaving it generic. */
    label?: string;
    /** Test selector on the button. Use for automation; pair with semantic queries. Avoid styling by it. */
    dtButton?: string;
    render(): HTMLElement;
}
