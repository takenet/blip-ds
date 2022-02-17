import {
  Component,
  Host,
  h,
  ComponentInterface,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
  Element,
} from '@stencil/core';

export type BannerVariant = 'system' | 'warning' | 'info' | 'error';
export type BannerAlign = 'left' | 'right' | 'center';
export type ButtonClose = 'true' | 'false';
export type Link = 'true' | 'false';
export type Context = 'inside' | 'outside';
@Component({
  tag: 'bds-banner',
  styleUrl: 'banner.scss',
  shadow: true,
})
export class Banner implements ComponentInterface {
  @Element() el: HTMLBdsBannerElement;
  @State() visible = true;
  /**
   * Set the banner aligment, it can be one of: 'center', 'right' or 'left'.
   */
  @Prop() bannerAlign?: BannerAlign = 'center';
  /**
   * Set if show up the close button.
   */
  @Prop() buttonClose?: ButtonClose = 'false';
  /**
   * Set if the banner is external or internal.
   */
  @Prop() context?: Context = 'outside';
  /**
   * Set the banner varient, it can be 'system' or 'warning'.
   */
  @Prop() variant?: BannerVariant = 'system';
  /**
   * Emitted when the banner is closed.
   */
  @Event() bdsBannerClose!: EventEmitter;
  @Method()
  async toggle() {
    this.visible = !this.visible;
  }

  private _buttonClickHandler = () => {
    this.bdsBannerClose.emit();
    this.visible = false;
  };

  render() {
    return (
      <Host class={{ banner: true, 'banner--hide': !this.visible }}>
        <div
          class={{
            banner__holder: true,
            [`banner__holder--align--${this.bannerAlign}`]: true,
            [`banner__holder--${this.variant}`]: true,
            [`banner__holder--context--${this.context}`]: true,
          }}
        >
          <div
            class={{
              banner__content: true,
            }}
          >
            {this.variant === 'warning' && (
              <bds-icon class="icon_left" theme="outline" size="medium" name="warning"></bds-icon>
            )}
            {this.variant === 'system' && (
              <bds-icon class="icon_left" theme="outline" size="medium" name="info"></bds-icon>
            )}
            {this.variant === 'info' && (
              <bds-icon class="icon_left" theme="outline" size="medium" name="message-ballon"></bds-icon>
            )}
            {this.variant === 'error' && (
              <bds-icon class="icon_left" theme="outline" size="medium" name="error"></bds-icon>
            )}
            <div class="slot">
              <slot></slot>
            </div>
          </div>
          <div
            class={{
              banner__action: true,
            }}
          >
            {this.buttonClose === 'true' && (
              <div class="close" onClick={() => this._buttonClickHandler()}>
                <bds-button-icon icon="close" size="short" variant="secondary"></bds-button-icon>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
