import { Component, h, Element, State, Watch, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { Itens, arrows, bullets, bulletsPositions, gap } from './carousel-interface';
import { gapChanged, getHighestItem, getItems } from '../../utils/position-element';

@Component({
  tag: 'bds-carousel',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class BdsCarousel {
  private itemsElement?: HTMLCollectionOf<HTMLBdsCarouselItemElement> = null;
  private bulletElement?: HTMLElement = null;
  private bulletElements: HTMLElement[] = [];
  private frame?: HTMLElement;
  private themeProviderArrows?: any;
  private frameRepeater?: HTMLElement;
  private incrementSeconds?: any;

  @Element() element: HTMLElement;

  @State() itemActivated = 1;
  @State() seconds = 0;
  @State() internalItens: Itens[];
  @State() isWhole = 0;
  @State() heightCarousel?: number = 240;
  @State() framePressed?: boolean = false;
  @State() startX?: number;
  @State() endX?: number;
  @State() autoplayState: 'paused' | 'running' = 'running';

  /**
   * Autoplay. Prop to Enable component autoplay.
   */
  @Prop() autoplay?: boolean = false;

  /**
   * AutoplayTimeout. Prop to Choose the Autoplay time in milliseconds, ex: 5000.
   */
  @Prop() autoplayTimeout?: number = 5000;

  /**
   * AutoplayHoverPause. Prop to Enable it if you will have the function to pause autoplay when on hover.
   */
  @Prop() autoplayHoverPause?: boolean = false;

  /**
   * autoHeight. Prop to Enable it if you want the component to adjust its height relative to the active items..
   */
  @Prop() autoHeight?: boolean = false;

  /**
   * Bullet. Prop to Enable component bullets navigation.
   */
  @Prop() bullets?: boolean | bullets = 'outside';
  /**
   * Bullet. Prop to Enable component bullets navigation.
   */
  @Prop() bulletsPosition?: bulletsPositions = 'center';

  /**
   * InfiniteLoop. Prop to Enable if the component will have infinite loop.
   */
  @Prop() infiniteLoop?: boolean = false;

  /**
   * arrows. Prop to select type of arrows in component. Are available "outside" | "inside" | "none".
   */
  @Prop() arrows?: arrows = 'outside';

  /**
   * SlidePerPage. Prop to Choose the number of slide per page you will have available in the carousel.
   */
  @Prop() slidePerPage?: number = 1;

  /**
   * Gap. Prop to Select the gap distance between items.
   */
  @Prop() gap?: gap = 'none';

  /**
   * Grab. Prop to enable function of grab in carousel.
   */
  @Prop() grab?: boolean = true;

  /**
   * Loading state. Indicates if the component is in a loading state.
   */
  @Prop({ mutable: true, reflect: true }) loading?: boolean = false;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtSlideContent is the data-test to slide action.
   */
  @Prop() dtSlideContent?: string = null;

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

  @State() secondsLimit: number = this.autoplayTimeout / 1000;

  /**
   * Emitted when active frame value.
   */
  @Event() bdsChangeCarousel!: EventEmitter;

  componentWillLoad() {
    this.itemsElement = this.element.getElementsByTagName(
      'bds-carousel-item',
    ) as HTMLCollectionOf<HTMLBdsCarouselItemElement>;
    this.setInternalItens(Array.from(this.itemsElement));
    if (this.bullets == true) {
      this.bullets = 'outside';
    }
    if (this.bullets == false) {
      this.bullets = 'none';
    }
  }

  componentDidRender() {
    if (!this.loading) {
      if (this.gap != 'none') {
        this.frame.style.width = `calc(100% + ${gapChanged(this.gap)}px)`;
        this.frame.style.marginLeft = `-${gapChanged(this.gap) / 2}px`;
      }
      for (let i = 0; i < this.itemsElement.length; i++) {
        const widthFrame = this.frame.offsetWidth >= 1920 ? 1920 : this.frame.offsetWidth;
        this.itemsElement[i].style.width = `${widthFrame / this.slidePerPage}px`;
        this.itemsElement[i].style.padding = `0 ${gapChanged(this.gap) / 2}px`;
      }
      if (this.autoHeight) this.updateHeight(Array.from(this.itemsElement));
    }
    if (this.arrows == 'inside') {
      const firstItemActived = (this.itemActivated - 1) * (this.itemsElement.length / this.internalItens.length) + 1;
      this.themeProviderArrows.theme =
        this.slidePerPage <= 1
          ? this.itemsElement[this.itemActivated - 1].theme
          : this.itemsElement[Math.round(firstItemActived)].theme;
    }
  }

  componentDidLoad() {
    this.startCountSeconds();
  }

  @Watch('itemActivated')
  protected itemActivatedChanged(): void {
    const currentItemSelected: Itens = this.internalItens.find((item) => item.id === this.itemActivated);
    const slideFrame = !this.frame ? 0 : this.frame.offsetWidth * (this.itemActivated - 1);
    if (this.frameRepeater) {
      if (currentItemSelected.isWhole) {
        const isWholeWidth = this.itemsElement[1].offsetWidth * (this.slidePerPage - this.isWhole);
        this.frameRepeater.style.right = `${slideFrame - isWholeWidth}px`;
      } else {
        this.frameRepeater.style.right = `${slideFrame}px`;
      }
    }
    this.bdsChangeCarousel.emit({ value: currentItemSelected });
  }

  @Watch('autoplayTimeout')
  protected autoplayTimeoutChanged(): void {
    this.secondsLimit = this.autoplayTimeout / 1000;
  }

  @Watch('seconds')
  protected secondsChanged(): void {
    if (this.seconds >= this.secondsLimit) {
      this.nextSlide();
      this.seconds = 0;
    }
  }

  @Watch('isWhole')
  protected isWholeChanged(): void {
    if (this.internalItens != undefined) {
      if (this.isWhole > 0) {
        const newItem = {
          id: this.internalItens?.length + 1,
          label: `Frame - ${this.internalItens?.length + 1}`,
          isWhole: true,
        };
        this.internalItens = [...this.internalItens, newItem];
      }
    }
  }

  private setInternalItens = (ItensElement) => {
    const floor = Math.floor(ItensElement.length / this.slidePerPage);
    const numberOfColumns = ItensElement.length / this.slidePerPage;
    const newItens = getItems(numberOfColumns);
    this.internalItens = newItens;
    this.isWhole = ItensElement.length - this.slidePerPage * floor;
  };

  private startCountSeconds = () => {
    if (this.autoplay) {
      this.incrementSeconds = setInterval(() => {
        this.seconds += 0.1;
      }, 100);
    }
  };

  private updateHeight = (itemsElement) => {
    const elementActive = itemsElement[this.itemActivated * this.slidePerPage - this.slidePerPage];
    let heightFrame = 240;
    if (this.slidePerPage > 1) {
      const getVisibleItens =
        this.isWhole > 0 && this.itemActivated == this.internalItens.length
          ? itemsElement.slice(
              this.internalItens.length - this.internalItens.length - this.slidePerPage,
              this.itemActivated * this.slidePerPage,
            )
          : itemsElement.slice(
              this.itemActivated * this.slidePerPage - this.slidePerPage,
              this.itemActivated * this.slidePerPage,
            );

      heightFrame = getHighestItem(getVisibleItens)[0];
    } else {
      heightFrame = elementActive.offsetHeight;
    }
    this.frame.style.height = `${heightFrame}px`;
  };

  @Method()
  async buildCarousel(): Promise<void> {
    this.itemsElement = this.element.getElementsByTagName(
      'bds-carousel-item',
    ) as HTMLCollectionOf<HTMLBdsCarouselItemElement>;
    this.loading = true;
    setTimeout(
      () => (this.setInternalItens(Array.from(this.itemsElement)), (this.loading = false), this.setActivated(1)),
      1000,
    );
  }

  @Method()
  async nextSlide(): Promise<void> {
    if (this.itemActivated == this.internalItens.length) {
      if (this.infiniteLoop || this.autoplay) {
        this.itemActivated = 1;
      } else {
        this.itemActivated = this.itemActivated;
      }
    } else {
      this.itemActivated = this.itemActivated + 1;
    }
    clearInterval(this.incrementSeconds);
    this.seconds = 0;
    this.startCountSeconds();
  }

  @Method()
  async prevSlide(): Promise<void> {
    if (this.itemActivated == 1) {
      if (this.infiniteLoop || this.autoplay) {
        this.itemActivated = this.internalItens.length;
      } else {
        this.itemActivated = this.itemActivated;
      }
    } else {
      this.itemActivated = this.itemActivated - 1;
    }
    clearInterval(this.incrementSeconds);
    this.seconds = 0;
    this.startCountSeconds();
  }

  @Method()
  async setActivated(item: number): Promise<void> {
    this.itemActivated = item;
    clearInterval(this.incrementSeconds);
    this.seconds = 0;
    this.startCountSeconds();
    this.autoplayState = 'running';
  }

  @Method()
  async pauseAutoplay(): Promise<void> {
    clearInterval(this.incrementSeconds);
    this.autoplayState = 'paused';
  }

  @Method()
  async runAutoplay(): Promise<void> {
    this.startCountSeconds();
    this.autoplayState = 'running';
  }

  private refFrame = (el: HTMLElement): void => {
    this.frame = el;
  };

  private refThemeProviderArrows = (el: HTMLBdsThemeProviderElement | HTMLElement): void => {
    this.themeProviderArrows = el;
  };

  private refFrameRepeater = (el: HTMLElement): void => {
    this.frameRepeater = el;
  };

  private refBulletElement = (el: HTMLElement): void => {
    if (el) {
      this.bulletElement = el; // Keep the current behavior
      this.bulletElements.push(el); // Store all bullet elements
    }
  };

  private onMouseOver = () => {
    if (this.autoplayHoverPause) {
      this.pauseAutoplay();
    }
  };

  private onMouseOut = () => {
    if (this.autoplayHoverPause) {
      this.runAutoplay();
    }
  };

  private onMouseDown = (ev: MouseEvent) => {
    if (this.grab) {
      this.framePressed = true;
      const offsetFrame = this.frame.offsetLeft + this.element.offsetLeft;
      this.startX = ev.pageX - offsetFrame;
      this.endX = ev.pageX - offsetFrame;
      this.frame.style.cursor = 'grabbing';
    }
  };

  private onMouseEnter = () => {
    if (this.grab) {
      this.frame.style.cursor = 'grab';
    }
  };

  private onMouseUp = () => {
    if (this.grab) {
      this.framePressed = false;
      this.frame.style.cursor = 'grab';
      this.boundItems();
      if (this.autoplayHoverPause) {
        this.pauseAutoplay();
      }
    }
  };

  private onMouseMove = (ev: MouseEvent) => {
    if (this.grab) {
      if (!this.framePressed) return;
      ev.preventDefault();

      const offsetFrame = this.frame.offsetLeft + this.element.offsetLeft;

      this.endX = ev.pageX - offsetFrame;
    }
  };

  private boundItems = () => {
    if (this.endX < this.startX) {
      this.nextSlide();
      this.seconds = 0;
    } else if (this.endX > this.startX) {
      this.prevSlide();
      this.seconds = 0;
    }
  };

  private setKeydownNavigation = (ev) => {
    if (ev.key === 'Tab') {
      if (this.bulletElements.length > 0) {
        this.bulletElements[0].focus();
      } else if (this.bulletElement) {
        this.bulletElement.focus();
      }
    }
    if (ev.key === 'ArrowRight') {
      this.nextSlide();
    }
    if (ev.key === 'ArrowLeft') {
      this.prevSlide();
    }
  };

  render() {
    // Reset bullet elements array at start of render
    this.bulletElements = [];
    
    const ThemeOrDivArrows = this.arrows == 'inside' ? 'bds-theme-provider' : 'div';
    const justifybulletsPosition =
      this.bulletsPosition == 'center'
        ? 'center'
        : this.bulletsPosition == 'right'
          ? 'flex-end'
          : this.bulletsPosition == 'left' && 'flex-start';
    return (
      <div class={{ carousel: true }}>
        <div
          class={{
            carousel_slide: true,
            carousel_slide_fullwidth: this.arrows != 'outside',
            [`carousel_slide_state_${this.autoplayState}`]: this.autoplay,
          }}
          tabindex="0"
          onKeyDown={(ev) => this.setKeydownNavigation(ev)}
          data-test={this.dtSlideContent}
        >
          <div
            ref={(el) => this.refFrame(el)}
            class={{ carousel_slide_frame: true, carousel_slide_frame_loading: this.loading }}
            onMouseOver={() => this.onMouseOver()}
            onMouseOut={() => this.onMouseOut()}
            onMouseDown={(ev) => this.onMouseDown(ev)}
            onMouseEnter={() => this.onMouseEnter()}
            onMouseUp={() => this.onMouseUp()}
            onMouseMove={(ev) => this.onMouseMove(ev)}
          >
            <div ref={(el) => this.refFrameRepeater(el)} class={{ carousel_slide_frame_repeater: true }}>
              <slot />
            </div>
          </div>
          <bds-grid class={{ carousel_slide_loading: true, carousel_slide_loading_visible: this.loading }}>
            <bds-skeleton height="100%" shape="square" width="100%" />
          </bds-grid>
          {this.arrows != 'none' && !this.loading && (
            <ThemeOrDivArrows
              ref={(el) => this.refThemeProviderArrows(el)}
              class={{
                carousel_buttons: true,
                carousel_buttons_fullwidth: this.arrows != 'outside',
              }}
            >
              <bds-button
                variant="text"
                iconLeft="arrow-left"
                color="content"
                onBdsClick={() => this.prevSlide()}
                disabled={!this.infiniteLoop && this.itemActivated <= 1}
                dataTest={this.dtButtonPrev}
              ></bds-button>
              <bds-button
                variant="text"
                iconLeft="arrow-right"
                color="content"
                onBdsClick={() => this.nextSlide()}
                disabled={!this.infiniteLoop && this.itemActivated >= this.internalItens.length}
                dataTest={this.dtButtonNext}
              ></bds-button>
            </ThemeOrDivArrows>
          )}
        </div>
        {this.internalItens.length > 1 && this.bullets != 'none' && (
          <div
            class={{
              carousel_bullets: true,
              carousel_bullets_inside: this.bullets == 'inside',
            }}
          >
            {this.loading && this.bullets != 'inside' ? (
              <bds-grid
                xxs="12"
                gap="1"
                justify-content={justifybulletsPosition}
                padding={this.arrows === 'outside' ? 'x-7' : 'none'}
              >
                <bds-skeleton height="16px" width="16px" shape="circle" />
                <bds-skeleton height="16px" width="16px" shape="circle" />
                <bds-skeleton height="16px" width="16px" shape="circle" />
              </bds-grid>
            ) : (
              this.internalItens && (
                <bds-grid
                  xxs="12"
                  justify-content={justifybulletsPosition}
                  padding={this.arrows === 'outside' ? 'x-7' : 'none'}
                >
                  <div
                    class={{
                      carousel_bullets_card: true,
                      carousel_bullets_card_inside: this.bullets == 'inside',
                    }}
                  >
                    {this.internalItens.map((item, index) => (
                      <div
                        key={index}
                        ref={(el) => this.refBulletElement(el)}
                        class={{
                          carousel_bullets_item: true,
                          carousel_bullets_item_active: item.id == this.itemActivated,
                        }}
                        tabindex="0"
                        onClick={() => this.setActivated(item.id)}
                      >
                        {item.id < this.itemActivated && this.autoplay && (
                          <div class={{ carousel_bullets_item_conclude: true }}></div>
                        )}
                        {item.id == this.itemActivated && this.autoplay && (
                          <div
                            class={{ carousel_bullets_item_loader: true }}
                            style={{
                              animationDuration: `${this.autoplayTimeout / 1000 - 0.1}s`,
                              animationPlayState: this.autoplayState,
                            }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </bds-grid>
              )
            )}
          </div>
        )}
        <slot name="after"></slot>
      </div>
    );
  }
}
