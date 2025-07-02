import { Overflow } from './tabs-interface';
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class Tabs {
    tabsHeaderChildElement: HTMLElement;
    leftButtonChildElement: HTMLElement;
    rightButtonChildElement: HTMLElement;
    readonly SCROLL_BEHAVIOR = "smooth";
    el: HTMLElement;
    scrollButtonClick: EventEmitter<Overflow>;
    bdsTabInit: EventEmitter;
    align: 'left' | 'center' | 'right';
    onScrollButtonClick(event: CustomEvent<Overflow>): void;
    onSelectedTab(event: CustomEvent): void;
    componentDidLoad(): void;
    private handleActiveTab;
    private getChildElements;
    private attachEvents;
    private handleHeaderResize;
    private updateButtonsVisibility;
    private handleScrollButtonClick;
    private setRightButtonVisibility;
    private setLeftButtonVisibility;
    private handleButtonOverlay;
    private isButtonOverlappingTab;
    private elementIsOverlapping;
    private getAdjutScrollDistance;
    private getDistance;
    render(): HTMLElement;
}
