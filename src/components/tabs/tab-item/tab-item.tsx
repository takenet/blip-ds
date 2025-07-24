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
   * The icon to be shown at the Tab item.
   */
  @Prop() icon?: string = null;
  /**
   * The position of the icon at the Tab item ('left', 'right').
   */
  @Prop() iconPosition?: string = 'left';
  /**
   * The theme of the icon at the Tab item ('solid', 'outline', 'emoji', 'logos').
   */
  @Prop() iconTheme?: string = 'outline';
  /**
   * The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon').
   */
  @Prop() badge?: boolean = false;
  /**
   * The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon').
   */
  @Prop() badgeShape?: string = 'circle';
  /**
   * The color of the badge to be shown at the Tab item.
   */
  @Prop() badgeColor?: string = 'system';
  /**
   * The icon to be shown inside the badge at the Tab item ('system', 'danger', 'warning', 'success', 'neutral')
   */
  @Prop() badgeIcon?: string = null;
  /**
   * The animation of the badge to be shown at the Tab item.
   */
  @Prop() badgeAnimation?: boolean = false;
  /**
   * The animation of the badge to be shown at the Tab item.
   */
  @Prop() badgePosition?: string = 'left';
  /**
   * The number to be shown inside the badge at the Tab item.
   */
  @Prop() badgeNumber?: number = null;
  /**
   * Prop for disable the especific tab.
   */
  @Prop({ mutable: true, reflect: true }) disable?: boolean = false;
  /**
   * Prop to indicate an error state for the tab.
   */
  @Prop() error?: boolean = false;
  /**
   * Inline styles to be applied to the tab group header element.
   */
  @Prop() headerStyle?: string = null;
  /**
   * Inline styles to be applied to the tab group content element.
   */
  @Prop() contentStyle?: string = null;
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
