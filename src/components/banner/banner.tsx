import { Component, Host, h, ComponentInterface, Prop, State, Method, Event, EventEmitter } from '@stencil/core';

export type BannerVariant = 'system' | 'warning';
export type BannerAlign = 'left' | 'right' | 'center';
@Component({
  tag: 'bds-banner',
  styleUrl: 'banner.scss',
  shadow: true,
})
export class Banner implements ComponentInterface {
  @State() visible = true;
  /**
   * Set the banner aligment, it can be one of: 'center', 'right' or 'left'.
   */
  @Prop() bannerAlign?: BannerAlign = 'center';
  /**
   * Set the banner varient, it can be 'system' or 'warning'.
   */
  @Prop() variant?: BannerVariant = 'system';
  /**
   * Emitted when the banner is closed.
   */
  @Event() bdsBannerClose!: EventEmitter;

  /**
   * Pulbic method to close the banner
   */
  @Method()
  async toggle() {
    this.visible = !this.visible;
  }

  private close = (): void => {
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
          }}
        >
          {this.variant !== 'warning' && <div class="space_left"></div>}
          <div
            class={{
              banner__content: true,
            }}
          >
            {this.variant === 'warning' && (
              <bds-icon class="icon_warning" theme="solid" size="large" name="warning"></bds-icon>
            )}
            <slot></slot>
          </div>
          {this.variant !== 'warning' && (
            <div class="banner__action" onClick={this.close}>
              <bds-icon name="close"></bds-icon>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
