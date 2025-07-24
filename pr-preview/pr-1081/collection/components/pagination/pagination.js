import { Host, h } from '@stencil/core';
import { getScrollParent } from '../../utils/position-element';
import { pt_BR, en_US, es_MX } from './languages';
export class Pagination {
  constructor() {
    /**
     * Tamanho do batch de páginas carregadas por vez.
     */
    this.pageLoadSize = 100;
    this.nextPage = (event) => {
      const el = this.value;
      if (el < this.pages) {
        event.preventDefault();
        const newValue = this.value + 1;
        // Check if we need to load more pages
        if (newValue > this.loadedPageRange.end) {
          this.loadMorePages('next');
        }
        this.value = newValue;
        this.updateItemRange();
      }
    };
    this.previewPage = (event) => {
      const el = this.value;
      if (el > 1) {
        event.preventDefault();
        const newValue = this.value - 1;
        // Check if we need to load more pages
        if (newValue < this.loadedPageRange.start) {
          this.loadMorePages('prev');
        }
        this.value = newValue;
        this.updateItemRange();
      }
    };
    this.firstPage = (event) => {
      const el = this.value;
      if (el > 1) {
        event.preventDefault();
        this.loadMorePages('first');
        this.value = 1;
        this.updateItemRange();
      }
    };
    this.lastPage = (event) => {
      const el = this.value;
      if (el < this.pages) {
        event.preventDefault();
        this.loadMorePages('last');
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
    /**
     * Manipula o scroll no dropdown de páginas para carregar mais opções
     */
    this.handleSelectScroll = (event) => {
      const target = event.target;
      const { scrollTop, scrollHeight, clientHeight } = target;
      // Check if scrolled to bottom (load next pages)
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        if (this.loadedPageRange.end < this.pages) {
          const currentNumbers = [...this.paginationNumbers];
          this.loadMorePages('next');
          // Merge with existing numbers to avoid jump
          this.paginationNumbers = [...currentNumbers, ...this.paginationNumbers.filter(num => !currentNumbers.includes(num))];
        }
      }
      // Check if scrolled to top (load previous pages)
      if (scrollTop <= 10) {
        if (this.loadedPageRange.start > 1) {
          const currentNumbers = [...this.paginationNumbers];
          this.loadMorePages('prev');
          // Merge with existing numbers to avoid jump
          this.paginationNumbers = [...this.paginationNumbers.filter(num => !currentNumbers.includes(num)), ...currentNumbers];
        }
      }
    };
    this.value = this.startedPage;
    this.itemValue = undefined;
    this.openSelect = undefined;
    this.paginationNumbers = [];
    this.loadedPageRange = { start: 1, end: 100 };
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
  /**
   * Carrega um range específico de páginas centrado na página fornecida
   */
  loadPageRange(targetPage) {
    if (!this.pages)
      return;
    const halfRange = Math.floor(this.pageLoadSize / 2);
    let start = Math.max(1, targetPage - halfRange);
    let end = Math.min(this.pages, start + this.pageLoadSize - 1);
    // Adjust start if we're near the end
    if (end - start < this.pageLoadSize - 1) {
      start = Math.max(1, end - this.pageLoadSize + 1);
    }
    this.loadedPageRange = { start, end };
    this.paginationNumbers = [];
    for (let i = start; i <= end; i++) {
      this.paginationNumbers.push(i);
    }
  }
  /**
   * Carrega mais páginas baseado na direção da navegação
   */
  loadMorePages(direction) {
    if (!this.pages)
      return;
    let newStart = this.loadedPageRange.start;
    let newEnd = this.loadedPageRange.end;
    switch (direction) {
      case 'next':
        if (newEnd < this.pages) {
          newStart = newEnd + 1;
          newEnd = Math.min(this.pages, newStart + this.pageLoadSize - 1);
        }
        break;
      case 'prev':
        if (newStart > 1) {
          newEnd = newStart - 1;
          newStart = Math.max(1, newEnd - this.pageLoadSize + 1);
        }
        break;
      case 'first':
        newStart = 1;
        newEnd = Math.min(this.pages, this.pageLoadSize);
        break;
      case 'last':
        newEnd = this.pages;
        newStart = Math.max(1, newEnd - this.pageLoadSize + 1);
        break;
    }
    this.loadedPageRange = { start: newStart, end: newEnd };
    this.paginationNumbers = [];
    for (let i = newStart; i <= newEnd; i++) {
      this.paginationNumbers.push(i);
    }
  }
  countPage() {
    if (this.paginationNumbers.length !== 0) {
      this.paginationNumbers = [];
    }
    if (this.paginationNumbers.length === 0) {
      // Load only a subset of pages for performance optimization
      const endPage = Math.min(this.pageLoadSize, this.pages || 0);
      this.loadedPageRange = { start: 1, end: endPage };
      for (let i = this.loadedPageRange.start; i <= this.loadedPageRange.end; i++) {
        this.paginationNumbers.push(i);
      }
      if (this.startedPage && this.startedPage < this.pages) {
        this.value = this.startedPage;
        // If started page is outside current range, load appropriate range
        if (this.startedPage > this.loadedPageRange.end) {
          this.loadPageRange(this.startedPage);
        }
      }
      else {
        this.value = this.paginationNumbers[0];
      }
    }
  }
  optionSelected(index) {
    // If the selected page is outside current range, load appropriate range
    if (index < this.loadedPageRange.start || index > this.loadedPageRange.end) {
      this.loadPageRange(index);
    }
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
    const { currentLanguage } = this;
    return (h(Host, { class: { full_width: this.pageCounter } }, h("bds-grid", { "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, this.itemsPage?.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
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
      "loadedPageRange": {},
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
