import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { c as getScrollParent } from './position-element-CyGI72Zy.js';

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
        registerInstance(this, hostRef);
        this.bdsPaginationChange = createEvent(this, "bdsPaginationChange");
        this.bdsItemsPerPageChange = createEvent(this, "bdsItemsPerPageChange");
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
        this.intoView = getScrollParent(this.el);
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
        return (h(Host, { key: '2e25864f4b7ff9ff664b689f42cdb51e70110237', class: { full_width: this.pageCounter } }, h("bds-grid", { key: 'ca892a4406861e91799554b13f81d485d67519a8', "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { key: 'a6557f43e245ef4b26cf3ed3a4edeb87aa48f557', gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { key: '52bed4b29f1d3aee78c8a9a0fdc9fa4419f2af91', variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { key: '44ea4a6df7d5fd0bf35888883f9fc14fd4e82afd', class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, (_a = this.itemsPage) === null || _a === void 0 ? void 0 : _a.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { key: '6cc7eedbc63a7ba6c02bbf08c034d8d9068d005e', variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { key: 'b11c140eaf3f9c187b19d7c404a776c7169c38b7', gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { key: 'd6a90743e72f394b50eecba60d51e45a3ac434ea', onBdsClick: (ev) => this.firstPage(ev), disabled: disableBackActions, size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { key: 'f9577bf27e2fdafa530da76d1659f2dc0aff0b77', onBdsClick: (ev) => this.previewPage(ev), disabled: disableBackActions, size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { key: '03f85ede354a3a7ece372a980dca018927a68230', class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { key: '4f01a7d8a94a18de0d28dcfda687e949e27ea502', class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { key: 'ec28cee36adaff5c6383ea95b66d5228d285f50d', onBdsClick: (ev) => this.nextPage(ev), disabled: disableForwardActions, size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { key: '5908580d828f13a146ae1ea5d7bebfc1186c635a', onBdsClick: (ev) => this.lastPage(ev), disabled: disableForwardActions, size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
    }
    get el() { return getElement(this); }
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

export { Pagination as bds_pagination };
