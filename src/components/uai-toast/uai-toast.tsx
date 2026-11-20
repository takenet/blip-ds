import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';
import {
  UaiToastCloseReason,
  UaiToastOptions,
  UaiToastPosition,
  UaiToastVariant,
  isCreatedContainer,
  isModal,
  isOpenModal,
  toastContainerFor,
} from '../../utils/uai-toast';

const VARIANTS: readonly UaiToastVariant[] = ['system', 'info', 'success', 'warning', 'error'];
const ICONS: Record<UaiToastVariant, string> = {
  system: 'message-ballon',
  info: 'info',
  success: 'checkball',
  warning: 'warning',
  error: 'error',
};
const OPTION_KEYS: ReadonlyArray<keyof UaiToastOptions> = [
  'variant',
  'heading',
  'message',
  'duration',
  'closable',
  'closeLabel',
  'actionLabel',
  'position',
];
// Time of the closing transition (duration/moderate, resolved from the theme), so a toast placed by show() fades out
// before it leaves the page. Reduced motion has no transition.
const closingTime = (element: HTMLElement): number => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return 0;
  const value = getComputedStyle(element).getPropertyValue('--uai-duration-moderate').trim();
  const time = parseFloat(value);
  if (Number.isNaN(time)) return 0;
  return value.endsWith('ms') ? time : time * 1000;
};

/**
 * Short notification that floats over the page, with the result of an action or a system message.
 * Use for transient feedback; pair with UaiToastContainer (or `show()`, which creates it) and a short text; avoid it
 * for messages the user must act on, which belong in a modal or a banner.
 *
 * @slot - Optional rich content shown after `message`, such as text with a link.
 * @part toast - The toast surface.
 * @part icon-box - The box around the variant icon.
 * @part action - The action button.
 * @part close - The close button.
 */
@Component({
  tag: 'uai-toast',
  styleUrl: 'uai-toast.scss',
  shadow: true,
})
export class UaiToast {
  @Element() el!: HTMLElement;

  private timer?: ReturnType<typeof setTimeout>;
  private timerStart = 0;
  private remaining = 0;
  private paused = false;
  private removeOnClose = false;
  private loaded = false;

  /** Semantic variant: system, info, success, warning or error. Use the one that matches the message; avoid color alone to convey meaning. */
  @Prop({ reflect: true }) variant?: UaiToastVariant = 'system';

  /** Optional short title, without a final period. Use for the reason of the notification; avoid long titles. */
  @Prop() heading?: string = null;

  /** Short text, preferably one line. It is plain text (never HTML); for a link, use the default slot. */
  @Prop() message?: string = null;

  /** Whether the toast is shown. Use show() and close() to also place it and emit the events; avoid toggling it in a loop. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Time in milliseconds before the toast closes by itself; 0 keeps it open. The time pauses while the mouse or the focus is on it. */
  @Prop() duration = 0;

  /** Shows the close button. Keep it on unless the toast closes by itself; avoid a toast nobody can dismiss. */
  @Prop() closable = true;

  /** Accessible name of the close button. Use a translated label; avoid leaving it generic. */
  @Prop() closeLabel?: string = 'Fechar';

  /** Text of the optional action button, such as "Desfazer". Clicking it emits uaiToastAction and closes the toast. */
  @Prop() actionLabel?: string = null;

  /** Position used by show() when the toast is not inside a UaiToastContainer. Avoid mixing positions for the same kind of message. */
  @Prop() position?: UaiToastPosition = 'bottom-left';

  /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dtButtonClose?: string = null;

  /** Test selector on the action button. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dtButtonAction?: string = null;

  /** Emitted when the toast opens. UaiToastContainer uses it to stay on top and announce the toast. */
  @Event({ bubbles: true, composed: true }) uaiToastOpen!: EventEmitter<void>;

  /** Emitted when the toast closes, with the reason: close-button, action, timeout, escape or method. */
  @Event({ bubbles: true, composed: true }) uaiToastClose!: EventEmitter<{ reason: UaiToastCloseReason }>;

  /** Emitted when the action button is clicked, before the toast closes. Use to run the action, such as undoing. */
  @Event({ bubbles: true, composed: true }) uaiToastAction!: EventEmitter<void>;

  /**
   * Opens the toast. Outside a UaiToastContainer, it moves the toast into the container of its position (created in the
   * nearest UaiThemeProvider when there is none) and removes it from the page after it closes. Options replace the props
   * of the same name; `removeOnClose` decides whether the toast leaves the page after closing.
   */
  @Method()
  async show(options: UaiToastOptions = {}): Promise<void> {
    for (const key of OPTION_KEYS) {
      if (options[key] !== undefined) (this.el as any)[key] = options[key];
    }
    let removeOnClose = options.removeOnClose;
    const container = this.container();
    // A container show() created in a modal that closed meanwhile (or that left the page) is not used.
    const stale =
      container &&
      isCreatedContainer(container) &&
      (!container.isConnected || (isModal(container.parentElement) && !isOpenModal(container.parentElement)));
    if (!container || stale) {
      removeOnClose = removeOnClose ?? true;
      toastContainerFor(this.position, this.el).appendChild(this.el);
    }
    this.removeOnClose = removeOnClose ?? false;
    this.open = true;
  }

  /** Closes the toast and emits uaiToastClose with reason "method". */
  @Method()
  async close(): Promise<void> {
    this.dismiss('method');
  }

  @Watch('open')
  protected openChanged(open: boolean): void {
    if (open) {
      this.uaiToastOpen.emit();
      this.startTimer(this.duration);
    } else {
      this.clearTimer();
    }
  }

  @Watch('duration')
  protected durationChanged(): void {
    if (this.open) this.startTimer(this.duration);
  }

  componentDidLoad(): void {
    this.loaded = true;
    if (this.open) this.openChanged(true);
  }

  // Moving an open toast (from a closing modal to the page) keeps the time it had left.
  connectedCallback(): void {
    if (!this.loaded || !this.open) return;
    this.paused = false;
    if (this.remaining > 0) this.schedule();
  }

  disconnectedCallback(): void {
    if (this.timer) this.remaining = Math.max(0, this.remaining - (Date.now() - this.timerStart));
    this.clearTimer();
  }

  private container(): HTMLElement | null {
    return this.el.closest('uai-toast-container');
  }

  private dismiss(reason: UaiToastCloseReason): void {
    if (!this.open) return;
    this.open = false;
    this.uaiToastClose.emit({ reason });
    if (this.removeOnClose) {
      this.removeOnClose = false;
      const delay = closingTime(this.el);
      setTimeout(() => {
        if (!this.open) this.el.remove();
      }, delay);
    }
  }

  private startTimer(time: number): void {
    this.clearTimer();
    this.remaining = time > 0 ? time : 0;
    if (!this.remaining || this.paused) return;
    this.schedule();
  }

  private schedule(): void {
    this.clearTimer();
    this.timerStart = Date.now();
    this.timer = setTimeout(() => this.dismiss('timeout'), this.remaining);
  }

  private clearTimer(): void {
    if (this.timer) clearTimeout(this.timer);
    this.timer = undefined;
  }

  // The time stops while the user reads or reaches the toast (WCAG 2.2.1) and resumes with what was left.
  private pause = (): void => {
    if (this.paused) return;
    this.paused = true;
    if (!this.timer) return;
    this.clearTimer();
    this.remaining = Math.max(0, this.remaining - (Date.now() - this.timerStart));
  };

  private resume = (): void => {
    if (!this.paused) return;
    if (this.el.matches(':hover') || this.el.matches(':focus-within')) return;
    this.paused = false;
    if (this.open && this.remaining > 0) this.schedule();
  };

  private handleFocusOut = (event: FocusEvent): void => {
    if (!this.el.contains(event.relatedTarget as Node)) setTimeout(this.resume);
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.closable) {
      // Escape closes only the toast, not a modal it is in.
      event.preventDefault();
      event.stopPropagation();
      this.dismiss('escape');
    }
  };

  private handleAction = (): void => {
    this.uaiToastAction.emit();
    this.dismiss('action');
  };

  render(): HTMLElement {
    const known = VARIANTS.find((candidate) => candidate === this.variant);
    const variant = known || 'system';
    if (!known) warnLegacyValue('uai-toast', 'variant', this.variant, variant);
    const urgent = variant === 'error' || variant === 'warning';
    // Inside a container, the container announces the toast; alone, the toast is its own live region.
    const role = this.container() ? undefined : urgent ? 'alert' : 'status';

    return (
      <Host
        class={{ 'uai-toast--open': this.open }}
        onMouseEnter={this.pause}
        onMouseLeave={this.resume}
        onFocusin={this.pause}
        onFocusout={this.handleFocusOut}
        onKeyDown={this.handleKeyDown}
      >
        <div class={{ toast: true, [`toast--${variant}`]: true }} part="toast" role={role}>
          <div class="toast__icon-box" part="icon-box" aria-hidden="true">
            <uai-icon class="toast__icon" name={ICONS[variant]} size="medium"></uai-icon>
          </div>
          <div class="toast__text">
            {this.heading && (
              <uai-typo class="toast__title" tag="p" variant="body-base" bold="medium" margin={false}>
                {this.heading}
              </uai-typo>
            )}
            <uai-typo class="toast__message" tag="span" variant="body-base" margin={false}>
              {this.message}
              <slot></slot>
            </uai-typo>
          </div>
          {this.actionLabel && (
            <button
              type="button"
              class="toast__action"
              part="action"
              data-test={this.dtButtonAction}
              onClick={this.handleAction}
            >
              {this.actionLabel}
            </button>
          )}
          {this.closable && (
            <button
              type="button"
              class="toast__close"
              part="close"
              aria-label={this.closeLabel}
              data-test={this.dtButtonClose}
              onClick={() => this.dismiss('close-button')}
            >
              <uai-icon name="close" size="medium" aria-hidden="true"></uai-icon>
            </button>
          )}
        </div>
      </Host>
    );
  }
}
