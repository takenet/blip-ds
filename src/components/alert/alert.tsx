import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';

export type AlertSize = 'wide' | 'standard';

@Component({
  tag: 'bds-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class BdsAlert implements ComponentInterface {
  /**
   * Used to open/close the alert
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public open?: boolean = false;

  /**
   * Size. Entered as one of the size. Can be one of:
   * 'wide', 'standard';
   */
  @Prop() size?: AlertSize = 'standard';

  /**
   * Can be used outside to open/close the alert
   */
  @Method()
  async toggle() {
    this.open = !this.open;
  }

  render() {
    return (
      <div
        class={{
          alert__dialog: true,
          'alert__dialog--open': this.open,
        }}
      >
        <div class={{alert: true, [`alert-${this.size}`]: true}}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
