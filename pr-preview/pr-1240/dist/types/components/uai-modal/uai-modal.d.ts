import { EventEmitter } from '../../stencil-public-runtime';
export type UaiModalSize = 'fixed' | 'dynamic';
/**
 * Dialog that blocks the page behind a backdrop to ask for a decision or show focused content.
 * Built on the native dialog in modal mode: the focus moves into it, stays inside it, the page behind becomes inert and the focus returns on close.
 * Use for confirmations and short tasks; pair with uai-modal-action for the buttons and UaiThemeProvider;
 * avoid it for passive notices (use uai-banner).
 *
 * @slot - Modal content.
 * @slot footer - Footer actions, aligned to the end. Use uai-modal-action or a row of uai-button (Cancelar, Salvar).
 * @part dialog - The full-screen container with the backdrop.
 * @part modal - The modal panel.
 * @part header - The header with the title and the close button.
 * @part title - The title text.
 * @part body - The scrollable content area.
 * @part footer - The footer with the actions.
 * @part close - The close button.
 */
export declare class UaiModal {
    el: HTMLElement;
    /** Opens or closes the modal. Use for declarative control; pair with uaiModalChanged. Avoid toggling it on every render. */
    open?: boolean;
    /** Shows the close button when 'true'. Use for dismissible dialogs; avoid hiding it when no other action closes the modal. */
    closeButton?: boolean;
    /** Panel size. 'fixed' keeps a standard width and height; 'dynamic' grows with the content. Use 'dynamic' for variable content. */
    size?: UaiModalSize;
    /** Panel width in rem, e.g. `30` for 30rem. In `fixed` it is the width; in `dynamic` it is the maximum width. Use for narrower or wider dialogs; avoid values wider than the screen, the panel never exceeds it. Defaults to 41. */
    width?: number;
    /** Closes the modal when the backdrop is clicked. Use 'false' for flows that need an explicit choice. */
    outzoneClose?: boolean;
    /** Closes the modal with Enter when no control (button, link, field) has the focus. Use 'false' when Enter has another meaning in the content. Escape is controlled by `escapeClose`. */
    enterClose?: boolean;
    /** Closes the modal with Escape, the standard way to dismiss a dialog. Use 'false' only for flows that need an explicit choice; pair with `outzoneClose` 'false'. */
    escapeClose?: boolean;
    /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
    closeLabel?: string;
    /** Title shown in the header. Use a short noun phrase; it also names the dialog for assistive technology. */
    heading?: string;
    /** Accessible name of the dialog. Use only when there is no `heading`; pair with a short sentence. */
    label?: string;
    /** Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it. */
    dtOutzone?: string;
    /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
    dtButtonClose?: string;
    /** Emitted when the modal opens or closes. Use to sync external state; avoid duplicate handlers. */
    uaiModalChanged: EventEmitter<{
        modalStatus: 'opened' | 'closed';
    }>;
    /** Opens the modal when closed and closes it when open. Use for imperative control; pair with uaiModalChanged. */
    toggle(): Promise<void>;
    /** Whether something is slotted into `footer`. The footer wrapper stays hidden while it is empty. */
    hasFooter: boolean;
    protected openChanged(): void;
    protected sizeChanged(): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private dialogEl?;
    private registered;
    private register;
    private unregister;
    private bringToTop;
    private isTop;
    private warnSize;
    private setOpen;
    private syncNativeDialog;
    private panelWidth;
    private hasFooterInLightDom;
    private onFooterSlotChange;
    private onCancel;
    private onNativeClose;
    private onKeydown;
    private onOutzoneClick;
    render(): HTMLElement;
}
