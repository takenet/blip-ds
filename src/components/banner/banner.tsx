import { Component, Host, h, ComponentInterface, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'bds-banner',
  styleUrl: 'banner.scss',
  shadow: true,
})
export class Banner implements ComponentInterface {
  @State() visible = true;
  @Prop() fixed = false;
  /**
   * Specifies the background color to use. The default background color is $color-primary-main.
   */
  @Prop() background: string = undefined;

  @Method()
  async toggle() {
    this.visible = !this.visible;
  }

  private close = (): void => {
    this.visible = false;
  };

  render() {
    return (
      <Host
        class={{
          banner: true,
          'banner--hide': !this.visible,
          'banner__background--main': !this.background,
        }}
        style={{ background: this.background }}
      >
        <div class="banner__content">
          <slot></slot>
        </div>
        {!this.fixed && (
          <div class="banner__action" onClick={this.close}>
            <bds-icon name="close"></bds-icon>
          </div>
        )}
      </Host>
    );
  }
}
