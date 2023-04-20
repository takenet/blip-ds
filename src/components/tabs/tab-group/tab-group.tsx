import { Component, h, Host, Element, State, Prop, EventEmitter, Event } from '@stencil/core';
import { Itens } from './tab-group-interface';

@Component({
  tag: 'bds-tab-group',
  styleUrl: 'tab-group.scss',
  shadow: true,
})
export class BdsTabGroup {
  private tabItensElement?: HTMLCollectionOf<HTMLBdsTabItemElement> = null;
  private headerElement?: HTMLElement;
  private headerSlideElement?: HTMLElement;
  private isSlide?: number;

  @Element() private element: HTMLElement;

  @State() internalItens: Itens[];

  @State() isSlideTabs?: boolean = false;

  @State() alignTab?: 'left' | 'scrolling' | 'right' = 'left';

  @State() tabRefSlide?: number = 0;

  @State() positionLeft?: number = 0;

  @Prop() scrollable?: boolean = false;

  /**
   * bdsTabChange. Event to return value when accordion is change.
   */
  @Event() bdsTabChange?: EventEmitter;

  componentWillRender() {
    this.tabItensElement = this.element.getElementsByTagName('bds-tab-item') as HTMLCollectionOf<HTMLBdsTabItemElement>;
    this.setnumberElement();
    this.setFirstActive();
    this.setInternalItens(Array.from(this.tabItensElement));
  }

  connectedCallback() {
    this.isSlide = window.setInterval(() => {
      this.isSlideTabs = this.checkSlideTabs();
    }, 100);
  }

  disconnectedCallback() {
    window.clearInterval(this.isSlide);
  }

  private checkSlideTabs = (): boolean => {
    if (this.headerSlideElement.offsetWidth > this.headerElement.offsetWidth) {
      return true;
    }
  };

  private setFirstActive = () => {
    const hasOpenDefined = Array.from(this.tabItensElement).filter((obj) => obj.open);
    if (!hasOpenDefined.length) {
      this.tabItensElement[0].open = true;
    }
  };

  private setnumberElement = () => {
    for (let i = 0; i < this.tabItensElement.length; i++) {
      this.tabItensElement[i].numberElement = i;
    }
  };

  private setInternalItens = (ItensElement) => {
    const arrayItens = ItensElement.map((item, index) => {
      return {
        label: item.label,
        open: item.open,
        numberElement: index,
      };
    });
    return (this.internalItens = arrayItens);
  };

  private handleClick = (numberItem) => {
    const updateInternalItens = this.internalItens.map((item) => {
      return {
        label: item.label,
        open: false,
        numberElement: item.numberElement,
      };
    });
    this.internalItens = updateInternalItens;
    for (let i = 0; i < this.tabItensElement.length; i++) {
      if (this.tabItensElement[i].numberElement != numberItem) {
        this.tabItensElement[i].open = false;
      } else {
        this.tabItensElement[i].open = true;
        this.bdsTabChange.emit(this.tabItensElement[i]);
      }
    }
  };

  private refHeaderElement = (el: HTMLElement): void => {
    this.headerElement = el;
  };

  private refHeaderSlideElement = (el: HTMLElement): void => {
    this.headerSlideElement = el;
  };

  private nextSlide = () => {
    const minLeft = this.headerElement.offsetWidth - this.headerSlideElement.offsetWidth;
    const calcNumber = this.headerSlideElement.offsetWidth / this.headerElement.offsetWidth;
    const numberClicks = parseInt(calcNumber.toString());
    const newPosition = this.positionLeft - this.headerElement.offsetWidth;

    this.positionLeft = newPosition < minLeft ? minLeft : newPosition;
    this.alignTab = newPosition < minLeft ? 'right' : 'scrolling';

    this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide + 1 : numberClicks;
  };

  private prevSlide = () => {
    const calcNumber = this.headerSlideElement.offsetWidth / this.headerElement.offsetWidth;
    const numberClicks = parseInt(calcNumber.toString());
    const newPosition = this.positionLeft + this.headerElement.offsetWidth;

    this.positionLeft = newPosition > 0 ? 0 : newPosition;
    this.alignTab = newPosition > 0 ? 'left' : 'scrolling';

    this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide - 1 : numberClicks;
  };

  render(): HTMLElement {
    const slidePosition = { left: `${this.positionLeft}px` };
    return (
      <Host>
        <div class={{ tab_group: true }}>
          {this.isSlideTabs && this.alignTab != 'left' && (
            <bds-button-icon
              class="tab_group__slide-button"
              icon="arrow-left"
              size="short"
              id="bds-tabs-button-left"
              onClick={() => this.prevSlide()}
              variant="secondary"
            ></bds-button-icon>
          )}
          <div class={{ tab_group__header: true, tab_group__slide: this.isSlideTabs }} ref={this.refHeaderElement}>
            <div
              class={{ tab_group__header__itens: true, tab_group__slide__itens: this.isSlideTabs }}
              ref={this.refHeaderSlideElement}
              style={slidePosition}
            >
              {this.internalItens &&
                this.internalItens.map((item, index) => {
                  const bold = item.open == true ? 'bold' : 'regular';
                  return (
                    <div
                      class={{ tab_group__header__itens__item: true, tab_group__header__itens__item__open: item.open }}
                      key={index}
                      tabindex="0"
                      onClick={() => this.handleClick(item.numberElement)}
                    >
                      <bds-typo variant="fs-16" bold={bold}>
                        {item.label}
                      </bds-typo>
                    </div>
                  );
                })}
            </div>
          </div>
          {this.isSlideTabs && this.alignTab != 'right' && (
            <bds-button-icon
              class="tab_group__slide-button"
              icon="arrow-right"
              size="short"
              id="bds-tabs-button-right"
              onClick={() => this.nextSlide()}
              variant="secondary"
            ></bds-button-icon>
          )}
          <div class="tab_group__content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
