'use strict';

var index = require('./index-BuAR9UTp.js');
var positionElement = require('./position-element-Due63Z64.js');

const en_US = {
    itemsPerPage: 'Items per page',
    of: 'of',
    items: 'items',
    pages: 'pages'
};
const pt_BR = {
    itemsPerPage: 'Itens por página',
    of: 'de',
    items: 'itens',
    pages: 'páginas'
};
const es_MX = {
    itemsPerPage: 'Itens por página',
    of: 'de',
    items: 'itens',
    pages: 'páginas'
};

const paginationCss = () => `:host{display:block}:host .actions_select{width:74px}:host(.full_width){width:100%}@media screen and (max-width: 905px){.items_per_page{display:none}.actions{width:100%;-ms-flex-pack:center;justify-content:center}}@media screen and (max-width: 600px){.actions--text{display:none}}`;

const Pagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsPaginationChange = index.createEvent(this, "bdsPaginationChange");
        this.bdsItemsPerPageChange = index.createEvent(this, "bdsItemsPerPageChange");
        /**
         * Estado que armazena o valor selecionado no seletor de página.
         * Inicialmente, é configurado com a página inicial (startedPage).
         */
        this.value = this.startedPage;
        /**
         * Estado que armazena o número de páginas, gerado com base no total de itens e itens por página.
         */
        this.paginationNumbers = [];
        // Estado que guarda o elemento pai com rolagem (se houver)
        this.intoView = null;
        /**
         * Define a posição do menu de opções. Pode ser 'bottom' ou 'top'.
         * Padrão é 'auto', que ajusta automaticamente a posição.
         */
        this.optionsPosition = 'auto';
        // Propriedade que controla se o contador de páginas será exibido
        this.pageCounter = false;
        // Propriedade para definir o idioma do componente (opcional)
        this.language = 'pt_BR';
        /**
         * Propriedade de teste para especificamente testar a ação do botão inicial.
         * dtButtonInitial é o data-test para o botão inicial.
         */
        this.dtButtonInitial = null;
        /**
         * Propriedade de teste para especificamente testar a ação do botão de página anterior.
         * dtButtonPrev é o data-test para o botão anterior.
         */
        this.dtButtonPrev = null;
        /**
         * Propriedade de teste para especificamente testar o seletor de número de páginas.
         * dtSelectNumber é o data-test para o seletor de número de páginas.
         */
        this.dtSelectNumber = null;
        /**
         * Propriedade de teste para especificamente testar a ação do botão de próxima página.
         * dtButtonNext é o data-test para o botão próximo.
         */
        this.dtButtonNext = null;
        /**
         * Propriedade de teste para especificamente testar a ação do botão final.
         * dtButtonEnd é o data-test para o botão final.
         */
        this.dtButtonEnd = null;
        this.nextPage = (event) => {
            const el = this.value;
            const totalPages = this.pages || 0;
            if (el < totalPages) {
                event.preventDefault();
                this.value = this.value + 1;
                this.updateItemRange();
            }
        };
        this.previewPage = (event) => {
            const el = this.value;
            if (el > 1) {
                event.preventDefault();
                this.value = this.value - 1;
                this.updateItemRange();
            }
        };
        this.firstPage = (event) => {
            const el = this.value;
            if (el > 1) {
                event.preventDefault();
                this.value = this.paginationNumbers[0];
                this.updateItemRange();
            }
        };
        this.lastPage = (event) => {
            const el = this.value;
            const totalPages = this.pages || 0;
            if (el < totalPages) {
                event.preventDefault();
                this.value = totalPages;
                this.updateItemRange();
            }
        };
        this.openOptions = () => {
            this.openSelect = !this.openSelect;
        };
        this.onBlur = () => {
            this.openSelect = false;
        };
    }
    componentWillLoad() {
        this.countPage();
        this.intoView = positionElement.getScrollParent(this.el);
        this.processItemsPage();
        if (this.pageCounter) {
            this.itemValue = this.itemsPage[0];
        }
        this.itemSelected(this.itemValue);
        this.countItem();
    }
    pagesChanged() {
        this.countPage();
    }
    valueChanged() {
        this.bdsPaginationChange.emit(this.value);
    }
    processItemsPage() {
        if (typeof this.itemsPage === 'string') {
            try {
                this.itemsPage = JSON.parse(this.itemsPage.replace(/'/g, '"'));
            }
            catch (error) {
                this.itemsPage = [];
            }
        }
    }
    countItem() {
        if (this.pageCounter) {
            const pages = this.numberItems / this.itemValue;
            this.pages = Math.ceil(pages);
        }
    }
    countPage() {
        const totalPages = this.pages || 0;
        if (this.paginationNumbers.length !== 0) {
            this.paginationNumbers = [];
        }
        if (this.paginationNumbers.length === 0) {
            for (let i = 1; i <= totalPages; i++) {
                this.paginationNumbers.push(i);
            }
            if (Number.isFinite(this.startedPage) && totalPages > 0) {
                const normalizedStartedPage = Math.min(totalPages, Math.max(1, Math.trunc(this.startedPage)));
                this.value = normalizedStartedPage;
            }
            else {
                this.value = this.paginationNumbers[0];
            }
        }
    }
    optionSelected(index) {
        this.value = index;
        this.openOptions();
        this.updateItemRange();
    }
    itemSelected(index) {
        this.itemValue = index;
        this.itemsPerPage = index;
        this.openOptions();
        this.countItem();
        this.updateItemRange();
        this.bdsItemsPerPageChange.emit(this.itemsPerPage);
    }
    updateItemRange() {
        this.startItem = (this.value - 1) * this.itemsPerPage + 1;
        this.endItem = Math.min(this.value * this.itemsPerPage, this.numberItems);
    }
    get currentLanguage() {
        switch (this.language) {
            case 'en_US':
                return en_US;
            case 'es_MX':
                return es_MX;
            default:
                return pt_BR;
        }
    }
    render() {
        var _a;
        const { currentLanguage } = this;
        const totalPages = this.pages || 0;
        const isFirstPage = this.value <= 1;
        const isLastPage = this.value >= totalPages;
        const isSinglePage = totalPages <= 1;
        const disableBackActions = isSinglePage || isFirstPage;
        const disableForwardActions = isSinglePage || isLastPage;
        return (index.h(index.Host, { key: '24ad185c75f9f4ddfa37bc2d75c444df6881adda', class: { full_width: this.pageCounter } }, index.h("bds-grid", { key: '14cd895c86fdddde9ec5a2d350ec7aee59109623', "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (index.h("bds-grid", { key: '7586c50ebe8aab65b155e4ca82c4628d41a2f17b', gap: "1", "align-items": "center", class: "items_per_page" }, index.h("bds-typo", { key: 'ca5cfb2bcb327b41c5ff50c66a4a94ac8920ce0b', variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), index.h("bds-select", { key: '70388802ebf6a11a05c32a66d0f82942dbe934bc', class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, (_a = this.itemsPage) === null || _a === void 0 ? void 0 : _a.map((el, index$1) => (index.h("bds-select-option", { key: index$1, value: el, onClick: () => this.itemSelected(el) }, el)))), index.h("bds-typo", { key: '472205346d2a73f2b1d37f3f953c92f13f25a15b', variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), index.h("bds-grid", { key: 'd2dd290fe5d66bbc32a50131913db8bee116dc18', gap: "1", "align-items": "center", class: "actions" }, index.h("bds-button-icon", { key: '0ec9bcc8973db44fc6095275311cdf1470ddc63b', onBdsClick: (ev) => this.firstPage(ev), disabled: disableBackActions, size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), index.h("bds-button-icon", { key: '494bc250888dea40794b3ef3e449e7e946d5a363', onBdsClick: (ev) => this.previewPage(ev), disabled: disableBackActions, size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), index.h("bds-select", { key: '18591b25e7b10925f391fbc243646722efd982f4', class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index$1) => (index.h("bds-select-option", { key: index$1, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (index.h("bds-typo", { key: 'd5480f611e1a07dbaeee9b5fb33b7c002376af17', class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), index.h("bds-button-icon", { key: '8dd40418c68a40e29f124f1c409d10a06d9413ae', onBdsClick: (ev) => this.nextPage(ev), disabled: disableForwardActions, size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), index.h("bds-button-icon", { key: 'bcf9f3f6c461fd5e9c5dfbd0270d3f241a574c8d', onBdsClick: (ev) => this.lastPage(ev), disabled: disableForwardActions, size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "pages": [{
                "pagesChanged": 0
            }],
        "startedPage": [{
                "pagesChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }],
        "itemValue": [{
                "itemSelected": 0
            }]
    }; }
};
Pagination.style = paginationCss();

exports.bds_pagination = Pagination;
