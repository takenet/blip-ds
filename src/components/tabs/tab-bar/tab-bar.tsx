/* eslint-disable no-console */
import { Component, ComponentInterface, Element, Event, EventEmitter, h, Listen } from '@stencil/core';
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

  readonly SCROLL_SIZE = 3;
  readonly SCROLL_BEHAVIOR = 'smooth';

  @Event() scrollButtonClick: EventEmitter<ScrollDirection>;

  componentDidLoad() {
    this.getChildElements();
    this.attachEvents();

    this.setDefaultHeaderWidth();
    this.initializeButtons();
  }

  @Listen('scrollButtonClick')
  onScrollButtonClick(event: CustomEvent<ScrollDirection>) {
    event.preventDefault();
    const options: ScrollToOptions = {
      behavior: this.SCROLL_BEHAVIOR,
      top: 0,
    };

    options.left =
      event.detail == ScrollDirection.RIGHT
        ? (options.left = this.tabsHeaderChildElement.scrollLeft + this.defaultHeaderWidth)
        : (options.left = this.tabsHeaderChildElement.scrollLeft - this.defaultHeaderWidth);

    this.tabsHeaderChildElement.scrollTo(options);
  }

  private getChildElements() {
    this.tabsHeaderChildElement = this.el.querySelector('.bds-tabs-header');
    this.leftButtonChildElement = this.el.querySelector('#bds-tabs-button-left');
    this.rightButtonChildElement = this.el.querySelector('#bds-tabs-button-right');
  }

  private attachEvents() {
    window.onresize = this.handleHeaderResize;
    this.tabsHeaderChildElement.onscroll = () =>
      this.updateButtonVisibility(this.tabsHeaderChildElement.scrollWidth > this.tabsHeaderChildElement.clientWidth);
  }

  private handleHeaderResize = () => {
    this.setDefaultHeaderWidth();
    if (this.tabsHeaderChildElement.offsetWidth < this.tabsHeaderChildElement.scrollWidth) {
      this.updateButtonVisibility(true);
    } else {
      this.updateButtonVisibility(false);
    }
  };

  private updateButtonVisibility = (isScrollable: boolean) => {
    this.setLeftButtonVisibility(isScrollable);
    this.setRightButtonVisibility(isScrollable);
  };

  private initializeButtons = () => {
    this.setLeftButtonVisibility(false);
    this.setRightButtonVisibility(true);
  };

  private handleScrollButtonClick = (direction: ScrollDirection) => {
    this.scrollButtonClick.emit(direction);
  };

  private setDefaultHeaderWidth() {
    const childWidth = this.tabsHeaderChildElement.scrollWidth / this.tabsHeaderChildElement.childElementCount;
    this.defaultHeaderWidth = childWidth * this.SCROLL_SIZE;
  }

  private setRightButtonVisibility(isScrollable: boolean) {
    const lastChild = this.tabsHeaderChildElement.lastChild as HTMLElement;

    if (
      isScrollable &&
      this.tabsHeaderChildElement.scrollWidth >
        Math.ceil(
          this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth + lastChild.clientWidth
        )
    ) {
      this.rightButtonChildElement.style.display = Display.BLOCK;
    } else {
      this.rightButtonChildElement.style.display = Display.NONE;
    }
  }

  private setLeftButtonVisibility(isScrollable: boolean) {
    this.leftButtonChildElement.style.display =
      this.tabsHeaderChildElement.scrollLeft > 0 && isScrollable ? Display.BLOCK : Display.NONE;
  }

  render(): HTMLElement {
    return (
      <div class="bds-tabs-header-container">
        <div class="bds-tabs-header-button-container">
          <bds-button-icon
            class="bds-tabs-header-button"
            icon="arrow-left"
            size="short"
            id="bds-tabs-button-left"
            onClick={() => this.handleScrollButtonClick(ScrollDirection.LEFT)}
            variant="secondary"
          ></bds-button-icon>
        </div>

        <div class="bds-tabs-header">
          <slot name="header" />
        </div>

        <div class="bds-tabs-header-button-container">
          <bds-button-icon
            class="bds-tabs-header-button"
            icon="arrow-right"
            size="short"
            id="bds-tabs-button-right"
            onClick={() => this.handleScrollButtonClick(ScrollDirection.RIGHT)}
            variant="secondary"
          ></bds-button-icon>
        </div>
      </div>
    );
  }
}
