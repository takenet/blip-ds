import { UaiToastPosition } from '../../utils/uai-toast';
/**
 * Stack of toasts fixed to a corner or edge of the screen. It opens in the top layer (Popover API), so the toasts
 * stay above modals, and announces each toast that opens to screen readers.
 * Use one per position inside UaiThemeProvider; `uai-toast` `show()` creates it when the page has none.
 * Avoid placing other content in it.
 *
 * @slot - The uai-toast elements.
 * @part stack - The list that stacks the toasts.
 */
export declare class UaiToastContainer {
    el: HTMLElement;
    private modalObserver?;
    private politeRegion?;
    private assertiveRegion?;
    /** Where the toasts are stacked. Use bottom positions for feedback of an action; avoid two containers in one position. */
    position?: UaiToastPosition;
    /** Accessible name of the notifications region. Use a translated label; avoid leaving it generic. */
    label?: string;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private watchModal;
    private handOver;
    protected handleToastOpen(event: CustomEvent<void>): void;
    private raise;
    private announce;
    render(): HTMLElement;
}
