import { EventEmitter } from '../../stencil-public-runtime';
import { Itens, arrows, gap } from './carousel-interface';
export declare class BdsCarousel {
  private itemsElement?;
  private frame?;
  private frameRepeater?;
  private incrementSeconds?;
  element: HTMLElement;
  itemActivated: number;
  seconds: number;
  internalItens: Itens[];
  isWhole: number;
  heightCarousel?: number;
  framePressed?: boolean;
  startX?: number;
  endX?: number;
  /**
   * Autoplay. Prop to Enable component autoplay.
   */
  autoplay?: boolean;
  /**
   * AutoplayTimeout. Prop to Choose the Autoplay time in milliseconds, ex: 5000.
   */
  autoplayTimeout?: number;
  /**
   * AutoplayHoverPause. Prop to Enable it if you will have the function to pause autoplay when on hover.
   */
  autoplayHoverPause?: boolean;
  /**
   * autoHeight. Prop to Enable it if you want the component to adjust its height relative to the active items..
   */
  autoHeight?: boolean;
  /**
   * Bullet. Prop to Enable component bullets navigation.
   */
  bullets?: boolean;
  /**
   * InfiniteLoop. Prop to Enable if the component will have infinite loop.
   */
  infiniteLoop?: boolean;
  /**
   * arrows. Prop to select type of arrows in component. Are available "outside" | "inside" | "none".
   */
  arrows?: arrows;
  /**
   * SlidePerPage. Prop to Choose the number of slide per page you will have available in the carousel.
   */
  slidePerPage?: number;
  /**
   * Gap. Prop to Select the gap distance between items.
   */
  gap?: gap;
  /**
   * Grab. Prop to enable function of grab in carousel.
   */
  grab?: boolean;
  /**
   * Loading state. Indicates if the component is in a loading state.
   */
  loading?: boolean;
  secondsLimit: number;
  /**
   * Emitted when active frame value.
   */
  bdsChangeCarousel: EventEmitter;
  componentWillLoad(): void;
  componentDidRender(): void;
  componentDidLoad(): void;
  protected itemActivatedChanged(): void;
  protected autoplayTimeoutChanged(): void;
  protected secondsChanged(): void;
  protected isWholeChanged(): void;
  private setInternalItens;
  private startCountSeconds;
  private updateHeight;
  buildCarousel(): Promise<void>;
  nextSlide(): Promise<void>;
  prevSlide(): Promise<void>;
  setActivated(item: number): Promise<void>;
  pauseAutoplay(): Promise<void>;
  runAutoplay(): Promise<void>;
  private refFrame;
  private refFrameRepeater;
  private onMouseOver;
  private onMouseOut;
  private onMouseDown;
  private onMouseEnter;
  private onMouseUp;
  private onMouseMove;
  private boundItems;
  render(): any;
}
