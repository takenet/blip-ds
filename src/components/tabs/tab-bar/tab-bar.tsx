/* eslint-disable no-console */
import { Component, ComponentInterface, Element, h, Listen } from '@stencil/core';
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

  componentDidLoad() {
    this.tabsHeaderChildElement = this.el.querySelector('.bds-tabs-header');
    this.leftButtonChildElement = this.el.querySelector('#bds-tabs-button-left');
    this.rightButtonChildElement = this.el.querySelector('#bds-tabs-button-right');
    window.onresize = this.handleHeaderResize;
    this.toggleButtonVisibility(true);

    console.log({
      scrollLeft: this.tabsHeaderChildElement.scrollLeft,
      offsetWidth: this.tabsHeaderChildElement.offsetWidth,
      scrollWidth: this.tabsHeaderChildElement.scrollWidth,
    });
  }

  private handleHeaderResize = () => {
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
    console.log('antes', {
      scrollLeft: this.tabsHeaderChildElement.scrollLeft,
      offsetWidth: this.tabsHeaderChildElement.offsetWidth,
      scrollWidth: this.tabsHeaderChildElement.scrollWidth,
    });

    if (direction == ScrollDirection.RIGHT) {
      this.tabsHeaderChildElement.scrollLeft =
        this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.offsetWidth;
      console.log('right');
    } else {
      this.tabsHeaderChildElement.scrollLeft =
        this.tabsHeaderChildElement.scrollLeft - this.tabsHeaderChildElement.offsetWidth;
      console.log('left');
    }

    this.toggleButtonVisibility(true);
    console.log('depois', {
      scrollLeft: this.tabsHeaderChildElement.scrollLeft,
      offsetWidth: this.tabsHeaderChildElement.offsetWidth,
      scrollWidth: this.tabsHeaderChildElement.scrollWidth,
    });
  };

  private setRightButtonVisibility(isScrollable: boolean) {
    this.rightButtonChildElement.style.display =
      this.tabsHeaderChildElement.scrollWidth >
        this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.offsetWidth && isScrollable
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
