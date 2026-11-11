import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiModalSize = 'fixed' | 'dynamic';

const SIZES: readonly UaiModalSize[] = ['fixed', 'dynamic'];

// Controls that use Enter themselves: pressing Enter on them must never close the modal.
const ENTER_CONTROLS = new Set(['a', 'button', 'input', 'select', 'summary', 'textarea']);
const ENTER_ROLES = new Set(['button', 'link', 'menuitem', 'option', 'switch', 'tab', 'checkbox', 'radio']);

const usesEnter = (event: KeyboardEvent): boolean => {
  const path = typeof event.composedPath === 'function' ? event.composedPath() : [event.target];
  return path.some((node) => {
    const element = node as HTMLElement;
    if (!element || typeof element.tagName !== 'string') return false;
    return (
      ENTER_CONTROLS.has(element.tagName.toLowerCase()) ||
      ENTER_ROLES.has(element.getAttribute?.('role') || '') ||
      element.isContentEditable === true
    );
  });
};

// Open modals, in the order they opened. Only the last one (the top) reacts to the keyboard, so a confirmation
// stacked over a form closes alone. The document scroll stays locked while at least one modal is open.
const openModals: object[] = [];
let scrollLocks = 0;
let previousOverflow = '';

const lockScroll = (): void => {
  if (scrollLocks++ === 0) {
    previousOverflow = document.body.style.getPropertyValue('overflow');
    document.body.style.setProperty('overflow', 'hidden');
  }
};

const unlockScroll = (): void => {
  if (scrollLocks > 0 && --scrollLocks === 0) {
    if (previousOverflow) document.body.style.setProperty('overflow', previousOverflow);
    else document.body.style.removeProperty('overflow');
  }
};

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
@Component({
  tag: 'uai-modal',
  styleUrl: 'uai-modal.scss',
  shadow: true,
})
export class UaiModal {
  @Element() el!: HTMLElement;

  /** Opens or closes the modal. Use for declarative control; pair with uaiModalChanged. Avoid toggling it on every render. */
  @Prop({ mutable: true, reflect: true }) open?: boolean = false;

  /** Shows the close button when 'true'. Use for dismissible dialogs; avoid hiding it when no other action closes the modal. */
  @Prop({ mutable: true, reflect: true }) closeButton?: boolean = true;

  /** Panel size. 'fixed' keeps a standard width and height; 'dynamic' grows with the content. Use 'dynamic' for variable content. */
  @Prop({ mutable: true, reflect: true }) size?: UaiModalSize = 'fixed';

  /** Panel width in rem, e.g. `30` for 30rem. In `fixed` it is the width; in `dynamic` it is the maximum width. Use for narrower or wider dialogs; avoid values wider than the screen, the panel never exceeds it. Defaults to 41. */
  @Prop() width?: number;

  /** Closes the modal when the backdrop is clicked. Use 'false' for flows that need an explicit choice. */
  @Prop() outzoneClose?: boolean = true;

  /** Closes the modal with Enter when no control (button, link, field) has the focus. Use 'false' when Enter has another meaning in the content. Escape is controlled by `escapeClose`. */
  @Prop() enterClose?: boolean = true;

  /** Closes the modal with Escape, the standard way to dismiss a dialog. Use 'false' only for flows that need an explicit choice; pair with `outzoneClose` 'false'. */
  @Prop() escapeClose?: boolean = true;

  /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
  @Prop() closeLabel?: string = 'Fechar';

  /** Title shown in the header. Use a short noun phrase; it also names the dialog for assistive technology. */
  @Prop() heading?: string;

  /** Accessible name of the dialog. Use only when there is no `heading`; pair with a short sentence. */
  @Prop() label?: string;

  /** Test selector on the backdrop. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dtOutzone?: string = null;

  /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dtButtonClose?: string = null;

  /** Emitted when the modal opens or closes. Use to sync external state; avoid duplicate handlers. */
  @Event({ bubbles: true, composed: true }) uaiModalChanged!: EventEmitter<{ modalStatus: 'opened' | 'closed' }>;

  /** Opens the modal when closed and closes it when open. Use for imperative control; pair with uaiModalChanged. */
  @Method()
  async toggle(): Promise<void> {
    this.setOpen(!this.open);
  }

  /** Whether something is slotted into `footer`. The footer wrapper stays hidden while it is empty. */
  @State() hasFooter = false;

  @Watch('open')
  protected openChanged(): void {
    if (this.open) this.register();
    else this.unregister();
  }

  @Watch('size')
  protected sizeChanged(): void {
    this.warnSize();
  }

  connectedCallback(): void {
    if (this.open) this.register();
  }

  componentWillLoad(): void {
    this.warnSize();
    this.hasFooter = this.hasFooterInLightDom();
  }

  componentDidRender(): void {
    this.syncNativeDialog();
  }

  disconnectedCallback(): void {
    this.unregister();
  }

  private dialogEl?: HTMLDialogElement;
  private registered = false;

  private register(): void {
    if (this.registered) return;
    this.registered = true;
    openModals.push(this);
    lockScroll();
    document.addEventListener('keydown', this.onKeydown, false);
  }

  private unregister(): void {
    if (!this.registered) return;
    this.registered = false;
    const index = openModals.indexOf(this);
    if (index >= 0) openModals.splice(index, 1);
    unlockScroll();
    document.removeEventListener('keydown', this.onKeydown, false);
  }

  // The browser stacks modal dialogs in the order of showModal(), which can differ from the order the components were
  // registered in (siblings open on load render in any order). Follow the browser so Escape (native `cancel`) and
  // Enter (our listener) always target the same modal.
  private bringToTop(): void {
    const index = openModals.indexOf(this);
    if (index < 0) return;
    openModals.splice(index, 1);
    openModals.push(this);
  }

  private isTop(): boolean {
    return openModals[openModals.length - 1] === this;
  }

  private warnSize(): void {
    if (!SIZES.includes(this.size)) warnLegacyValue('uai-modal', 'size', this.size, 'fixed');
  }

  private setOpen(next: boolean): void {
    this.open = next;
    this.uaiModalChanged.emit({ modalStatus: next ? 'opened' : 'closed' });
  }

  // The native <dialog> in modal mode puts the panel in the top layer, moves the focus into it, keeps Tab inside it,
  // makes everything behind inert and gives the focus back to the previous element on close.
  private syncNativeDialog(): void {
    const dialog = this.dialogEl;
    if (!dialog || typeof dialog.showModal !== 'function') return;
    if (this.open && !dialog.open) {
      dialog.showModal();
      this.bringToTop();
    } else if (!this.open && dialog.open) dialog.close();
  }

  private panelWidth(): number | undefined {
    const width = Number(this.width);
    if (this.width == null || !Number.isFinite(width) || width <= 0) return undefined;
    return width;
  }

  private hasFooterInLightDom(): boolean {
    return Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'footer');
  }

  // Runs when the content of the footer slot changes, so a footer added or removed while the modal is open
  // (a conditional footer in React, for example) shows up or goes away.
  private onFooterSlotChange = (event: Event): void => {
    const slot = event.target as HTMLSlotElement;
    this.hasFooter =
      typeof slot.assignedElements === 'function' ? slot.assignedElements().length > 0 : this.hasFooterInLightDom();
  };

  // Escape arrives as the native `cancel` event of the dialog, once per dialog and only on the top one.
  private onCancel = (event: Event): void => {
    event.preventDefault();
    if (this.escapeClose) this.setOpen(false);
  };

  // The browser can close the dialog without a cancelable `cancel` (Escape without a prior user gesture, for example).
  // Keep `open` in sync so the state never says "open" for a dialog that is already closed.
  private onNativeClose = (): void => {
    if (this.open) this.setOpen(false);
  };

  // Enter closes only when it is not being used by a control, so it never closes the modal while someone
  // activates a button or types in a field, and a keyboard click cannot reopen it through toggle().
  private onKeydown = (event: KeyboardEvent): void => {
    if (event.defaultPrevented || !this.enterClose || event.key !== 'Enter' || !this.isTop()) return;
    if (!usesEnter(event)) this.setOpen(false);
  };

  private onOutzoneClick = (): void => {
    if (this.outzoneClose === true) this.setOpen(false);
  };

  render(): HTMLElement {
    const size = SIZES.includes(this.size) ? this.size : 'fixed';
    const width = this.panelWidth();

    return (
      <Host>
        <dialog
          ref={(el) => (this.dialogEl = el as HTMLDialogElement)}
          class={{
            modal__dialog: true,
            'modal__dialog--open': this.open,
            [`modal__dialog--${size}`]: true,
          }}
          part="dialog"
          aria-label={this.heading ? undefined : this.label}
          aria-labelledby={this.heading ? 'modal-title' : undefined}
          onCancel={this.onCancel}
          onClose={this.onNativeClose}
        >
          <div class="outzone" onClick={this.onOutzoneClick} data-test={this.dtOutzone}></div>
          <div
            class={{ modal: true, [`modal--${size}`]: true }}
            part="modal"
            style={width ? { '--modal-width': `${width}rem` } : undefined}
          >
            {(this.heading || this.closeButton) && (
              <div class="modal__header" part="header">
                {this.heading && (
                  <uai-typo
                    id="modal-title"
                    class="modal__title"
                    part="title"
                    tag="h2"
                    variant="title-md"
                    bold="semibold"
                    margin={false}
                  >
                    {this.heading}
                  </uai-typo>
                )}
                {this.closeButton && (
                  <button
                    type="button"
                    class="modal__close"
                    part="close"
                    aria-label={this.closeLabel}
                    data-test={this.dtButtonClose}
                    onClick={() => this.setOpen(false)}
                  >
                    <uai-icon name="close" size="medium" aria-hidden="true"></uai-icon>
                  </button>
                )}
              </div>
            )}
            <div class="modal__body" part="body">
              <slot></slot>
            </div>
            <div class={{ modal__footer: true, 'modal__footer--empty': !this.hasFooter }} part="footer">
              <slot name="footer" onSlotchange={this.onFooterSlotChange}></slot>
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
