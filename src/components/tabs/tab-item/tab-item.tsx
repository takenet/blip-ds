import { Component, h, Host, Prop, Method, Watch, Event, EventEmitter } from '@stencil/core';

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
   * Prop for disable the especific tab.
   */
  @Prop({ mutable: true, reflect: true }) disable?: boolean = false;
  /**
   * Used to open/close the Tab item.
   */
  @Prop({ mutable: true, reflect: true }) public open?: boolean = false;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  @Method()
  async reciveNumber(number) {
    this.numberElement = number;
  }
  @Event() tabDisabled: EventEmitter;

  @Watch('disable')
  disableChanged(): void {
    this.tabDisabled.emit({ item: this.numberElement, disable: this.disable });
  }

  render(): HTMLElement {
    return (
      <Host class={{ [`is-open`]: this.disable === true ? false : this.open }}>
        <div class={{ tab_item: true }} data-test={this.dataTest}>
          <div class={{ tab_item_content: true, [`tab_item_content--open`]: this.open }}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
