import { EventEmitter } from '../../stencil-public-runtime';
export type UaiPaginationLanguage = 'pt_BR' | 'en_US' | 'es_MX';
/**
 * Navigation between pages of a list or table, with optional items per page and range. Use it below tables and lists
 * that are split into pages; the page is controlled with page and changes only on user action, announced by
 * uaiPaginationChange. Pair with UaiTable. Avoid it for infinite scrolling or for fewer than two pages. Wrap the app in
 * UaiThemeProvider.
 *
 * @part pagination - The navigation container.
 * @part page-size - The items per page selector.
 * @part page-select - The current page selector.
 */
export declare class UaiPagination {
    el: HTMLElement;
    /** Current page, starting at 1. Use it to control the page; pair with uaiPaginationChange; values outside 1..pages are clamped. */
    page?: number;
    /** Total number of pages. Use it when the server returns pages; ignored when total and pageSize are set. */
    pages?: number;
    /** Total number of items. Use with pageSize to derive the pages and show the "1-10 of 100" range; avoid it together with pages. */
    total?: number;
    /** Items per page. Use with total and pageSizeOptions; pair with uaiPageSizeChange; avoid values missing from pageSizeOptions. */
    pageSize?: number;
    /** Choices of items per page, such as [10, 20, 50]. Use to let people pick; leave empty to hide the selector. */
    pageSizeOptions?: number[];
    /** Shows "of N pages" next to the page selector. Use when the total of pages matters; avoid it in tight spaces. */
    pageCounter?: boolean;
    /** Language of the texts: pt_BR, en_US or es_MX. Use the language of the interface; avoid mixing languages. */
    language?: UaiPaginationLanguage;
    /** Test selector on the first page button. Use for automation; pair with semantic queries. */
    dtButtonInitial?: string;
    /** Test selector on the previous page button. Use for automation; pair with semantic queries. */
    dtButtonPrev?: string;
    /** Test selector on the page selector. Use for automation; pair with semantic queries. */
    dtSelectNumber?: string;
    /** Test selector on the next page button. Use for automation; pair with semantic queries. */
    dtButtonNext?: string;
    /** Test selector on the last page button. Use for automation; pair with semantic queries. */
    dtButtonEnd?: string;
    /** Test selector on the items per page selector. Use for automation; pair with semantic queries. */
    dtSelectSize?: string;
    /** Emitted when the person changes the page. detail: the new page number. */
    uaiPaginationChange: EventEmitter<number>;
    /** Emitted when the person changes the items per page. detail: the new size. The page goes back to 1. */
    uaiPageSizeChange: EventEmitter<number>;
    clampPage(): void;
    componentWillLoad(): void;
    private get texts();
    private get sizes();
    private get size();
    private get totalPages();
    private clamp;
    private goTo;
    private onSizeChange;
    private onPageChange;
    private renderButton;
    render(): any;
}
