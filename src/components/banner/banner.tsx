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
  @Prop() fixed = false;
  @Prop() icon?: string = null;
  @Prop() bannerAlign?: BannerAlign = null;
  @Prop() variant?: BannerVariant = null;
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
      <Host
        class={{
          banner: true,
          'banner--hide': !this.visible,
        }}
      >
        <div
          class={{
            banner__holder: true,
            [`banner__holder--${this.bannerAlign}`]: this.bannerAlign != null,
            [`banner__holder--${this.variant}`]: this.variant !== null,
          }}
        >
          <div
            class={{
              banner__content: true,
            }}
          >
            {this.icon && <bds-icon theme="outline" size="large" name={this.icon}></bds-icon>}
            <slot></slot>
          </div>
          {!this.fixed && (
            <div class="banner__action" onClick={this.close}>
              <bds-icon name="close"></bds-icon>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
