import { Component, Host, h, Element, State, Watch, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { Itens, arrows, gap } from './carousel-interface';
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

  @State() itemActivated = 1;
  @State() seconds = 0;
  @State() internalItens: Itens[];
  @State() isWhole = 0;

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
      this.itemsElement[i].style.width = `${widthFrame / this.slidePerPage}px`;
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
      const isWholeWidth = this.itemsElement[1].offsetWidth * (this.slidePerPage - this.isWhole);
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
            class={{ carousel_slide_frame: true }}
            onMouseOver={() => this.onMouseOver()}
            onMouseOut={() => this.onMouseOut()}
            tabindex="0"
          >
            <div ref={(el) => this.refFrameRepeater(el)} class={{ carousel_slide_frame_repeater: true }}>
              <slot></slot>
            </div>
          </div>
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
        {this.autoplay && (
          <bds-loading-bar
            class={{ carousel_loading: true, carousel_loading_fullwidth: this.arrows != 'outside' }}
            percent={(this.seconds * 100) / this.secondsLimit}
            size="small"
          />
        )}
        {this.bullets && (
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
        )}
      </Host>
    );
  }
}
