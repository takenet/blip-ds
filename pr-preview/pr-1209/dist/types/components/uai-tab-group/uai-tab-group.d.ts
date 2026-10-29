import { EventEmitter } from '../../stencil-public-runtime';
import { UaiTabItemOptions } from '../uai-tab-item/uai-tab-item-interface';
/**
 * Floating tabs with manual keyboard activation. Use for alternate views of related content;
 * pair with UaiTabItem; avoid using tabs as links to unrelated pages.
 *
 * @slot - UaiTabItem panels. Use for related views; pair with item labels; avoid mixing the deprecated bds-tabs API.
 */
export declare class UaiTabGroup {
    el: HTMLElement;
    private items;
    private canScrollPrev;
    private canScrollNext;
    private focusedItem?;
    private readonly groupId;
    private viewport?;
    private track?;
    private observer?;
    private resizeObserver?;
    private synchronizing;
    private loaded;
    private revealPending;
    private focusPending;
    /** Enables scrolling of panel content. Use for constrained containers; pair with container height; avoid nested scrolling without need. */
    contentScrollable: boolean;
    /** Header alignment: left, center or right. Use to fit the surrounding layout; pair with floating tabs; avoid unsupported values. */
    align: 'left' | 'center' | 'right';
    /** Previous scroll button data-test. Use for automation; pair with dtButtonNext; avoid using it as an accessible label. */
    dtButtonPrev: string;
    /** Next scroll button data-test. Use for automation; pair with dtButtonPrev; avoid using it as an accessible label. */
    dtButtonNext: string;
    /** Accessible tablist name. Use for distinguishing groups; pair with item labels; avoid unnamed groups when several are present. */
    ariaLabel: string;
    /** Accessible tablist name references. Use for an existing heading; pair with that heading's ID; avoid broken references. */
    ariaLabelledBy: string;
    /** Scroll control language, pt_BR, en_US or es_ES. Use for built-in labels; pair with translated item labels; avoid translating consumer content implicitly. */
    language: 'pt_BR' | 'en_US' | 'es_ES';
    /** Activated item element, including reactivation. Use for controlled selection; pair with item.open; avoid expecting a string group ID. */
    uaiTabChange: EventEmitter<HTMLUaiTabItemElement>;
    /** Item element whose disabled header was activated. Use for unavailable-action feedback; pair with disable; avoid treating it as a disable prop change. */
    uaiTabDisabled: EventEmitter<HTMLUaiTabItemElement>;
    protected alignmentChanged(): void;
    protected itemUpdated(event: CustomEvent<{
        prop: keyof UaiTabItemOptions;
    }>): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private isOwnItem;
    private connectObservers;
    private snapshot;
    private syncItems;
    private tabId;
    private activate;
    private focusTab;
    private handleKeyDown;
    private updateOverflow;
    private scroll;
    private revealFocusedTab;
    private styles;
    private renderIcon;
    private renderBadge;
    render(): HTMLElement;
}
