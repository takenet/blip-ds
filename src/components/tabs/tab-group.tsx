import { Component, h, Host, Element, State, Prop, EventEmitter, Event } from '@stencil/core';
import { Itens } from './tab-group-interface';

@Component({
  tag: 'bds-tab-group',
  styleUrl: 'tab-group.scss',
  shadow: true,
})
export class BdsTabGroup {
  private tabItensElement?: HTMLCollectionOf<HTMLBdsTabItemElement> = null;
  private tabItensSlideElement?: NodeListOf<HTMLElement> = null;
  private headerElement?: HTMLElement;
  private headerSlideElement?: HTMLElement;
  private isSlide?: number;

  @Element() private element: HTMLElement;

  @State() internalItens: Itens[];

  @State() isSlideTabs?: boolean = false;

  @State() alignTab?: 'left' | 'scrolling' | 'right' = 'left';

  @State() tabRefSlide?: number = 0;

  @State() positionLeft?: number = 0;

  @Prop() contentScrollable?: boolean = true;

  @Prop() align: 'left' | 'center' | 'right' = 'center';

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonPrev is the data-test to button prev.
   */
  @Prop() dtButtonPrev?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonNext is the data-test to button next.
   */
  @Prop() dtButtonNext?: string = null;

  /**
   * bdsTabChange. Event to return value when Tabs is change.
   */
  @Event() bdsTabChange?: EventEmitter;
  /**
   * bdsTabDisabled. Event to return value when Tabs disable is change.
   */
  @Event() bdsTabDisabled?: EventEmitter;

  componentWillRender() {
    this.tabItensElement = this.element.getElementsByTagName('bds-tab-item') as HTMLCollectionOf<HTMLBdsTabItemElement>;
    this.setnumberElement();
    this.setFirstActive();
    this.setInternalItens(Array.from(this.tabItensElement));
    this.getEventsDisable(Array.from(this.tabItensElement));
  }

  componentDidLoad() {
    this.tabItensSlideElement = this.element.shadowRoot.querySelectorAll(
      '.tab_group__header__itens__item',
    ) as NodeListOf<HTMLElement>;
  }

  connectedCallback() {
    this.isSlide = window.setInterval(() => {
      this.isSlideTabs = this.checkSlideTabs();
    }, 100);
  }

  private getEventsDisable = (ItensElement): void => {
    ItensElement.forEach((element) => {
      element.addEventListener(
        'tabDisabled',
        () => {
          this.setInternalItens(Array.from(this.tabItensElement));
        },
        false,
      );
    });
  };

  disconnectedCallback() {
    window.clearInterval(this.isSlide);
  }

  private checkSlideTabs = (): boolean => {
    if (this.headerElement || this.headerSlideElement) {
      if (this.headerSlideElement?.offsetWidth > this.headerElement?.offsetWidth) {
        return true;
      }
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
        badge: item.badge,
        ...(item.disable !== undefined && { disable: item.disable }),
        ...(item.error !== undefined && { error: item.error }),
        ...(item.headerStyle !== undefined && { headerStyle: item.headerStyle }),
        ...(item.contentStyle !== undefined && { contentStyle: item.contentStyle }),
        ...(item.icon !== undefined && { icon: item.icon }),
        ...(item.iconPosition !== undefined && { iconPosition: item.iconPosition }),
        ...(item.iconTheme !== undefined && { iconTheme: item.iconTheme }),
        ...(item.badgeShape !== undefined && { badgeShape: item.badgeShape }),
        ...(item.badgeColor !== undefined && { badgeColor: item.badgeColor }),
        ...(item.badgeIcon !== undefined && { badgeIcon: item.badgeIcon }),
        ...(item.badgeAnimation !== undefined && { badgeAnimation: item.badgeAnimation }),
        ...(item.badgeNumber !== undefined && { badgeNumber: item.badgeNumber }),
        ...(item.badgePosition !== undefined && { badgePosition: item.badgePosition }),
        ...(item.dataTest !== undefined && { dataTest: item.dataTest }),
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

  private handleDisabled = (id) => {
    this.bdsTabDisabled.emit(this.tabItensElement[id]);
  };

  private nextSlide = () => {
    const minLeft = this.headerElement?.offsetWidth - this.headerSlideElement?.offsetWidth;
    const calcNumber = this.headerSlideElement?.offsetWidth / this.headerElement?.offsetWidth;
    const numberClicks = parseInt(calcNumber.toString());
    const newPosition = this.positionLeft - this.headerElement?.offsetWidth;

    this.positionLeft = newPosition < minLeft ? minLeft : newPosition;
    this.alignTab = newPosition < minLeft ? 'right' : 'scrolling';

    this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide + 1 : numberClicks;
  };

  private prevSlide = () => {
    const calcNumber = this.headerSlideElement?.offsetWidth / this.headerElement?.offsetWidth;
    const numberClicks = parseInt(calcNumber.toString());
    const newPosition = this.positionLeft + this.headerElement?.offsetWidth;

    this.positionLeft = newPosition > 0 ? 0 : newPosition;
    this.alignTab = newPosition > 0 ? 'left' : 'scrolling';

    this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide - 1 : numberClicks;
  };

  private handleKeyDown(event, item) {
    if (event.key == 'Enter') {
      item.disable ? this.handleDisabled(item.numberElement) : this.handleClick(item.numberElement);
    }
    if (event.key == 'ArrowRight') {
      this.tabItensSlideElement[item.numberElement + 1].focus();
    }
    if (event.key == 'ArrowLeft') {
      this.tabItensSlideElement[item.numberElement - 1].focus();
    }
  }

  private parseInlineStyle(styleString: string): { [key: string]: string } {
    if (!styleString) return {};
    
    return styleString
      .split(';')
      .filter(style => style.trim())
      .reduce((acc, style) => {
        const [property, value] = style.split(':').map(s => s.trim());
        if (property && value) {
          // Convert kebab-case to camelCase for CSS properties
          const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          acc[camelProperty] = value;
        }
        return acc;
      }, {});
  }

  private renderIcon = (Icon, Theme, disable, error) => {
    return (
      <bds-icon
        class={{ 
          tab_group__header__itens__item__typo__disable: disable,
          tab_group__header__itens__item__typo__error: error 
        }}
        size="x-small"
        name={Icon}
        theme={Theme}
      ></bds-icon>
    );
  };

  private renderBadge = (Shape, Color, Icon, Animation, Number) => {
    return (
      <bds-grid justify-content="center">
        <bds-badge color={Color} icon={Icon} number={Number} shape={Shape} animation={Animation}></bds-badge>
      </bds-grid>
    );
  };

  render(): HTMLElement {
    const slidePosition = { left: `${this.positionLeft}px` };
    
    // Find the currently open tab to get its headerStyle and contentStyle
    const openTab = this.internalItens?.find(item => item.open);
    const headerStyle = openTab?.headerStyle ? this.parseInlineStyle(openTab.headerStyle) : {};
    const contentStyle = openTab?.contentStyle ? this.parseInlineStyle(openTab.contentStyle) : {};
    
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
              dataTest={this.dtButtonPrev}
              variant="secondary"
            ></bds-button-icon>
          )}
          <div 
            class={{ tab_group__header: true, tab_group__slide: this.isSlideTabs }} 
            ref={this.refHeaderElement}
            style={headerStyle}
          >
            <div
              class={{
                tab_group__header__itens: true,
                tab_group__slide__itens: this.isSlideTabs,
                [`tab_group__header__itens__${this.align}`]: !this.isSlideTabs,
              }}
              ref={this.refHeaderSlideElement}
              style={slidePosition}
            >
              {this.internalItens &&
                this.internalItens.map((item, index) => {
                  const bold = item.open == true ? 'bold' : 'regular';
                  return (
                    <div
                      class={{
                        tab_group__header__itens__item: true,
                        tab_group__header__itens__item__open: item.open,
                        tab_group__header__itens__item__disable: item.disable,
                      }}
                      key={index}
                      tabindex="0"
                      onClick={() =>
                        item.disable ? this.handleDisabled(item.numberElement) : this.handleClick(item.numberElement)
                      }
                      onKeyDown={(ev) => this.handleKeyDown(ev, item)}
                    >
                      {item.iconPosition === 'left' && item.icon
                        ? this.renderIcon(item.icon, item.iconTheme, item.disable, item.error)
                        : ''}
                      {item.badgePosition === 'left' && item.badge
                        ? this.renderBadge(
                            item.badgeShape,
                            item.badgeColor,
                            item.badgeIcon,
                            item.badgeAnimation,
                            item.badgeNumber,
                          )
                        : ''}
                      <bds-typo
                        class={{ 
                          tab_group__header__itens__item__typo__disable: item.disable,
                          tab_group__header__itens__item__typo__error: item.error 
                        }}
                        variant="fs-16"
                        bold={bold}
                      >
                        {item.label}
                      </bds-typo>
                      {item.iconPosition === 'right' && item.icon
                        ? this.renderIcon(item.icon, item.iconTheme, item.disable, item.error)
                        : ''}
                      {item.badgePosition === 'right' && item.badge
                        ? this.renderBadge(
                            item.badgeShape,
                            item.badgeColor,
                            item.badgeIcon,
                            item.badgeAnimation,
                            item.badgeNumber,
                          )
                        : ''}
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
              dataTest={this.dtButtonNext}
              variant="secondary"
            ></bds-button-icon>
          )}
          <div 
            class={{ tab_group__content: true, tab_group__scrolled: this.contentScrollable }}
            style={contentStyle}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
