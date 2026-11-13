import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { warnDeprecated, warnLegacyValue } from '../../utils/deprecation';
import { UaiOverlay, UaiOverlayAlign, UaiOverlayCloseReason, UaiOverlaySide } from '../../utils/uai-overlay';

export type UaiDropdownPosition = 'auto' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type UaiDropdownActiveMode = 'click' | 'hover';

interface Placement {
  side?: UaiOverlaySide;
  align?: UaiOverlayAlign;
}

// `left` aligns the panel to the start of the activator and `right` to its end, as in bds-dropdown.
// The `*-center` values of bds-dropdown keep their side and let the alignment follow the room available.
const PLACEMENTS: Record<string, Placement> = {
  auto: {},
  'top-left': { side: 'top', align: 'start' },
  'top-right': { side: 'top', align: 'end' },
  'bottom-left': { side: 'bottom', align: 'start' },
  'bottom-right': { side: 'bottom', align: 'end' },
  'top-center': { side: 'top' },
  'bottom-center': { side: 'bottom' },
};

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
@Component({
  tag: 'uai-dropdown',
  styleUrl: 'uai-dropdown.scss',
  shadow: true,
})
export class UaiDropdown {
  @Element() el!: HTMLElement;

  /** Opens or closes the panel. Use for declarative control; pair with uaiToggle. Avoid toggling it on every render. */
  @Prop({ mutable: true, reflect: true }) open?: boolean = false;

  /**
   * Where the panel opens: 'auto' picks the side and alignment with the room available; the others fix the side
   * (top or bottom) and the alignment with the activator (left aligns to its start, right to its end). The panel
   * still flips or moves when it would leave the screen. Use 'auto' unless the layout needs a fixed side.
   */
  @Prop() position?: UaiDropdownPosition = 'auto';

  /**
   * How the activator opens the panel. Only 'click' is supported; 'hover' is kept for compatibility and behaves as
   * 'click'.
   * @deprecated The panel opens on click only.
   */
  @Prop() activeMode?: UaiDropdownActiveMode = 'click';

  /** Panel width in rem, e.g. `24` for 24rem. Use for narrower or wider panels; the panel never exceeds the screen. Defaults to 21. */
  @Prop() width?: number;

  /** Accessible name of the panel. Use a short noun phrase when the header has no visible title. */
  @Prop() label?: string;

  /** Test selector on the panel. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  /** Emitted when the panel opens or closes, with `value` true when it opened. Use to sync external state. */
  @Event({ bubbles: true, composed: true }) uaiToggle!: EventEmitter<{ value: boolean }>;

  /** Opens the panel when closed and closes it when open. Use for imperative control; pair with uaiToggle. */
  @Method()
  async toggle(): Promise<void> {
    this.open = !this.open;
  }

  /** Opens the panel. Use when opening from code, for example after an async load. */
  @Method()
  async setOpen(): Promise<void> {
    this.open = true;
  }

  /** Closes the panel. Use to close it from an action inside the panel, such as Save. */
  @Method()
  async setClose(): Promise<void> {
    this.open = false;
  }

  /** Whether something is slotted into `header` and `footer`. The wrappers stay hidden while empty. */
  @State() hasHeader = false;
  @State() hasFooter = false;

  private overlay?: UaiOverlay;
  private activatorEl?: HTMLElement;
  private panelEl?: HTMLElement;

  @Watch('open')
  protected openChanged(open: boolean): void {
    this.uaiToggle.emit({ value: open });
  }

  @Watch('position')
  protected positionChanged(): void {
    this.overlay?.setPlacement(this.placement());
  }

  componentWillLoad(): void {
    if (this.activeMode === 'hover') {
      warnDeprecated('uai-dropdown', 'activeMode', 'The panel opens on click; hover is not supported.');
    }
    this.hasHeader = this.hasSlotted('header');
    this.hasFooter = this.hasSlotted('footer');
  }

  componentDidLoad(): void {
    this.createOverlay();
    // The first render happens before the overlay exists, so a dropdown that starts open is opened here, without
    // taking the focus away from the page.
    this.syncOverlay(false);
  }

  // Moving the element in the DOM (a keyed list in React, for example) disconnects and reconnects it: the overlay is
  // destroyed on disconnect, so it is created again here.
  connectedCallback(): void {
    if (this.overlay || !this.activatorEl || !this.panelEl) return;
    this.createOverlay();
    this.syncOverlay(false);
  }

  componentDidRender(): void {
    this.syncOverlay();
    this.syncActivatorAria();
  }

  disconnectedCallback(): void {
    this.overlay?.destroy();
    this.overlay = undefined;
  }

  private createOverlay(): void {
    if (!this.activatorEl || !this.panelEl) return;
    this.overlay = new UaiOverlay({
      trigger: this.activatorEl,
      panel: this.panelEl,
      onClose: this.onOverlayClose,
      ...this.placement(),
    });
  }

  private placement(): Placement {
    const placement = PLACEMENTS[this.position];
    if (placement) return placement;
    warnLegacyValue('uai-dropdown', 'position', this.position, 'auto');
    return {};
  }

  private hasSlotted(name: string): boolean {
    return Array.from(this.el.children).some((child) => child.getAttribute('slot') === name);
  }

  private activator(): HTMLElement | undefined {
    return Array.from(this.el.children).find((child) => child.getAttribute('slot') === 'activator') as
      HTMLElement | undefined;
  }

  // Opens and closes the floating panel to match `open`. Closing from the outside (Escape, a click elsewhere, the
  // activator leaving the screen) comes back through onOverlayClose.
  // `focus` moves the focus into the panel so Tab starts inside it; it is off when the dropdown starts open.
  private syncOverlay(focus = true): void {
    const overlay = this.overlay;
    if (!overlay) return;
    if (this.open && !overlay.isOpen) {
      overlay.open();
      if (focus) this.panelEl?.focus({ preventScroll: true });
    } else if (!this.open && overlay.isOpen) {
      overlay.close('api');
    }
    if (this.open) overlay.update();
  }

  private syncActivatorAria(): void {
    const activator = this.activator();
    if (!activator) return;
    activator.setAttribute('aria-haspopup', 'dialog');
    activator.setAttribute('aria-expanded', this.open ? 'true' : 'false');
  }

  private onOverlayClose = (reason: UaiOverlayCloseReason): void => {
    if (this.open) this.open = false;
    if (reason === 'escape') this.focusActivator();
  };

  // A uai-button keeps its native button in the Shadow DOM and exposes setFocus(); other activators take the focus
  // themselves.
  private focusActivator(): void {
    const activator = this.activator() as (HTMLElement & { setFocus?: () => Promise<void> }) | undefined;
    if (!activator) return;
    if (typeof activator.setFocus === 'function') void activator.setFocus();
    else activator.focus({ preventScroll: true });
  }

  // Tabbing out of the dropdown (to anything that is not the activator or the panel) closes it.
  private onFocusout = (event: FocusEvent): void => {
    const next = event.relatedTarget as Node | null;
    if (this.open && next && !this.el.contains(next)) this.open = false;
  };

  private onSlotChange = (name: 'header' | 'footer') => (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    const filled =
      typeof slot.assignedElements === 'function' ? slot.assignedElements().length > 0 : this.hasSlotted(name);
    if (name === 'header') this.hasHeader = filled;
    else this.hasFooter = filled;
  };

  render(): HTMLElement {
    const width = Number(this.width);
    const panelWidth = this.width != null && Number.isFinite(width) && width > 0 ? width : undefined;

    return (
      <Host onFocusout={this.onFocusout}>
        <div class="dropdown__activator" ref={(el) => (this.activatorEl = el)} onClick={() => this.toggle()}>
          <slot name="activator"></slot>
        </div>
        <div
          class="dropdown__panel"
          part="panel"
          role="dialog"
          tabindex="-1"
          aria-label={this.label}
          data-test={this.dataTest}
          style={panelWidth ? { '--dropdown-width': `${panelWidth}rem` } : undefined}
          ref={(el) => (this.panelEl = el)}
        >
          <div class={{ dropdown__header: true, 'dropdown__header--empty': !this.hasHeader }} part="header">
            <slot name="header" onSlotchange={this.onSlotChange('header')}></slot>
          </div>
          <div class="dropdown__body" part="body">
            <slot></slot>
          </div>
          <div class={{ dropdown__footer: true, 'dropdown__footer--empty': !this.hasFooter }} part="footer">
            <slot name="footer" onSlotchange={this.onSlotChange('footer')}></slot>
          </div>
        </div>
      </Host>
    );
  }
}
