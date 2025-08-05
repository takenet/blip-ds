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
        return (h(Host, { key: '4c07f6cd577288c77530c93580ec946b269a08f4', class: { full_width: this.pageCounter } }, h("bds-grid", { key: '8fc9bb197dc27c0b9fbda616ead130688f01a020', "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { key: 'f699701fd455c6706fa126d71ffcc4b4cddfca35', gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { key: '7e8080d571bbcda9e5068e11212a6bb68b3271ae', variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { key: '3a178d433d0af2a38cc2110719998177c4ed16ed', class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, (_a = this.itemsPage) === null || _a === void 0 ? void 0 : _a.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { key: '0fcac56ec3a2d563f207756e20b19d4b0ea1c53a', variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { key: '3176fa098bc9fc14f11d560530f2e09120d6c0af', gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { key: '9ed8074ea00824f06b31ac26b9c02e60f5b83d8a', onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { key: 'd44637f2db7dd0185f036c9d93d3dee75163d3af', onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { key: 'd1e8ec89e670085489d3ff15e3b66a80b336d0d2', class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { key: '645b64e662ffc126db67dbe3b35f2fbec4cf68ba', class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { key: '95be37d06701326ec3bc4da20f3e5c877358c582', onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { key: '52f61ff51830d564c032c8ccfc6660b6b0cce22a', onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
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
                "attribute": "pages",
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
                "reflect": true
            },
            "startedPage": {
                "type": "number",
                "attribute": "started-page",
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
                "reflect": false
            },
            "optionsPosition": {
                "type": "string",
                "attribute": "options-position",
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
                "defaultValue": "'auto'"
            },
            "pageCounter": {
                "type": "boolean",
                "attribute": "page-counter",
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
                "defaultValue": "false"
            },
            "itemsPage": {
                "type": "any",
                "attribute": "items-page",
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
                "reflect": true
            },
            "numberItems": {
                "type": "number",
                "attribute": "number-items",
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
                "reflect": false
            },
            "language": {
                "type": "string",
                "attribute": "language",
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
                "defaultValue": "'pt_BR'"
            },
            "dtButtonInitial": {
                "type": "string",
                "attribute": "dt-button-initial",
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
                "defaultValue": "null"
            },
            "dtButtonPrev": {
                "type": "string",
                "attribute": "dt-button-prev",
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
                "defaultValue": "null"
            },
            "dtSelectNumber": {
                "type": "string",
                "attribute": "dt-select-number",
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
                "defaultValue": "null"
            },
            "dtButtonNext": {
                "type": "string",
                "attribute": "dt-button-next",
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
                "defaultValue": "null"
            },
            "dtButtonEnd": {
                "type": "string",
                "attribute": "dt-button-end",
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
//# sourceMappingURL=pagination.js.map
