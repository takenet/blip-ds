/**
 * Close icon row for custom modal layouts. Use it when the default close button of uai-modal is hidden;
 * pair with a click handler on the host; avoid it as the only way to dismiss a modal.
 *
 * @part icon - The close icon box.
 */
export declare class UaiModalCloseButton {
    /** Shows the close icon when 'true'. Use to hide it without removing the element; avoid toggling on every render. */
    active?: boolean;
    render(): HTMLElement;
}
