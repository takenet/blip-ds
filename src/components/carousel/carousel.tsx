import { Component, Host, h, Element, State, Watch, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { Itens, positionElements, gap } from './carousel-interface';
import { gapChanged, getItems } from '../../utils/position-element';

@Component({
  tag: 'bds-carousel',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class BdsCarousel {
  private itemsElement?: HTMLCollectionOf<HTMLBdsCarouselItemElement> = null;
  private frame?: HTMLElement;
  private frameRepeater?: HTMLElement;
  private incrementSeconds?: any;

  @Element() private element: HTMLElement;

  @State() itemActivated: number = 1;
  @State() seconds: number = 0;
  @State() internalItens: Itens[];
  @State() isWhole: number = 0;

  /**
   * Autoplay. Prop to Enable component autoplay.
   */
  @Prop() autoplay?: boolean = true;

  /**
   * AutoplayTimeout. Prop to Choose the Autoplay time in milliseconds, ex: 5000.
   */
  @Prop() autoplayTimeout?: number = 5000;

  /**
   * AutoplayHoverPause. Prop to Enable it if you will have the function to pause autoplay when on hover.
   */
  @Prop() autoplayHoverPause?: boolean = false;

  /**
   * InfiniteLoop. Prop to Enable if the component will have infinite loop.
   */
  @Prop() infiniteLoop?: boolean = false;

  /**
   * PositioningElements. Prop to Choose the positioning (default, full-width or mini) of the Carousel.
   */
  @Prop() positioningElements?: positionElements = 'default';

  /**
   * Columns. Prop to Choose the number of columns you will have available in the carousel.
   */
  @Prop() columns?: number = 1;

  /**
   * Gap. Prop to Select the gap distance between items.
   */
  @Prop() gap?: gap = 'none';

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
    if (this.gap != 'none') {
      this.frame.style.width = `calc(100% + ${gapChanged(this.gap)}px)`;
      this.frame.style.marginLeft = `-${gapChanged(this.gap) / 2}px`;
    }
    for (let i = 0; i < this.itemsElement.length; i++) {
      const widthFrame = this.frame.offsetWidth >= 1920 ? 1920 : this.frame.offsetWidth;
      this.itemsElement[i].style.width = `${widthFrame / this.columns}px`;
      this.itemsElement[i].style.padding = `0 ${gapChanged(this.gap) / 2}px`;
    }
  }

  componentDidLoad() {
    this.startCountSeconds();
  }

  @Watch('itemActivated')
  protected itemActivatedChanged(): void {
    const currentItemSelected: Itens = this.internalItens.find((item) => item.id === this.itemActivated);
    const slideFrame = this.frame.offsetWidth * (this.itemActivated - 1);
    if (currentItemSelected.isWhole) {
      const isWholeWidth = this.itemsElement[1].offsetWidth * (this.columns - this.isWhole);
      this.frameRepeater.style.right = `${slideFrame - isWholeWidth}px`;
    } else {
      this.frameRepeater.style.right = `${slideFrame}px`;
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
    const floor = Math.floor(ItensElement.length / this.columns);
    const numberOfColumns = ItensElement.length / this.columns;
    const newItens = getItems(numberOfColumns);
    this.internalItens = newItens;
    this.isWhole = ItensElement.length - this.columns * floor;
  };

  private startCountSeconds = () => {
    if (this.autoplay) {
      this.incrementSeconds = setInterval(() => {
        this.seconds += 0.1;
      }, 100);
    }
  };

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
      <Host class={{ carousel: true, carousel_fullwidth: this.positioningElements != 'default' }}>
        <div class={{ carousel_slide: true }}>
          <div
            ref={(el) => this.refFrame(el)}
            class={{ carousel_slide_frame: true }}
            onMouseOver={() => this.onMouseOver()}
            onMouseOut={() => this.onMouseOut()}
            tabindex="0"
          >
            <div ref={(el) => this.refFrameRepeater(el)} class={{ carousel_slide_frame_repeater: true }}>
              <slot></slot>
            </div>
          </div>
        </div>
        {this.positioningElements != 'mini' && (
          <div class={{ carousel_buttons: true, carousel_buttons_fullwidth: this.positioningElements == 'full-width' }}>
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
              disabled={!this.infiniteLoop && this.itemActivated >= this.itemsElement.length}
            ></bds-button-icon>
          </div>
        )}
        {this.autoplay && (
          <bds-loading-bar
            class={{ carousel_loading: true }}
            percent={(this.seconds * 100) / this.secondsLimit}
            size="small"
          />
        )}

        <div class={{ carousel_bullets: true }}>
          {this.internalItens && (
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
          )}
        </div>
      </Host>
    );
  }
}
