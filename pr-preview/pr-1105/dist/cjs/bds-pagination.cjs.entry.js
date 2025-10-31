'use strict';

var index = require('./index-D_zq0Z7d.js');
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

const paginationCss = ":host{display:block}:host .actions_select{width:74px}:host(.full_width){width:100%}@media screen and (max-width: 905px){.items_per_page{display:none}.actions{width:100%;-ms-flex-pack:center;justify-content:center}}@media screen and (max-width: 600px){.actions--text{display:none}}";

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
            if (el < this.pages) {
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
            if (el < this.pages) {
                event.preventDefault();
                this.value = this.pages;
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
        if (this.paginationNumbers.length !== 0) {
            this.paginationNumbers = [];
        }
        if (this.paginationNumbers.length === 0) {
            for (let i = 1; i <= this.pages; i++) {
                this.paginationNumbers.push(i);
            }
            if (this.startedPage && this.startedPage < this.pages) {
                this.value = this.startedPage;
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
        return (index.h(index.Host, { key: '4c07f6cd577288c77530c93580ec946b269a08f4', class: { full_width: this.pageCounter } }, index.h("bds-grid", { key: '8fc9bb197dc27c0b9fbda616ead130688f01a020', "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (index.h("bds-grid", { key: 'f699701fd455c6706fa126d71ffcc4b4cddfca35', gap: "1", "align-items": "center", class: "items_per_page" }, index.h("bds-typo", { key: '7e8080d571bbcda9e5068e11212a6bb68b3271ae', variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), index.h("bds-select", { key: '3a178d433d0af2a38cc2110719998177c4ed16ed', class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, (_a = this.itemsPage) === null || _a === void 0 ? void 0 : _a.map((el, index$1) => (index.h("bds-select-option", { key: index$1, value: el, onClick: () => this.itemSelected(el) }, el)))), index.h("bds-typo", { key: '0fcac56ec3a2d563f207756e20b19d4b0ea1c53a', variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), index.h("bds-grid", { key: '3176fa098bc9fc14f11d560530f2e09120d6c0af', gap: "1", "align-items": "center", class: "actions" }, index.h("bds-button-icon", { key: '9ed8074ea00824f06b31ac26b9c02e60f5b83d8a', onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), index.h("bds-button-icon", { key: 'd44637f2db7dd0185f036c9d93d3dee75163d3af', onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), index.h("bds-select", { key: 'd1e8ec89e670085489d3ff15e3b66a80b336d0d2', class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index$1) => (index.h("bds-select-option", { key: index$1, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (index.h("bds-typo", { key: '645b64e662ffc126db67dbe3b35f2fbec4cf68ba', class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), index.h("bds-button-icon", { key: '95be37d06701326ec3bc4da20f3e5c877358c582', onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), index.h("bds-button-icon", { key: '52f61ff51830d564c032c8ccfc6660b6b0cce22a', onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "pages": ["pagesChanged"],
        "startedPage": ["pagesChanged"],
        "value": ["valueChanged"],
        "itemValue": ["itemSelected"]
    }; }
};
Pagination.style = paginationCss;

exports.bds_pagination = Pagination;
//# sourceMappingURL=bds-pagination.entry.cjs.js.map

//# sourceMappingURL=bds-pagination.cjs.entry.js.map