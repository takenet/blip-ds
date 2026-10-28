import { Host, h } from "@stencil/core";
import { getScrollParent } from "../../utils/position-element";
import { pt_BR, en_US, es_MX } from "./languages";
export class Pagination {
    constructor() {
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
        return (h(Host, { key: '24ad185c75f9f4ddfa37bc2d75c444df6881adda', class: { full_width: this.pageCounter } }, h("bds-grid", { key: '14cd895c86fdddde9ec5a2d350ec7aee59109623', "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { key: '7586c50ebe8aab65b155e4ca82c4628d41a2f17b', gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { key: 'ca5cfb2bcb327b41c5ff50c66a4a94ac8920ce0b', variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { key: '70388802ebf6a11a05c32a66d0f82942dbe934bc', class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, (_a = this.itemsPage) === null || _a === void 0 ? void 0 : _a.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { key: '472205346d2a73f2b1d37f3f953c92f13f25a15b', variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { key: 'd2dd290fe5d66bbc32a50131913db8bee116dc18', gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { key: '0ec9bcc8973db44fc6095275311cdf1470ddc63b', onBdsClick: (ev) => this.firstPage(ev), disabled: disableBackActions, size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { key: '494bc250888dea40794b3ef3e449e7e946d5a363', onBdsClick: (ev) => this.previewPage(ev), disabled: disableBackActions, size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { key: '18591b25e7b10925f391fbc243646722efd982f4', class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { key: 'd5480f611e1a07dbaeee9b5fb33b7c002376af17', class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { key: '8dd40418c68a40e29f124f1c409d10a06d9413ae', onBdsClick: (ev) => this.nextPage(ev), disabled: disableForwardActions, size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { key: 'bcf9f3f6c461fd5e9c5dfbd0270d3f241a574c8d', onBdsClick: (ev) => this.lastPage(ev), disabled: disableForwardActions, size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
    }
    static get is() { return "bds-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pagination.css"]
        };
    }
    static get properties() {
        return {
            "pages": {
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
                    "text": "Propriedade para receber o n\u00FAmero total de p\u00E1ginas, baseado no total de itens e itens por p\u00E1gina."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "pages"
            },
            "startedPage": {
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
                    "text": "Propriedade que define a p\u00E1gina inicial ao renderizar o componente."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "started-page"
            },
            "optionsPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PaginationOptionsPositionType",
                    "resolved": "\"auto\" | \"bottom\" | \"top\"",
                    "references": {
                        "PaginationOptionsPositionType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/pagination/pagination.tsx",
                            "id": "src/components/pagination/pagination.tsx::PaginationOptionsPositionType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a posi\u00E7\u00E3o do menu de op\u00E7\u00F5es. Pode ser 'bottom' ou 'top'.\nPadr\u00E3o \u00E9 'auto', que ajusta automaticamente a posi\u00E7\u00E3o."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "options-position",
                "defaultValue": "'auto'"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page-counter",
                "defaultValue": "false"
            },
            "itemsPage": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "items-page"
            },
            "numberItems": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "number-items"
            },
            "language": {
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
                    "text": ""
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
                    "text": "Propriedade de teste para especificamente testar a a\u00E7\u00E3o do bot\u00E3o inicial.\ndtButtonInitial \u00E9 o data-test para o bot\u00E3o inicial."
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
                    "text": "Propriedade de teste para especificamente testar a a\u00E7\u00E3o do bot\u00E3o de p\u00E1gina anterior.\ndtButtonPrev \u00E9 o data-test para o bot\u00E3o anterior."
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
                    "text": "Propriedade de teste para especificamente testar o seletor de n\u00FAmero de p\u00E1ginas.\ndtSelectNumber \u00E9 o data-test para o seletor de n\u00FAmero de p\u00E1ginas."
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
                    "text": "Propriedade de teste para especificamente testar a a\u00E7\u00E3o do bot\u00E3o de pr\u00F3xima p\u00E1gina.\ndtButtonNext \u00E9 o data-test para o bot\u00E3o pr\u00F3ximo."
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
                    "text": "Propriedade de teste para especificamente testar a a\u00E7\u00E3o do bot\u00E3o final.\ndtButtonEnd \u00E9 o data-test para o bot\u00E3o final."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-end",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "value": {},
            "itemValue": {},
            "openSelect": {},
            "paginationNumbers": {},
            "itemsPerPage": {},
            "intoView": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsPaginationChange",
                "name": "bdsPaginationChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento emitido quando o valor da p\u00E1gina atual \u00E9 alterado.\nPode ser escutado para realizar a\u00E7\u00F5es espec\u00EDficas ao mudar de p\u00E1gina."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "bdsItemsPerPageChange",
                "name": "bdsItemsPerPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento emitido quando o valor da p\u00E1gina atual \u00E9 alterado.\nPode ser escutado para realizar a\u00E7\u00F5es espec\u00EDficas ao mudar de p\u00E1gina."
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
                "methodName": "pagesChanged"
            }, {
                "propName": "startedPage",
                "methodName": "pagesChanged"
            }, {
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "itemValue",
                "methodName": "itemSelected"
            }];
    }
}
