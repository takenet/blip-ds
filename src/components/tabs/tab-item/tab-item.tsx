import { Component, h, Host, Prop, Method } from '@stencil/core';

@Component({
  tag: 'bds-tab-item',
  styleUrl: 'tab-item.scss',
  shadow: true,
})
export class BdsTabItem {
  /**
   * Use to set number of tabItem.
   */
  @Prop({ mutable: true, reflect: true }) public numberElement?: number = null;
  /**
   * The text to be shown at the Tab item.
   */
  @Prop() label?: string = null;
  /**
   * Used to open/close the Tab item.
   */
  @Prop({ mutable: true, reflect: true }) public open?: boolean = false;

  @Method()
  async reciveNumber(number) {
    this.numberElement = number;
  }
  render(): HTMLElement {
    return (
      <Host class={{ [`is-open`]: this.open }}>
        <div class={{ tab_item: true }}>
          <div class={{ tab_item_content: true, [`tab_item_content--open`]: this.open }}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
