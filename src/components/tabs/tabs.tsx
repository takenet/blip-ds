/* eslint-disable no-console */
import { ScrollDirection, Display, Overflow } from './tabs-interface';
import { Component, ComponentInterface, Element, h, Host, Event, EventEmitter, Listen, Prop } from '@stencil/core';
import { BdsTabData, TabGroup } from './tabs-interface';

@Component({
  tag: 'bds-tabs',
  styleUrl: 'tabs.scss',
})
export class Tabs implements ComponentInterface {
  tabsHeader: BdsTabData[];
  tabsContent: BdsTabData[];
  tabGroup: TabGroup[];

  buttonsChildElement: HTMLCollection;
  tabsHeaderChildElement: HTMLElement;
  leftButtonChildElement: HTMLElement;
  rightButtonChildElement: HTMLElement;

  readonly SCROLL_BEHAVIOR = 'smooth';

  @Element() el!: HTMLElement;

  @Event() scrollButtonClick: EventEmitter<Overflow>;

  @Prop() align: 'left' | 'center' | 'right' = 'center';

  componentWillLoad() {
    this.createGroup();
    const [group] = this.tabGroup;
    this.selectGroup(group);
  }

  componentDidLoad() {
    this.getChildElements();
    this.attachEvents();
    this.setLeftButtonVisibility(false);
    this.setRightButtonVisibility(true);
  }

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

  @Listen('bdsSelect')
  onSelectedTab(event: CustomEvent) {
    console.log(event.detail);
    const group = this.tabGroup.find((group) => group.header.group === event.detail.group);
    this.selectGroup(group);
    this.handleButtonOverlay(group);
  }

  private handleButtonOverlay(group: TabGroup) {
    const tab = Array.from(this.tabsHeaderChildElement.getElementsByTagName('bds-tab')).find((header) => {
      return header.group == group.header.group;
    });

    for (let index = 0; index < this.buttonsChildElement.length; index++) {
      if (this.isButtonOverlayingTab(index, tab)) {
        const { direction, distance } = this.getScrollDistance(tab, index);
        this.scrollButtonClick.emit({ direction, distance });
      }
    }
  }

  private isButtonOverlayingTab(buttonIndex: number, tab: HTMLElement) {
    const buttonCenter = this.getButtonOffsetCenter(buttonIndex);
    return (
      buttonCenter + tab.parentElement.scrollLeft > tab.offsetLeft &&
      buttonCenter + tab.parentElement.scrollLeft < tab.offsetLeft + tab.clientWidth
    );
  }

  private getButtonOffsetCenter(buttonIndex: number) {
    return this.buttonsChildElement[buttonIndex]['offsetLeft'] + this.buttonsChildElement[buttonIndex].clientWidth / 2;
  }

  private getScrollDistance(tab: HTMLElement, buttonIndex: number): Overflow {
    const direction = buttonIndex == 0 ? ScrollDirection.LEFT : ScrollDirection.RIGHT;
    let distance = 0;

    if (direction == ScrollDirection.RIGHT) {
      distance = tab.clientWidth - (this.buttonsChildElement[buttonIndex]['offsetLeft'] - tab.offsetLeft);
      return { direction, distance };
    }

    distance = tab.parentElement.scrollLeft - (tab.clientWidth - this.buttonsChildElement[buttonIndex]['offsetLeft']);
    return { direction, distance };
  }

  private getDistance(options: ScrollToOptions, event: CustomEvent<Overflow>): number {
    return event.detail.direction == ScrollDirection.RIGHT
      ? (options.left = this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth)
      : (options.left = this.tabsHeaderChildElement.scrollLeft - this.tabsHeaderChildElement.clientWidth);
  }

  createGroup() {
    this.tabsHeader = Array.from(this.el.querySelectorAll('bds-tab')) as BdsTabData[];
    this.tabsContent = Array.from(document.querySelectorAll('bds-tab-panel')) as BdsTabData[];
    this.buttonsChildElement = document.getElementsByTagName('bds-button-icon') as HTMLCollection;

    this.tabGroup = this.tabsHeader.map((header) => {
      console.log('group', header.group);
      let content;
      try {
        content = this.tabsContent.find((content) => content.group === header.group);
        if (!content) throw new Error(`Missing TabPanel with key: ${header.group}`);
      } catch (error) {
        console.warn(error);
      }
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

  private getChildElements() {
    this.tabsHeaderChildElement = this.el.querySelector('.bds-tabs-header');
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

  render(): HTMLElement {
    return (
      <Host>
        <div
          class={{
            'bds-tabs-header-container': true,
            [`bds-tabs-header-container--${this.align}`]: true,
          }}
        >
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
            <slot />
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
      </Host>
    );
  }
}
