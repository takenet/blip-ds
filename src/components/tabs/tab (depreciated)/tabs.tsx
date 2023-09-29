/* eslint-disable no-console */
import { ScrollDirection, Display, Overflow } from './tabs-interface';
import { Component, Element, h, Host, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'bds-tabs',
  styleUrl: 'tabs.scss',
})
export class Tabs {
  tabsHeaderChildElement: HTMLElement;
  leftButtonChildElement: HTMLElement;
  rightButtonChildElement: HTMLElement;

  readonly SCROLL_BEHAVIOR = 'smooth';

  @Element() el!: HTMLElement;

  @Event() scrollButtonClick: EventEmitter<Overflow>;

  @Event() bdsTabInit: EventEmitter;

  @Prop() align: 'left' | 'center' | 'right' = 'center';

  @Listen('scrollButtonClick')
  onScrollButtonClick(event: CustomEvent<Overflow>) {
    event.preventDefault();

    const options: ScrollToOptions = {
      behavior: this.SCROLL_BEHAVIOR,
      top: 0,
      left: event.detail.distance,
    };
    options.left ??= this.getDistance(options, event);
    this.tabsHeaderChildElement.scrollTo(options);
  }

  @Listen('bdsTabChange', { target: 'body' })
  onSelectedTab(event: CustomEvent) {
    this.handleButtonOverlay(event.detail);
  }

  componentDidLoad() {
    this.getChildElements();
    this.attachEvents();
    this.setLeftButtonVisibility(false);
    this.setRightButtonVisibility(true);
    this.handleActiveTab();
  }

  private handleActiveTab() {
    const tabs = Array.from(this.tabsHeaderChildElement.getElementsByTagName('bds-tab'));
    const activeTab = tabs.find((tab) => tab.active);
    if (activeTab) {
      this.bdsTabInit.emit(activeTab.group);
    } else {
      const [firstTab] = tabs;
      this.bdsTabInit.emit(firstTab.group);
    }
  }

  private getChildElements() {
    this.tabsHeaderChildElement = this.el.querySelector('.bds-tabs__header');
    this.leftButtonChildElement = this.el.querySelector('#bds-tabs-button-left');
    this.rightButtonChildElement = this.el.querySelector('#bds-tabs-button-right');
  }

  private attachEvents() {
    window.onresize = this.handleHeaderResize;
    this.tabsHeaderChildElement.onscroll = () =>
      this.updateButtonsVisibility(this.tabsHeaderChildElement.scrollWidth > this.tabsHeaderChildElement.clientWidth);
  }

  private handleHeaderResize = () => {
    if (this.tabsHeaderChildElement.offsetWidth < this.tabsHeaderChildElement.scrollWidth) {
      this.updateButtonsVisibility(true);
    } else {
      this.updateButtonsVisibility(false);
    }
  };

  private updateButtonsVisibility = (isScrollable: boolean) => {
    this.setLeftButtonVisibility(isScrollable);
    this.setRightButtonVisibility(isScrollable);
  };

  private handleScrollButtonClick = (direction: ScrollDirection) => {
    this.scrollButtonClick.emit({ direction });
  };

  private setRightButtonVisibility(isScrollable: boolean) {
    if (
      isScrollable &&
      this.tabsHeaderChildElement.scrollWidth >
        Math.ceil(this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth)
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

  private handleButtonOverlay(group: string) {
    const tab = Array.from(this.tabsHeaderChildElement.getElementsByTagName('bds-tab')).find((header) => {
      return header.group == group;
    });

    const buttons = [this.leftButtonChildElement, this.rightButtonChildElement];
    buttons.forEach((button) => {
      if (this.isButtonOverlappingTab(button, tab)) {
        const distance = this.getAdjutScrollDistance(button, tab);
        this.scrollButtonClick.emit({ distance: distance });
      }
    });
  }

  private isButtonOverlappingTab(button: HTMLElement, tab: HTMLElement) {
    const tabRect = tab.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    return this.elementIsOverlapping(buttonRect, tabRect);
  }

  private elementIsOverlapping(element: DOMRect, overlaidElement: DOMRect): boolean {
    const elementStart = element.x;
    const elementEnd = element.x + element.width;

    const comparatorStart = overlaidElement.x;
    const comparatorEnd = overlaidElement.x + overlaidElement.width;

    return (
      (elementStart >= comparatorStart && elementStart <= comparatorEnd) ||
      (elementEnd >= comparatorStart && elementEnd <= comparatorEnd)
    );
  }

  private getAdjutScrollDistance(button: HTMLElement, tab: HTMLElement) {
    const direction = button.id == 'bds-tabs-button-left' ? ScrollDirection.LEFT : ScrollDirection.RIGHT;

    const distanceDifference = tab.clientWidth + parseInt(getComputedStyle(tab).marginRight) - button.offsetWidth;

    if (direction == ScrollDirection.RIGHT) {
      return tab.parentElement.scrollLeft + distanceDifference;
    } else {
      return tab.parentElement.scrollLeft - distanceDifference;
    }
  }

  private getDistance(options: ScrollToOptions, event: CustomEvent<Overflow>): number {
    return event.detail.direction == ScrollDirection.RIGHT
      ? (options.left = this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth)
      : (options.left = this.tabsHeaderChildElement.scrollLeft - this.tabsHeaderChildElement.clientWidth);
  }

  render(): HTMLElement {
    return (
      <Host
        class={{
          'bds-tabs': true,
          [`bds-tabs--${this.align}`]: true,
        }}
      >
        <div class="bds-tabs__header-button-container">
          <bds-button-icon
            class="bds-tabs__header-button"
            icon="arrow-left"
            size="short"
            id="bds-tabs-button-left"
            onClick={() => this.handleScrollButtonClick(ScrollDirection.LEFT)}
            variant="secondary"
          ></bds-button-icon>
        </div>

        <div class="bds-tabs__header">
          <slot />
        </div>

        <div class="bds-tabs__header-button-container">
          <bds-button-icon
            class="bds-tabs__header-button"
            icon="arrow-right"
            size="short"
            id="bds-tabs-button-right"
            onClick={() => this.handleScrollButtonClick(ScrollDirection.RIGHT)}
            variant="secondary"
          ></bds-button-icon>
        </div>
      </Host>
    );
  }
}
