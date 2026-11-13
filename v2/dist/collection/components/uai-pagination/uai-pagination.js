import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const TAG = 'uai-pagination';
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
export class UaiPagination {
    constructor() {
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
        warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
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
        return (h("uai-button", { variant: "text", color: "content", size: "medium", icon: icon, "aria-label": label, disabled: disabled, dataTest: dataTest, onUaiClick: () => this.goTo(target) }));
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
        return (h(Host, { key: '1cda4686f48058d452453a4eccd30b3ac5fdba9b' }, h("nav", { key: 'bdf4c96ad8daf8651850edb993200ea4fdb14104', class: "pagination", part: "pagination", "aria-label": texts.navigation }, sizes.length > 0 && (h("div", { key: '33f7500b4da199a805d335aab77bd8dba98d3581', class: "pagination__size" }, h("uai-typo", { key: 'd010596011da5322d74237f7fe9c436b85a4ebbc', tag: "span", variant: "body-base", margin: false }, texts.itemsPerPage, ":"), h("uai-select", { key: '3963dbbd688161da0bf59cfae0a78ebb6b72bbd0', class: "pagination__select", part: "page-size", size: "medium", "aria-label": texts.itemsPerPage, value: size, options: sizeOptions, dataTest: this.dtSelectSize, onUaiChange: this.onSizeChange }), start > 0 && (h("uai-typo", { key: 'c17160ca3ff4ae6384e70e1b0ce388ac94acaeb9', class: "pagination__range", tag: "span", variant: "body-base", margin: false }, start, "-", end, " ", texts.of, " ", total)))), h("div", { key: '1c925d646c7d6eab06612e644be729c9fd98691e', class: "pagination__actions" }, this.renderButton('arrow-first', texts.first, 1, atStart, this.dtButtonInitial), this.renderButton('arrow-left', texts.previous, page - 1, atStart, this.dtButtonPrev), h("uai-select", { key: 'bfdd81fdb67b0f4468b117ab77c85d340b545f07', class: "pagination__select", part: "page-select", size: "medium", "aria-label": texts.page, value: totalPages > 0 ? page : null, options: pageOptions, disabled: totalPages === 0, dataTest: this.dtSelectNumber, onUaiChange: this.onPageChange }), this.pageCounter && (h("uai-typo", { key: '8001920bf9965d19e5c4e9bb9c8cf5adeff98972', class: "pagination__counter", tag: "span", variant: "body-base", margin: false }, texts.of, " ", totalPages, " ", texts.pages)), this.renderButton('arrow-right', texts.next, page + 1, atEnd, this.dtButtonNext), this.renderButton('arrow-last', texts.last, totalPages, atEnd, this.dtButtonEnd)))));
    }
    static get is() { return "uai-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-pagination.css"]
        };
    }
    static get properties() {
        return {
            "page": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Current page, starting at 1. Use it to control the page; pair with uaiPaginationChange; values outside 1..pages are clamped."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "page",
                "defaultValue": "1"
            },
            "pages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Total number of pages. Use it when the server returns pages; ignored when total and pageSize are set."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pages",
                "defaultValue": "0"
            },
            "total": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Total number of items. Use with pageSize to derive the pages and show the \"1-10 of 100\" range; avoid it together with pages."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "total",
                "defaultValue": "null"
            },
            "pageSize": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Items per page. Use with total and pageSizeOptions; pair with uaiPageSizeChange; avoid values missing from pageSizeOptions."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "page-size",
                "defaultValue": "null"
            },
            "pageSizeOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Choices of items per page, such as [10, 20, 50]. Use to let people pick; leave empty to hide the selector."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "pageCounter": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Shows \"of N pages\" next to the page selector. Use when the total of pages matters; avoid it in tight spaces."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page-counter",
                "defaultValue": "false"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiPaginationLanguage",
                    "resolved": "\"en_US\" | \"es_MX\" | \"pt_BR\"",
                    "references": {
                        "UaiPaginationLanguage": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-pagination/uai-pagination.tsx",
                            "id": "src/components/uai-pagination/uai-pagination.tsx::UaiPaginationLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language of the texts: pt_BR, en_US or es_MX. Use the language of the interface; avoid mixing languages."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            },
            "dtButtonInitial": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the first page button. Use for automation; pair with semantic queries."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-initial",
                "defaultValue": "null"
            },
            "dtButtonPrev": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the previous page button. Use for automation; pair with semantic queries."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-prev",
                "defaultValue": "null"
            },
            "dtSelectNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the page selector. Use for automation; pair with semantic queries."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-select-number",
                "defaultValue": "null"
            },
            "dtButtonNext": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the next page button. Use for automation; pair with semantic queries."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-next",
                "defaultValue": "null"
            },
            "dtButtonEnd": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the last page button. Use for automation; pair with semantic queries."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-end",
                "defaultValue": "null"
            },
            "dtSelectSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the items per page selector. Use for automation; pair with semantic queries."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-select-size",
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "uaiPaginationChange",
                "name": "uaiPaginationChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the person changes the page. detail: the new page number."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "uaiPageSizeChange",
                "name": "uaiPageSizeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the person changes the items per page. detail: the new size. The page goes back to 1."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "pages",
                "methodName": "clampPage"
            }, {
                "propName": "total",
                "methodName": "clampPage"
            }, {
                "propName": "pageSize",
                "methodName": "clampPage"
            }, {
                "propName": "page",
                "methodName": "clampPage"
            }];
    }
}
