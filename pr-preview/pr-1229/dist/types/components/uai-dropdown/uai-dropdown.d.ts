import { EventEmitter } from '../../stencil-public-runtime';
export type UaiDropdownPosition = 'auto' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
export type UaiDropdownActiveMode = 'click' | 'hover';
/**
 * Floating panel opened by an activator, with an optional fixed header, a scrollable body and an optional fixed footer.
 * Use for filters, pickers and short forms next to a trigger; pair with uai-button as the activator and
 * UaiThemeProvider; avoid it for a plain list of choices (use uai-select) or for blocking tasks (use uai-modal).
 *
 * @slot activator - The element that opens the panel, usually a uai-button. Use a native button or uai-button so it takes the focus.
 * @slot header - Optional fixed header, such as a title and a search field. Hidden while empty.
 * @slot - Panel body. It scrolls when the content is taller than the room available.
 * @slot footer - Optional fixed footer with the actions. Hidden while empty.
 * @part panel - The floating panel.
 * @part header - The header area.
 * @part body - The scrollable body.
 * @part footer - The footer area.
 */
export declare class UaiDropdown {
    el: HTMLElement;
    /** Opens or closes the panel. Use for declarative control; pair with uaiToggle. Avoid toggling it on every render. */
    open?: boolean;
    /**
     * Where the panel opens: 'auto' picks the side and alignment with the room available; the others fix the side
     * (top or bottom) and the alignment with the activator (left aligns to its start, right to its end). The panel
     * still flips or moves when it would leave the screen. 'top-center' and 'bottom-center' come from bds-dropdown: they
     * fix the side and leave the alignment automatic. Use 'auto' unless the layout needs a fixed side.
     */
    position?: UaiDropdownPosition;
    /**
     * How the activator opens the panel. Only 'click' is supported; 'hover' is kept for compatibility and behaves as
     * 'click'.
     * @deprecated The panel opens on click only.
     */
    activeMode?: UaiDropdownActiveMode;
    /** Panel width in rem, e.g. `24` for 24rem. Use for narrower or wider panels; the panel never exceeds the screen. Defaults to 21. */
    width?: number;
    /**
     * Accessible name of the panel. Without it, the panel is named by the first heading slotted into `header`
     * (h1 to h6, role="heading" or uai-typo with an h tag). Use a short noun phrase when the header has no title.
     */
    label?: string;
    /** Test selector on the panel. Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    /** Emitted when the panel opens or closes, with `value` true when it opened. Use to sync external state. */
    uaiToggle: EventEmitter<{
        value: boolean;
    }>;
    /** Opens the panel when closed and closes it when open. Use for imperative control; pair with uaiToggle. */
    toggle(): Promise<void>;
    /** Opens the panel. Use when opening from code, for example after an async load. */
    setOpen(): Promise<void>;
    /** Closes the panel. Use to close it from an action inside the panel, such as Save. */
    setClose(): Promise<void>;
    /** Whether something is slotted into `header` and `footer`. The wrappers stay hidden while empty. */
    hasHeader: boolean;
    hasFooter: boolean;
    private overlay?;
    private activatorEl?;
    private panelEl?;
    protected openChanged(open: boolean): void;
    protected positionChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    connectedCallback(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private createOverlay;
    private placement;
    private hasSlotted;
    private accessibleName;
    private activator;
    private syncOverlay;
    private syncActivatorAria;
    private onOverlayClose;
    private focusActivator;
    private onFocusout;
    private onSlotChange;
    render(): HTMLElement;
}
