/* eslint-disable no-console */
import { Component, ComponentInterface, Element, h, Host, Listen, Prop } from '@stencil/core';
import { ScrollDirection } from '../tabs-interface';

@Component({
  tag: 'bds-tab-bar',
  styleUrl: 'tab-bar.scss',
})
export class TabBar implements ComponentInterface {
  @Element() el!: HTMLElement;

  tabsHeaderChildElement: HTMLElement;
  leftButtonChildElement: HTMLElement;
  rightButtonChildElement: HTMLElement;

  componentDidLoad() {
    this.tabsHeaderChildElement = this.el.querySelector('.bds-tabs-header');
    this.leftButtonChildElement = this.el.querySelector('#bds-tabs-button-left');
    this.rightButtonChildElement = this.el.querySelector('#bds-tabs-button-right');

    this.toggleButtonVisibility();
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

  render(): HTMLElement {
    return (
      <div class="bds-tabs-header-container">
        <div class="bds-tabs-header-button-container">
          <bds-button
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
    );
  }
}
