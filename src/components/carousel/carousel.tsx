import { Component, Host, h, Element, State, Watch, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { Itens, arrows, gap } from './carousel-interface';
import { gapChanged, getHighestItem, getItems } from '../../utils/position-element';

@Component({
  tag: 'bds-carousel',
  styleUrl: 'carousel.scss',
  scoped: true,
})
export class BdsCarousel {
  private itemsElement?: HTMLCollectionOf<HTMLBdsCarouselItemElement> = null;
  private frame?: HTMLElement;
  private frameRepeater?: HTMLElement;
  private incrementSeconds?: any;

  @Element() private element: HTMLElement;

  @State() itemActivated = 1;
  @State() seconds = 0;
  @State() internalItens: Itens[];
  @State() isWhole = 0;
  @State() heightCarousel?: number = 240;

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
  }

  componentDidLoad() {
    this.startCountSeconds();
    this.heightCarousel = this.frame.offsetHeight;
  }

  @Watch('itemActivated')
  protected itemActivatedChanged(): void {
    const currentItemSelected: Itens = this.internalItens.find((item) => item.id === this.itemActivated);
    const slideFrame = !this.frame ? 0 : this.frame.offsetWidth * (this.itemActivated - 1);
    if (currentItemSelected.isWhole) {
      const isWholeWidth = this.itemsElement[1].offsetWidth * (this.slidePerPage - this.isWhole);
      if (this.frameRepeater) {
        this.frameRepeater.style.right = `${slideFrame - isWholeWidth}px`;
      }
    } else {
      if (this.frameRepeater) {
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
    this.heightCarousel = this.frame.offsetHeight;
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
      this.itemActivated = 1;
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
      this.itemActivated = this.internalItens.length;
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

  private refFrameRepeater = (el: HTMLElement): void => {
    this.frameRepeater = el;
  };

  private onMouseOver = () => {
    if (this.autoplayHoverPause) this.pauseAutoplay();
  };

  private onMouseOut = () => {
    if (this.autoplayHoverPause) this.runAutoplay();
  };

  render() {
    return (
      <Host class={{ carousel: true }}>
        <div class={{ carousel_slide: true, carousel_slide_fullwidth: this.arrows != 'outside' }}>
          <div
            ref={(el) => this.refFrame(el)}
            class={{ carousel_slide_frame: true, carousel_slide_frame_loading: this.loading }}
            onMouseOver={() => this.onMouseOver()}
            onMouseOut={() => this.onMouseOut()}
            tabindex="0"
          >
            <div ref={(el) => this.refFrameRepeater(el)} class={{ carousel_slide_frame_repeater: true }}>
              <slot></slot>
            </div>
          </div>
          {this.loading && (
            <bds-grid class={{ carousel_slide_loading: true }}>
              <bds-skeleton height={`${this.heightCarousel}px`} shape="square" width="100%" />
            </bds-grid>
          )}
          {this.arrows != 'none' && (
            <div class={{ carousel_buttons: true, carousel_buttons_fullwidth: this.arrows == 'inside' }}>
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
            </div>
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
      </Host>
    );
  }
}
