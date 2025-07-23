import { Host, h } from '@stencil/core';
import { getScrollParent } from '../../utils/position-element';
import { pt_BR, en_US, es_MX } from './languages';
export class Pagination {
  constructor() {
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
    this.value = this.startedPage;
    this.itemValue = undefined;
    this.openSelect = undefined;
    this.paginationNumbers = [];
    this.visiblePageOptions = [];
    this.itemsPerPage = undefined;
    this.intoView = null;
    this.pages = undefined;
    this.startedPage = undefined;
    this.optionsPosition = 'auto';
    this.pageCounter = false;
    this.itemsPage = undefined;
    this.numberItems = undefined;
    this.language = 'pt_BR';
    this.dtButtonInitial = null;
    this.dtButtonPrev = null;
    this.dtSelectNumber = null;
    this.dtButtonNext = null;
    this.dtButtonEnd = null;
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
    this.updateVisiblePageOptions();
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
    this.updateVisiblePageOptions();
  }
  /**
   * Atualiza as opções de página visíveis para renderização otimizada.
   * Mostra apenas um subconjunto das páginas próximas à página atual.
   */
  updateVisiblePageOptions() {
    if (!this.pages || this.pages <= 0) {
      this.visiblePageOptions = [];
      return;
    }
    const maxVisibleOptions = 50; // Limite máximo de opções renderizadas
    const currentPage = this.value || 1;
    // Se o total de páginas for pequeno, mostra todas
    if (this.pages <= maxVisibleOptions) {
      this.visiblePageOptions = [...this.paginationNumbers];
      return;
    }
    // Para muitas páginas, mostra um subconjunto otimizado
    const visiblePages = new Set();
    // Sempre inclui a primeira página
    visiblePages.add(1);
    // Sempre inclui a última página
    visiblePages.add(this.pages);
    // Páginas ao redor da página atual (±5)
    const range = 5;
    const start = Math.max(1, currentPage - range);
    const end = Math.min(this.pages, currentPage + range);
    for (let i = start; i <= end; i++) {
      visiblePages.add(i);
    }
    // Adiciona algumas páginas intermediárias para melhor navegação
    if (this.pages > 20) {
      // Páginas próximas ao início
      for (let i = 2; i <= Math.min(5, this.pages - 1); i++) {
        visiblePages.add(i);
      }
      // Páginas próximas ao fim
      for (let i = Math.max(this.pages - 4, 2); i < this.pages; i++) {
        visiblePages.add(i);
      }
      // Algumas páginas intermediárias baseadas no total
      const quarterPage = Math.floor(this.pages / 4);
      const halfPage = Math.floor(this.pages / 2);
      const threeQuarterPage = Math.floor(this.pages * 3 / 4);
      if (quarterPage > 1 && quarterPage < this.pages) {
        visiblePages.add(quarterPage);
      }
      if (halfPage > 1 && halfPage < this.pages) {
        visiblePages.add(halfPage);
      }
      if (threeQuarterPage > 1 && threeQuarterPage < this.pages) {
        visiblePages.add(threeQuarterPage);
      }
    }
    // Converte para array ordenado e limita o tamanho
    this.visiblePageOptions = Array.from(visiblePages)
      .sort((a, b) => a - b)
      .slice(0, maxVisibleOptions);
  }
  optionSelected(index) {
    this.value = index;
    this.openOptions();
    this.updateItemRange();
  }
  /**
   * Permite navegar para uma página específica mesmo que não esteja nas opções visíveis.
   */
  navigateToPage(pageNumber) {
    const page = Math.max(1, Math.min(pageNumber, this.pages));
    if (page !== this.value) {
      this.value = page;
      this.updateItemRange();
    }
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
    const { currentLanguage } = this;
    return (h(Host, { class: { full_width: this.pageCounter } }, h("bds-grid", { "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, this.itemsPage?.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.visiblePageOptions.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
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
        "attribute": "pages",
        "reflect": true
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
        "attribute": "started-page",
        "reflect": false
      },
      "optionsPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PaginationOptionsPositionType",
          "resolved": "\"auto\" | \"bottom\" | \"top\"",
          "references": {
            "PaginationOptionsPositionType": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Define a posi\u00E7\u00E3o do menu de op\u00E7\u00F5es. Pode ser 'bottom' ou 'top'.\nPadr\u00E3o \u00E9 'auto', que ajusta automaticamente a posi\u00E7\u00E3o."
        },
        "attribute": "options-position",
        "reflect": false,
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
        "attribute": "page-counter",
        "reflect": false,
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
        "attribute": "items-page",
        "reflect": true
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
        "attribute": "number-items",
        "reflect": false
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
        "attribute": "language",
        "reflect": false,
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
        "attribute": "dt-button-initial",
        "reflect": false,
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
        "attribute": "dt-button-prev",
        "reflect": false,
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
        "attribute": "dt-select-number",
        "reflect": false,
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
        "attribute": "dt-button-next",
        "reflect": false,
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
        "attribute": "dt-button-end",
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
      "visiblePageOptions": {},
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
          "original": "any",
          "resolved": "any",
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
          "original": "any",
          "resolved": "any",
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
