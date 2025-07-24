'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const positionElement = require('./position-element-dc48e4da.js');

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

// Constante que define o tamanho do chunk de páginas a serem carregadas por vez
const PAGE_LOAD_CHUNK_SIZE = 100;
const Pagination = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsPaginationChange = index.createEvent(this, "bdsPaginationChange", 7);
    this.bdsItemsPerPageChange = index.createEvent(this, "bdsItemsPerPageChange", 7);
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
    /**
     * Manipula o evento de scroll no select para implementar lazy loading.
     */
    this.onSelectScroll = (event) => {
      const target = event.target;
      const threshold = 50; // Pixels do final para carregar mais
      // Verifica se o usuário está próximo do final da lista
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - threshold) {
        this.loadMorePages();
      }
    };
    this.value = this.startedPage;
    this.itemValue = undefined;
    this.openSelect = undefined;
    this.paginationNumbers = [];
    this.visiblePageOptions = [];
    this.loadedPagesCount = PAGE_LOAD_CHUNK_SIZE;
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
    this.intoView = positionElement.getScrollParent(this.el);
    this.processItemsPage();
    if (this.pageCounter) {
      this.itemValue = this.itemsPage[0];
    }
    this.itemSelected(this.itemValue);
    this.countItem();
  }
  componentDidLoad() {
    this.setupSelectScrollListener();
  }
  componentDidUpdate() {
    this.setupSelectScrollListener();
  }
  /**
   * Configura o event listener de scroll no dropdown do select.
   */
  setupSelectScrollListener() {
    if (this.selectElement) {
      // Remove listener existente para evitar duplicatas
      this.removeSelectScrollListener();
      // Adiciona listener ao dropdown do select
      const dropdown = this.selectElement.shadowRoot?.querySelector('.select__options');
      if (dropdown) {
        dropdown.addEventListener('scroll', this.onSelectScroll);
      }
    }
  }
  /**
   * Remove o event listener de scroll.
   */
  removeSelectScrollListener() {
    if (this.selectElement) {
      const dropdown = this.selectElement.shadowRoot?.querySelector('.select__options');
      if (dropdown) {
        dropdown.removeEventListener('scroll', this.onSelectScroll);
      }
    }
  }
  disconnectedCallback() {
    this.removeSelectScrollListener();
  }
  pagesChanged() {
    this.loadedPagesCount = PAGE_LOAD_CHUNK_SIZE; // Reset para PAGE_LOAD_CHUNK_SIZE páginas conforme solicitado
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
   * Implementa lazy loading conforme solicitado: mostra páginas consecutivas de 1 até loadedPagesCount,
   * expandindo conforme o usuário faz scroll.
   */
  updateVisiblePageOptions() {
    if (!this.pages || this.pages <= 0) {
      this.visiblePageOptions = [];
      return;
    }
    // Para um número pequeno de páginas (≤PAGE_LOAD_CHUNK_SIZE), mostra todas
    if (this.pages <= PAGE_LOAD_CHUNK_SIZE) {
      this.visiblePageOptions = [...this.paginationNumbers];
      return;
    }
    // Para páginas > PAGE_LOAD_CHUNK_SIZE, mostra páginas consecutivas de 1 até loadedPagesCount
    const maxPagesToShow = Math.min(this.loadedPagesCount, this.pages);
    this.visiblePageOptions = [];
    for (let i = 1; i <= maxPagesToShow; i++) {
      this.visiblePageOptions.push(i);
    }
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
  /**
   * Carrega mais páginas quando o usuário scroll próximo ao final.
   * Implementa lazy loading conforme solicitado: carrega PAGE_LOAD_CHUNK_SIZE páginas por vez.
   */
  loadMorePages() {
    if (this.loadedPagesCount < this.pages) {
      // Incrementa em PAGE_LOAD_CHUNK_SIZE páginas por vez conforme solicitado
      const newLoadedCount = Math.min(this.pages, this.loadedPagesCount + PAGE_LOAD_CHUNK_SIZE);
      if (newLoadedCount > this.loadedPagesCount) {
        this.loadedPagesCount = newLoadedCount;
        this.updateVisiblePageOptions();
      }
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
    return (index.h(index.Host, { class: { full_width: this.pageCounter } }, index.h("bds-grid", { "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (index.h("bds-grid", { gap: "1", "align-items": "center", class: "items_per_page" }, index.h("bds-typo", { variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), index.h("bds-select", { class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, this.itemsPage?.map((el, index$1) => (index.h("bds-select-option", { key: index$1, value: el, onClick: () => this.itemSelected(el) }, el)))), index.h("bds-typo", { variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), index.h("bds-grid", { gap: "1", "align-items": "center", class: "actions" }, index.h("bds-button-icon", { onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), index.h("bds-button-icon", { onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), index.h("bds-select", { ref: (el) => this.selectElement = el, class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.visiblePageOptions.map((el, index$1) => (index.h("bds-select-option", { key: index$1, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (index.h("bds-typo", { class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), index.h("bds-button-icon", { onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), index.h("bds-button-icon", { onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
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
