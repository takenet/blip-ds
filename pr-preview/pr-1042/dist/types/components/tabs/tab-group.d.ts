import { EventEmitter } from '../../stencil-public-runtime';
import { Itens } from './tab-group-interface';
export declare class BdsTabGroup {
    private tabItensElement?;
    private tabItensSlideElement?;
    private headerElement?;
    private headerSlideElement?;
    private isSlide?;
    private element;
    internalItens: Itens[];
    isSlideTabs?: boolean;
    alignTab?: 'left' | 'scrolling' | 'right';
    tabRefSlide?: number;
    positionLeft?: number;
    contentScrollable?: boolean;
    align: 'left' | 'center' | 'right';
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonPrev is the data-test to button prev.
     */
    dtButtonPrev?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonNext is the data-test to button next.
     */
    dtButtonNext?: string;
    /**
     * bdsTabChange. Event to return value when Tabs is change.
     */
    bdsTabChange?: EventEmitter;
    /**
     * bdsTabDisabled. Event to return value when Tabs disable is change.
     */
    bdsTabDisabled?: EventEmitter;
    componentWillRender(): void;
    componentDidLoad(): void;
    connectedCallback(): void;
    private getEventsDisable;
    disconnectedCallback(): void;
    private checkSlideTabs;
    private setFirstActive;
    private setnumberElement;
    private setInternalItens;
    private handleClick;
    private refHeaderElement;
    private refHeaderSlideElement;
    private handleDisabled;
    private nextSlide;
    private prevSlide;
    private handleKeyDown;
    private renderIcon;
    private renderBadge;
    render(): HTMLElement;
}
