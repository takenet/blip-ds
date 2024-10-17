import { Component, h, Element, State, Watch, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { Itens, arrows, gap } from './carousel-interface';
import { gapChanged, getHighestItem, getItems } from '../../utils/position-element';

@Component({
  tag: 'bds-carousel',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class BdsCarousel {
  private itemsElement?: HTMLCollectionOf<HTMLBdsCarouselItemElement> = null;
  private frame?: HTMLElement;
  private themeProvider?: HTMLBdsThemeProviderElement;
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
  @Prop() bullets?: boolean = true;

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
    if (this.slidePerPage <= 1 && this.arrows == 'inside') {
      this.themeProvider.theme = this.itemsElement[this.itemActivated - 1].theme;
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
  }

  @Method()
  async pauseAutoplay(): Promise<void> {
    clearInterval(this.incrementSeconds);
  }

  @Method()
  async runAutoplay(): Promise<void> {
    this.startCountSeconds();
  }

  private refFrame = (el: HTMLElement): void => {
    this.frame = el;
  };

  private refThemeProvider = (el: HTMLBdsThemeProviderElement): void => {
    this.themeProvider = el;
  };

  private refFrameRepeater = (el: HTMLElement): void => {
    this.frameRepeater = el;
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

  render() {
    return (
      <div class={{ carousel: true }}>
        <div class={{ carousel_slide: true, carousel_slide_fullwidth: this.arrows != 'outside' }}>
          <div
            ref={(el) => this.refFrame(el)}
            class={{ carousel_slide_frame: true, carousel_slide_frame_loading: this.loading }}
            onMouseOver={() => this.onMouseOver()}
            onMouseOut={() => this.onMouseOut()}
            onMouseDown={(ev) => this.onMouseDown(ev)}
            onMouseEnter={() => this.onMouseEnter()}
            onMouseUp={() => this.onMouseUp()}
            onMouseMove={(ev) => this.onMouseMove(ev)}
            tabindex="0"
          >
            <div
              ref={(el) => this.refFrameRepeater(el)}
              class={{ carousel_slide_frame_repeater: true }}
              tabindex="0"
              role="tabpanel"
            >
              <slot />
            </div>
          </div>
          <bds-grid class={{ carousel_slide_loading: true, carousel_slide_loading_visible: this.loading }}>
            <bds-skeleton height="100%" shape="square" width="100%" />
          </bds-grid>
          {this.arrows != 'none' && !this.loading && (
            <bds-theme-provider
              ref={(el) => this.refThemeProvider(el)}
              class={{ carousel_buttons: true, carousel_buttons_fullwidth: this.arrows == 'inside' }}
            >
              <bds-button-icon
                variant="tertiary"
                icon="arrow-left"
                size="short"
                onBdsClick={() => this.prevSlide()}
                disabled={!this.infiniteLoop && this.itemActivated <= 1}
              ></bds-button-icon>
              <bds-button-icon
                variant="tertiary"
                icon="arrow-right"
                size="short"
                onBdsClick={() => this.nextSlide()}
                disabled={!this.infiniteLoop && this.itemActivated >= this.internalItens.length}
              ></bds-button-icon>
            </bds-theme-provider>
          )}
        </div>
        {this.autoplay &&
          (this.loading ? (
            <bds-skeleton
              class={{ carousel_loading_bar: true, carousel_loading_bar_fullwidth: this.arrows != 'outside' }}
              height="8px"
              width="100%"
              shape="square"
            />
          ) : (
            <bds-loading-bar
              class={{ carousel_loading_bar: true, carousel_loading_bar_fullwidth: this.arrows != 'outside' }}
              percent={(this.seconds * 100) / this.secondsLimit}
              size="small"
            />
          ))}
        {this.bullets && (
          <div class={{ carousel_bullets: true }}>
            {this.loading ? (
              <bds-grid gap="2" justify-content="center">
                <bds-skeleton height="24px" width="24px" shape="circle" />
                <bds-skeleton height="24px" width="24px" shape="circle" />
                <bds-skeleton height="24px" width="24px" shape="circle" />
              </bds-grid>
            ) : (
              this.internalItens && (
                <bds-radio-group>
                  <bds-grid gap="2" justify-content="center">
                    {this.internalItens.map((item, index) => (
                      <bds-radio
                        key={index}
                        checked={item.id == this.itemActivated}
                        value={item.id.toString()}
                        onBdsClickChange={() => this.setActivated(item.id)}
                      />
                    ))}
                  </bds-grid>
                </bds-radio-group>
              )
            )}
          </div>
        )}
        <slot name="after"></slot>
      </div>
    );
  }
}
