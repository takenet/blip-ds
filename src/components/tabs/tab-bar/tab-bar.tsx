/* eslint-disable no-console */
import { Component, ComponentInterface, Element, h } from '@stencil/core';
import { ScrollDirection, Display } from '../tabs-interface';

@Component({
  tag: 'bds-tab-bar',
  styleUrl: 'tab-bar.scss',
})
export class TabBar implements ComponentInterface {
  @Element() el!: HTMLElement;

  tabsHeaderChildElement: HTMLElement;
  leftButtonChildElement: HTMLElement;
  rightButtonChildElement: HTMLElement;
  defaultHeaderWidth: number;

  componentDidLoad() {
    this.tabsHeaderChildElement = this.el.querySelector('.bds-tabs-header');
    this.leftButtonChildElement = this.el.querySelector('#bds-tabs-button-left');
    this.rightButtonChildElement = this.el.querySelector('#bds-tabs-button-right');
    window.onresize = this.handleHeaderResize;
    this.toggleButtonVisibility(true);
    this.defaultHeaderWidth = this.el.offsetWidth;
  }

  private handleHeaderResize = () => {
    this.defaultHeaderWidth = this.el.offsetWidth;

    if (this.tabsHeaderChildElement.offsetWidth < this.tabsHeaderChildElement.scrollWidth) {
      this.toggleButtonVisibility(true);
    } else {
      this.toggleButtonVisibility(false);
    }
  };

  private toggleButtonVisibility = (isScrollable: boolean) => {
    this.setLeftButtonVisibility(isScrollable);
    this.setRightButtonVisibility(isScrollable);
  };

  private handleScrollButtonClick = (direction: ScrollDirection) => {
    if (direction == ScrollDirection.RIGHT) {
      this.tabsHeaderChildElement.scrollTo(this.tabsHeaderChildElement.scrollLeft + this.defaultHeaderWidth, 0);
    } else {
      this.tabsHeaderChildElement.scrollTo(this.tabsHeaderChildElement.scrollLeft - this.defaultHeaderWidth, 0);
    }

    this.toggleButtonVisibility(true);
  };

  private setRightButtonVisibility(isScrollable: boolean) {
    this.rightButtonChildElement.style.display =
      this.tabsHeaderChildElement.scrollWidth > this.tabsHeaderChildElement.scrollLeft + this.defaultHeaderWidth &&
      isScrollable
        ? Display.BLOCK
        : Display.NONE;
  }

  private setLeftButtonVisibility(isScrollable: boolean) {
    this.leftButtonChildElement.style.display =
      this.tabsHeaderChildElement.scrollLeft > 0 && isScrollable ? Display.BLOCK : Display.NONE;
  }

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
