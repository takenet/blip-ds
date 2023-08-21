import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';

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
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Prop used only for doc. Change the css. DO NOT USE!
   */
  @Prop() notDoc?: boolean = true;

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
          [`alert__dialog--for-doc--${this.notDoc}`]: true,
        }}
      >
        <div class="alert" data-test={this.dataTest}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
