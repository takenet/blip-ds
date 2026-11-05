'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiPaginationCss = () => `:host{display:block;width:100%}.pagination{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-md, 1rem);color:var(--uai-content-primary, #242729)}.pagination__size,.pagination__actions{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.pagination__actions{margin-left:auto}.pagination__select{--uai-select-width:var(--uai-pagination-select-width, var(--uai-sizing-5xl, 4.5rem))}.pagination__range,.pagination__counter{white-space:nowrap}`;

const LANGUAGES = ['pt_BR', 'en_US', 'es_MX'];
const TEXTS = {
    pt_BR: {
        navigation: 'Paginação',
        itemsPerPage: 'Itens por página',
        of: 'de',
        pages: 'páginas',
        page: 'Página',
        first: 'Primeira página',
        previous: 'Página anterior',
        next: 'Próxima página',
        last: 'Última página',
    },
    en_US: {
        navigation: 'Pagination',
        itemsPerPage: 'Items per page',
        of: 'of',
        pages: 'pages',
        page: 'Page',
        first: 'First page',
        previous: 'Previous page',
        next: 'Next page',
        last: 'Last page',
    },
    es_MX: {
        navigation: 'Paginación',
        itemsPerPage: 'Elementos por página',
        of: 'de',
        pages: 'páginas',
        page: 'Página',
        first: 'Primera página',
        previous: 'Página anterior',
        next: 'Página siguiente',
        last: 'Última página',
    },
};
const toInteger = (value, fallback) => {
    const number = Math.trunc(Number(value));
    return Number.isFinite(number) ? number : fallback;
};
const UaiPagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiPaginationChange = index.createEvent(this, "uaiPaginationChange");
        this.uaiPageSizeChange = index.createEvent(this, "uaiPageSizeChange");
        /** Current page, starting at 1. Use it to control the page; pair with uaiPaginationChange; values outside 1..pages are clamped. */
        this.page = 1;
        /** Total number of pages. Use it when the server returns pages; ignored when total and pageSize are set. */
        this.pages = 0;
        /** Total number of items. Use with pageSize to derive the pages and show the "1-10 of 100" range; avoid it together with pages. */
        this.total = null;
        /** Items per page. Use with total and pageSizeOptions; pair with uaiPageSizeChange; avoid values missing from pageSizeOptions. */
        this.pageSize = null;
        /** Choices of items per page, such as [10, 20, 50]. Use to let people pick; leave empty to hide the selector. */
        this.pageSizeOptions = [];
        /** Shows "of N pages" next to the page selector. Use when the total of pages matters; avoid it in tight spaces. */
        this.pageCounter = false;
        /** Language of the texts: pt_BR, en_US or es_MX. Use the language of the interface; avoid mixing languages. */
        this.language = 'pt_BR';
        /** Test selector on the first page button. Use for automation; pair with semantic queries. */
        this.dtButtonInitial = null;
        /** Test selector on the previous page button. Use for automation; pair with semantic queries. */
        this.dtButtonPrev = null;
        /** Test selector on the page selector. Use for automation; pair with semantic queries. */
        this.dtSelectNumber = null;
        /** Test selector on the next page button. Use for automation; pair with semantic queries. */
        this.dtButtonNext = null;
        /** Test selector on the last page button. Use for automation; pair with semantic queries. */
        this.dtButtonEnd = null;
        /** Test selector on the items per page selector. Use for automation; pair with semantic queries. */
        this.dtSelectSize = null;
        this.onSizeChange = (event) => {
            event.stopPropagation();
            const size = toInteger(event.detail.value, 0);
            if (size <= 0 || size === this.size)
                return;
            this.pageSize = size;
            this.uaiPageSizeChange.emit(size);
            this.goTo(1);
        };
        this.onPageChange = (event) => {
            event.stopPropagation();
            this.goTo(toInteger(event.detail.value, this.page));
        };
    }
    clampPage() {
        const clamped = this.clamp(this.page);
        if (clamped !== this.page)
            this.page = clamped;
    }
    componentWillLoad() {
        this.clampPage();
    }
    get texts() {
        if (LANGUAGES.includes(this.language))
            return TEXTS[this.language];
        return TEXTS.pt_BR;
    }
    get sizes() {
        return Array.isArray(this.pageSizeOptions) ? this.pageSizeOptions.map((size) => toInteger(size, 0)).filter((size) => size > 0) : [];
    }
    get size() {
        const size = toInteger(this.pageSize, 0);
        return size > 0 ? size : this.sizes[0] || 0;
    }
    get totalPages() {
        const total = toInteger(this.total, -1);
        if (total >= 0 && this.size > 0)
            return Math.ceil(total / this.size);
        return Math.max(0, toInteger(this.pages, 0));
    }
    clamp(page) {
        return Math.min(Math.max(toInteger(page, 1), 1), Math.max(this.totalPages, 1));
    }
    goTo(page) {
        const next = this.clamp(page);
        if (next === this.page)
            return;
        this.page = next;
        this.uaiPaginationChange.emit(next);
    }
    renderButton(icon, label, target, disabled, dataTest) {
        return (index.h("uai-button", { variant: "text", color: "content", size: "medium", icon: icon, "aria-label": label, disabled: disabled, dataTest: dataTest, onUaiClick: () => this.goTo(target) }));
    }
    render() {
        const { texts } = this;
        const totalPages = this.totalPages;
        const page = this.clamp(this.page);
        const size = this.size;
        const total = toInteger(this.total, -1);
        const sizes = this.sizes;
        const singlePage = totalPages <= 1;
        const atStart = singlePage || page <= 1;
        const atEnd = singlePage || page >= totalPages;
        const start = total > 0 && size > 0 ? (page - 1) * size + 1 : 0;
        const end = total > 0 && size > 0 ? Math.min(page * size, total) : 0;
        const pageOptions = Array.from({ length: totalPages }, (_, index) => ({ value: index + 1, label: String(index + 1) }));
        const sizeOptions = sizes.map((option) => ({ value: option, label: String(option) }));
        return (index.h(index.Host, { key: 'da82f59d10b9db9563c441abd3cc096b8431c55f' }, index.h("nav", { key: 'b549f5e15a00eef3d6e13ebe1f983ef161f34442', class: "pagination", part: "pagination", "aria-label": texts.navigation }, sizes.length > 0 && (index.h("div", { key: '8cd0b267d8029a77f2a80431401b714284286ef4', class: "pagination__size" }, index.h("uai-typo", { key: '9f1761fd23234a21f48c127a06ffeff62ce19171', tag: "span", variant: "body-base", margin: false }, texts.itemsPerPage, ":"), index.h("uai-select", { key: '664aabd5a3ca6c4c9f5939c34a248b29abf08cd2', class: "pagination__select", part: "page-size", size: "medium", "aria-label": texts.itemsPerPage, value: size, options: sizeOptions, dataTest: this.dtSelectSize, onUaiChange: this.onSizeChange }), start > 0 && (index.h("uai-typo", { key: '66a5e2116f10f0cc753df55ede1a6a52fa1174ba', class: "pagination__range", tag: "span", variant: "body-base", margin: false }, start, "-", end, " ", texts.of, " ", total)))), index.h("div", { key: 'f3a8291c1ab5c6822f5f16589cb621e261c00b01', class: "pagination__actions" }, this.renderButton('arrow-first', texts.first, 1, atStart, this.dtButtonInitial), this.renderButton('arrow-left', texts.previous, page - 1, atStart, this.dtButtonPrev), index.h("uai-select", { key: '1f0e2a0f4ff052804d6ba32efb752e1d3f577883', class: "pagination__select", part: "page-select", size: "medium", "aria-label": texts.page, value: totalPages > 0 ? page : null, options: pageOptions, disabled: totalPages === 0, dataTest: this.dtSelectNumber, onUaiChange: this.onPageChange }), this.pageCounter && (index.h("uai-typo", { key: '1958e1a25dab39a2806240ae3af0fe1c70796952', class: "pagination__counter", tag: "span", variant: "body-base", margin: false }, texts.of, " ", totalPages, " ", texts.pages)), this.renderButton('arrow-right', texts.next, page + 1, atEnd, this.dtButtonNext), this.renderButton('arrow-last', texts.last, totalPages, atEnd, this.dtButtonEnd)))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "pages": [{
                "clampPage": 0
            }],
        "total": [{
                "clampPage": 0
            }],
        "pageSize": [{
                "clampPage": 0
            }],
        "page": [{
                "clampPage": 0
            }]
    }; }
};
UaiPagination.style = uaiPaginationCss();

exports.uai_pagination = UaiPagination;
