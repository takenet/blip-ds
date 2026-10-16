import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { g as getScrollParent } from './p-BNEKIkjk.js';
import { d as defineCustomElement$8 } from './p-CDeshfPT.js';
import { d as defineCustomElement$7 } from './p-aiItKd3O.js';
import { d as defineCustomElement$6 } from './p-Cje8yEpK.js';
import { d as defineCustomElement$5 } from './p-zHA5tVzD.js';
import { d as defineCustomElement$4 } from './p-BMXqdNU0.js';
import { d as defineCustomElement$3 } from './p-Ds108EMR.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

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

const Pagination = /*@__PURE__*/ proxyCustomElement(class Pagination extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '29fc4c9befb21f1a8490c40c1c2f7837819d832d', class: { full_width: this.pageCounter } }, h("bds-grid", { key: '24a26addfe3bf18d19b86cc5b4b999e58a480d21', "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { key: 'c2fd2c7a76519dd684f18eede0f6abe7e735336d', gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { key: '0382e9f914c888aadb44d43a7a00e757585f1f61', variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { key: 'b04ec9eae1e40f98ff38d52d68fe0ae9ebeecb10', class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, (_a = this.itemsPage) === null || _a === void 0 ? void 0 : _a.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { key: '0f1c63468acbb8f9a58dd02201c32a3c56309a25', variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { key: '04a3311245aef58e2adb9e9d0851299d1aad8585', gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { key: '0fde259f9a0b530ab16f3298e7fb0b3d0044a07f', onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { key: '8c525250b44e0a968378fe11e6a0963463d67875', onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { key: '90ac41d69854d962e27a65466e83825261100c03', class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { key: 'ffac9437f92bcaa32f9c0226b90d3106c98446c4', class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { key: '0ce00928b72b665c26f8340f9f639549c2e17086', onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { key: '0175010a976e943a3b6408e2779e69f75ac43bfb', onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "pages": ["pagesChanged"],
        "startedPage": ["pagesChanged"],
        "value": ["valueChanged"],
        "itemValue": ["itemSelected"]
    }; }
    static get style() { return paginationCss; }
}, [1, "bds-pagination", {
        "pages": [1538],
        "startedPage": [2, "started-page"],
        "optionsPosition": [1, "options-position"],
        "pageCounter": [4, "page-counter"],
        "itemsPage": [1544, "items-page"],
        "numberItems": [2, "number-items"],
        "language": [1],
        "dtButtonInitial": [1, "dt-button-initial"],
        "dtButtonPrev": [1, "dt-button-prev"],
        "dtSelectNumber": [1, "dt-select-number"],
        "dtButtonNext": [1, "dt-button-next"],
        "dtButtonEnd": [1, "dt-button-end"],
        "value": [32],
        "itemValue": [32],
        "openSelect": [32],
        "paginationNumbers": [32],
        "itemsPerPage": [32],
        "intoView": [32]
    }, undefined, {
        "pages": ["pagesChanged"],
        "startedPage": ["pagesChanged"],
        "value": ["valueChanged"],
        "itemValue": ["itemSelected"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-pagination", "bds-button-icon", "bds-checkbox", "bds-grid", "bds-icon", "bds-select", "bds-select-option", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Pagination);
            }
            break;
        case "bds-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "bds-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-select-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsPagination = Pagination;
const defineCustomElement = defineCustomElement$1;

export { BdsPagination, defineCustomElement };
//# sourceMappingURL=bds-pagination.js.map

//# sourceMappingURL=bds-pagination.js.map