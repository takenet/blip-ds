/* eslint-disable no-console */
import { Component, ComponentInterface, Element, h, Host, Listen, Prop } from '@stencil/core';
import { BdsTabData, ScrollDirection, TabGroup } from './tabs-interface';

@Component({
  tag: 'bds-tabs',
  styleUrl: 'tabs.scss',
})
export class Tabs implements ComponentInterface {
  tabsHeader: BdsTabData[];
  tabsContent: BdsTabData[];
  tabGroup: TabGroup[];

  @Prop({ mutable: true }) overflowLeft = false;

  @Element() el!: HTMLElement;
  tabsHeaderChildElement: HTMLElement;
  leftButtonChildElement: HTMLElement;
  rightButtonChildElement: HTMLElement;

  componentWillLoad() {
    this.createGroup();
    const [group] = this.tabGroup;
    this.selectGroup(group);
  }

  componentDidLoad() {
    this.tabsHeaderChildElement = this.el.querySelector('.bds-tabs-header');
    this.leftButtonChildElement = this.el.querySelector('#bds-tabs-button-left');
    this.rightButtonChildElement = this.el.querySelector('#bds-tabs-button-right');

    this.toggleButtonVisibility();
  }

  @Listen('bdsSelect')
  onSelectedTab(event: CustomEvent) {
    const group = this.tabGroup.find((group) => group.header.name === event.detail.name);
    this.selectGroup(group);
  }

  private toggleButtonVisibility = () => {
    this.leftButtonChildElement.style.display = this.tabsHeaderChildElement.scrollLeft > 0 ? 'block' : 'none';

    this.rightButtonChildElement.style.display =
      this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.offsetWidth <
      this.tabsHeaderChildElement.scrollWidth
        ? 'block'
        : 'none';
  };

  private handleScrollButtonClick = (direction: ScrollDirection) => {
    this.tabsHeaderChildElement.scrollLeft =
      direction == ScrollDirection.RIGHT
        ? this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.offsetWidth
        : this.tabsHeaderChildElement.scrollLeft - this.tabsHeaderChildElement.offsetWidth;

    this.toggleButtonVisibility();
  };

  createGroup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.tabsHeader = Array.from(this.el.querySelectorAll('bds-tab-header')) as any[];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.tabsContent = Array.from(this.el.querySelectorAll('bds-tab-content')) as any[];

    this.tabGroup = this.tabsHeader.map((header) => {
      const content = this.tabsContent.find((content) => content.name === header.name);

      return {
        header: header,
        content: content,
      };
    });
  }

  async selectGroup(group: TabGroup) {
    await this.resetActiveGroup();

    group.header.active = true;
    group.content.active = true;
  }

  async resetActiveGroup() {
    for (const group of this.tabGroup) {
      group.content.active = false;
      group.header.active = false;
    }
  }

  render(): HTMLElement {
    return (
      <Host>
        <div class="bds-tabs-header-container">
          <div class="bds-tabs-header-button-container">
            <bds-button
              // class={{ [`bds-tabs-header-button--visible`]: this.overflowLeft }}
              class="bds-tabs-header-button"
              icon="arrow-left"
              id="bds-tabs-button-left"
              onClick={() => this.handleScrollButtonClick(ScrollDirection.LEFT)}
              variant="secondary"
            ></bds-button>
          </div>
          <div class="bds-tabs-header">
            <slot name="header" />
          </div>
          <div class="bds-tabs-header-button-container">
            <bds-button
              class="bds-tabs-header-button"
              icon="arrow-right"
              id="bds-tabs-button-right"
              onClick={() => this.handleScrollButtonClick(ScrollDirection.RIGHT)}
              variant="secondary"
            ></bds-button>
          </div>
        </div>

        <div class="bds-tabs-content">
          <slot name="content" />
        </div>
      </Host>
    );
  }
}
