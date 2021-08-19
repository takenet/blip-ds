import { ScrollDirection, Display } from './tabs-interface';
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

  @Prop({ mutable: true }) overflowLeft = false;

  @Element() el!: HTMLElement;

  componentWillLoad() {
    this.createGroup();
    const [group] = this.tabGroup;
    this.selectGroup(group);
  }

  @Listen('bdsSelect')
  onSelectedTab(event: CustomEvent) {
    const group = this.tabGroup.find((group) => group.header.name === event.detail.name);
    this.selectGroup(group);
    this.preventPartialTab(group);
  }

  private preventPartialTab(group: TabGroup) {
    const tab = document.getElementsByName(group.header.name);

    // this.buttonsChildElement[0].offsetLeft;
    // this.buttonsChildElement.forEach((button) => {
    //   button['offsetLeft'] > tab[0].offsetLeft && button['offsetLeft'] < tab[0].offsetLeft + tab[0].clientWidth;
    // });

    if (
      this.buttonsChildElement[1]['offsetLeft'] > tab[0].offsetLeft &&
      this.buttonsChildElement[1]['offsetLeft'] < tab[0].offsetLeft + tab[0].clientWidth
    ) {
      console.log(tab[0].offsetLeft);
    }
  }

  createGroup() {
    this.tabsHeader = Array.from(this.el.querySelectorAll('bds-tab')) as BdsTabData[];
    this.tabsContent = Array.from(document.querySelectorAll('bds-tab-panel')) as BdsTabData[];
    this.buttonsChildElement = document.getElementsByClassName('bds-tabs-header-button') as HTMLCollection;

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

  tabsHeaderChildElement: HTMLElement;
  leftButtonChildElement: HTMLElement;
  rightButtonChildElement: HTMLElement;

  readonly SCROLL_SIZE = 3;
  readonly SCROLL_BEHAVIOR = 'smooth';

  @Event() scrollButtonClick: EventEmitter<ScrollDirection>;

  componentDidLoad() {
    this.getChildElements();
    this.attachEvents();
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
        ? (options.left = this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth)
        : (options.left = this.tabsHeaderChildElement.scrollLeft - this.tabsHeaderChildElement.clientWidth);

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
      this.updateButtonsVisibility(this.tabsHeaderChildElement.scrollWidth > this.tabsHeaderChildElement.clientWidth);
  }

  private handleHeaderResize = () => {
    if (this.tabsHeaderChildElement.offsetWidth < this.tabsHeaderChildElement.scrollWidth) {
      this.updateButtonsVisibility(true);
    } else {
      this.updateButtonsVisibility(false);
    }
  };

  private initializeButtons = () => {
    this.setLeftButtonVisibility(false);
    this.setRightButtonVisibility(true);
  };

  private updateButtonsVisibility = (isScrollable: boolean) => {
    this.setLeftButtonVisibility(isScrollable);
    this.setRightButtonVisibility(isScrollable);
  };

  private handleScrollButtonClick = (direction: ScrollDirection) => {
    this.scrollButtonClick.emit(direction);
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
