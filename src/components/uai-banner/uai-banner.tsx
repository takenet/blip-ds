import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';
import { warnDeprecated, warnLegacyValue } from '../../utils/deprecation';

export type UaiBannerVariant = 'system' | 'warning' | 'info' | 'error' | 'success';
export type UaiBannerAlign = 'left' | 'right' | 'center';
export type UaiBannerButtonClose = 'true' | 'false';
export type UaiBannerContext = 'inside' | 'outside';

const VARIANTS: readonly UaiBannerVariant[] = ['system', 'warning', 'info', 'error', 'success'];
const ICONS: Record<UaiBannerVariant, string> = {
  system: 'message-ballon',
  info: 'info',
  success: 'checkball',
  warning: 'warning',
  error: 'error',
};

/**
 * Notification bar for a system, informational, success, warning or error message.
 * Use for page or section level notices; pair with UaiThemeProvider and a short text; avoid it for transient feedback.
 *
 * @slot - Short message text, preferably one line.
 * @slot link - Optional link or action shown before the close button.
 * @part holder - The banner container.
 * @part icon-box - The box around the variant icon.
 * @part close - The close button.
 */
@Component({
  tag: 'uai-banner',
  styleUrl: 'uai-banner.scss',
  shadow: true,
})
export class UaiBanner {
  @Element() el!: HTMLElement;

  @State() visible = true;

  /** Kept for compatibility; the content always fills the available width. Avoid relying on it for layout. */
  @Prop() bannerAlign?: UaiBannerAlign = 'center';

  /** Shows the close button when 'true'. Use for dismissible notices; pair with uaiBannerClose; avoid it for critical errors. */
  @Prop() buttonClose?: UaiBannerButtonClose = 'false';

  /** Rounds the banner when 'inside' a container. Use 'outside' for a full-width bar; avoid mixing both in one page. */
  @Prop() context?: UaiBannerContext = 'outside';

  /** Semantic variant: system, info, success, warning or error. Use the one that matches the message; avoid color alone to convey meaning. */
  @Prop() variant?: UaiBannerVariant = 'system';

  /** Optional short title shown above the text, without a final period. Use for the reason of the notice; avoid long titles. */
  @Prop() heading?: string = null;

  /** Accessible name of the close button. Use a translated label; pair with buttonClose. Avoid leaving it generic. */
  @Prop() closeLabel?: string = 'Fechar';

  /** Test selector on the close button. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dtButtonClose?: string = null;

  /** Emitted when the banner is closed with the close button. Use to persist the dismissal; avoid duplicate handlers. */
  @Event({ bubbles: true, composed: true }) uaiBannerClose!: EventEmitter<void>;

  /** Toggles the banner visibility. Use for imperative control; pair with uaiBannerClose. Avoid hiding critical errors. */
  @Method()
  async toggle(): Promise<void> {
    this.visible = !this.visible;
  }

  componentWillLoad(): void {
    if (this.bannerAlign !== 'center') {
      warnDeprecated('uai-banner', 'bannerAlign', 'The content always fills the available width.');
    }
  }

  private close = (): void => {
    this.uaiBannerClose.emit();
    this.visible = false;
  };

  render(): HTMLElement {
    const known = VARIANTS.find((candidate) => candidate === this.variant);
    const variant = known || 'system';
    if (!known) warnLegacyValue('uai-banner', 'variant', this.variant, variant);
    const urgent = variant === 'error' || variant === 'warning';

    return (
      <Host class={{ banner: true, 'banner--hide': !this.visible }}>
        <div
          class={{
            banner__holder: true,
            [`banner__holder--${variant}`]: true,
            'banner__holder--inside': this.context === 'inside',
          }}
          part="holder"
          role={urgent ? 'alert' : 'status'}
        >
          <div class="banner__icon-box" part="icon-box" aria-hidden="true">
            <uai-icon class="banner__icon" name={ICONS[variant]} size="medium"></uai-icon>
          </div>
          <div class="banner__text">
            {this.heading && (
              <uai-typo class="banner__title" tag="p" variant="body-base" bold="medium" margin={false}>
                {this.heading}
              </uai-typo>
            )}
            <uai-typo class="banner__message" tag="span" variant="body-base" margin={false}>
              <slot></slot>
            </uai-typo>
          </div>
          <slot name="link"></slot>
          {String(this.buttonClose) === 'true' && (
            <button
              type="button"
              class="banner__close"
              part="close"
              aria-label={this.closeLabel}
              data-test={this.dtButtonClose}
              onClick={this.close}
            >
              <uai-icon name="close" size="medium" aria-hidden="true"></uai-icon>
            </button>
          )}
        </div>
      </Host>
    );
  }
}
