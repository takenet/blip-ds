import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';
import { supportsPopover } from '../../utils/uai-overlay';

export type UaiModalSize = 'fixed' | 'dynamic';

const SIZES: readonly UaiModalSize[] = ['fixed', 'dynamic'];

/**
 * Dialog that blocks the page behind a backdrop to ask for a decision or show focused content.
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

  /** Closes the modal on Enter or Escape. Use 'false' when Enter is used inside the content, such as in forms. */
  @Prop() enterClose?: boolean = true;

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

  @Watch('open')
  protected openChanged(): void {
    this.syncListener();
  }

  componentDidLoad(): void {
    this.syncListener();
  }

  componentDidRender(): void {
    this.syncTopLayer();
  }

  disconnectedCallback(): void {
    document.removeEventListener('keydown', this.onKeydown, false);
  }

  private setOpen(next: boolean): void {
    this.open = next;
    this.uaiModalChanged.emit({ modalStatus: next ? 'opened' : 'closed' });
  }

  private syncListener(): void {
    if (this.open) document.addEventListener('keydown', this.onKeydown, false);
    else document.removeEventListener('keydown', this.onKeydown, false);
  }

  // The dialog opens in the top layer (Popover API) so no ancestor stacking context can cover it.
  private syncTopLayer(): void {
    const dialog = this.el.shadowRoot?.querySelector<HTMLElement>('.modal__dialog');
    if (!dialog || !supportsPopover() || typeof dialog.showPopover !== 'function') return;
    const shown = dialog.matches(':popover-open');
    if (this.open && !shown) dialog.showPopover();
    else if (!this.open && shown) dialog.hidePopover();
  }

  private panelWidth(): number | undefined {
    const width = Number(this.width);
    if (this.width == null || !Number.isFinite(width) || width <= 0) return undefined;
    return width;
  }

  private hasFooter(): boolean {
    return Array.from(this.el.children).some((child) => child.getAttribute('slot') === 'footer');
  }

  private onKeydown = (event: KeyboardEvent): void => {
    if (this.enterClose && (event.key === 'Enter' || event.key === 'Escape')) {
      this.setOpen(false);
    }
  };

  private onOutzoneClick = (): void => {
    if (this.outzoneClose === true) this.setOpen(false);
  };

  render(): HTMLElement {
    const known = SIZES.find((candidate) => candidate === this.size);
    const size = known || 'fixed';
    if (!known) warnLegacyValue('uai-modal', 'size', this.size, size);

    return (
      <Host>
        <div
          class={{
            modal__dialog: true,
            'modal__dialog--open': this.open,
            [`modal__dialog--${size}`]: true,
          }}
          part="dialog"
          popover={supportsPopover() ? 'manual' : undefined}
        >
          <div class="outzone" onClick={this.onOutzoneClick} data-test={this.dtOutzone}></div>
          <div
            class={{ modal: true, [`modal--${size}`]: true }}
            part="modal"
            role="dialog"
            style={this.panelWidth() ? { '--modal-width': `${this.panelWidth()}rem` } : undefined}
            aria-modal="true"
            aria-label={this.heading ? undefined : this.label}
            aria-labelledby={this.heading ? 'modal-title' : undefined}
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
            {this.hasFooter() && (
              <div class="modal__footer" part="footer">
                <slot name="footer"></slot>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
