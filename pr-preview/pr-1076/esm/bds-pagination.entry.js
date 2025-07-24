import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';
import { g as getScrollParent } from './position-element-d853cc63.js';

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
    registerInstance(this, hostRef);
    this.bdsPaginationChange = createEvent(this, "bdsPaginationChange", 7);
    this.bdsItemsPerPageChange = createEvent(this, "bdsItemsPerPageChange", 7);
    this.nextPage = (event) => {
      const el = this.value;
      if (el < this.pages) {
        event.preventDefault();
        const newValue = this.value + 1;
        // Update visible options BEFORE changing value to ensure select component can find the option
        this.ensurePageIsVisible(newValue);
        this.value = newValue;
        this.updateItemRange();
      }
    };
    this.previewPage = (event) => {
      const el = this.value;
      if (el > 1) {
        event.preventDefault();
        const newValue = this.value - 1;
        // Update visible options BEFORE changing value to ensure select component can find the option
        this.ensurePageIsVisible(newValue);
        this.value = newValue;
        this.updateItemRange();
      }
    };
    this.firstPage = (event) => {
      const el = this.value;
      if (el > 1) {
        event.preventDefault();
        const newValue = this.paginationNumbers[0];
        // Update visible options BEFORE changing value to ensure select component can find the option
        this.ensurePageIsVisible(newValue);
        this.value = newValue;
        this.updateItemRange();
      }
    };
    this.lastPage = (event) => {
      const el = this.value;
      if (el < this.pages) {
        event.preventDefault();
        const newValue = this.pages;
        // Update visible options BEFORE changing value to ensure select component can find the option
        this.ensurePageIsVisible(newValue);
        // Implementar novo comportamento: ao clicar na última página,
        // carregar apenas as últimas PAGE_LOAD_CHUNK_SIZE páginas
        if (this.pages > PAGE_LOAD_CHUNK_SIZE) {
          this.isReversePaginationMode = true;
          this.loadedPagesCount = PAGE_LOAD_CHUNK_SIZE;
          this.updateVisiblePageOptions();
        }
        this.value = newValue;
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
     * Manipula o evento de scroll no select para implementar lazy loading bidirecional.
     */
    this.onSelectScroll = (event) => {
      const target = event.target;
      const threshold = 50; // Pixels do final/início para carregar mais
      if (this.isReversePaginationMode) {
        // No modo reverso, verifica se o usuário está no topo para carregar páginas anteriores
        if (target.scrollTop <= threshold) {
          this.loadPreviousPages();
        }
      }
      else {
        // No modo normal, verifica se o usuário está no final para carregar mais páginas
        if (target.scrollTop + target.clientHeight >= target.scrollHeight - threshold) {
          this.loadMorePages();
        }
      }
    };
    this.value = this.startedPage;
    this.itemValue = undefined;
    this.openSelect = undefined;
    this.paginationNumbers = [];
    this.visiblePageOptions = [];
    this.loadedPagesCount = PAGE_LOAD_CHUNK_SIZE;
    this.isReversePaginationMode = false;
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
    this.isReversePaginationMode = false; // Reset para modo normal
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
   * Implementa lazy loading com modo normal (do início) e modo reverso (do final).
   *
   * Comportamento:
   * - Para ≤100 páginas: mostra todas
   * - Para >100 páginas no modo normal: mostra páginas 1 até loadedPagesCount
   * - Para >100 páginas no modo reverso: mostra últimas loadedPagesCount páginas
   * - Garante que a página atual esteja sempre visível nas opções
   */
  updateVisiblePageOptions() {
    if (!this.pages || this.pages <= 0) {
      this.visiblePageOptions = [];
      return;
    }
    // Para um número pequeno de páginas (≤PAGE_LOAD_CHUNK_SIZE), mostra todas
    if (this.pages <= PAGE_LOAD_CHUNK_SIZE) {
      this.visiblePageOptions = [...this.paginationNumbers];
      this.isReversePaginationMode = false;
      return;
    }
    const currentPage = this.value || 1;
    // Determinar se devemos usar modo reverso baseado na página atual
    // Se a página atual está próxima do final (últimas 50 páginas), usar modo reverso
    const shouldUseReverseMode = currentPage > (this.pages - 50);
    if (shouldUseReverseMode) {
      this.isReversePaginationMode = true;
      this.updateVisiblePageOptionsReverse();
    }
    else {
      // Verificar se a página atual está além das páginas carregadas no modo normal
      if (currentPage > this.loadedPagesCount) {
        // Expandir o range para incluir a página atual
        this.loadedPagesCount = Math.max(this.loadedPagesCount, currentPage);
      }
      this.isReversePaginationMode = false;
      this.updateVisiblePageOptionsNormal();
    }
  }
  /**
   * Atualiza as opções no modo normal (do início para o final).
   */
  updateVisiblePageOptionsNormal() {
    const maxPagesToShow = Math.min(this.loadedPagesCount, this.pages);
    this.visiblePageOptions = [];
    for (let i = 1; i <= maxPagesToShow; i++) {
      this.visiblePageOptions.push(i);
    }
  }
  /**
   * Atualiza as opções no modo reverso (do final para o início).
   */
  updateVisiblePageOptionsReverse() {
    const maxPagesToShow = Math.min(this.loadedPagesCount, this.pages);
    const startPage = Math.max(1, this.pages - maxPagesToShow + 1);
    this.visiblePageOptions = [];
    for (let i = startPage; i <= this.pages; i++) {
      this.visiblePageOptions.push(i);
    }
  }
  optionSelected(index) {
    // No need to call ensurePageIsVisible here since the option is already visible
    // (user selected it from the dropdown)
    this.value = index;
    this.openOptions();
    this.updateItemRange();
  }
  /**
   * Ensures that a specific page number is visible in the visiblePageOptions.
   * This method should be called BEFORE changing the value to prevent the select
   * component from trying to display a value that doesn't have a corresponding option.
   */
  ensurePageIsVisible(pageNumber) {
    if (!pageNumber || pageNumber < 1 || pageNumber > this.pages) {
      return;
    }
    // If the page is already visible, no need to update
    if (this.visiblePageOptions.includes(pageNumber)) {
      return;
    }
    // Determine if we should use reverse mode based on the target page
    const shouldUseReverseMode = pageNumber > (this.pages - 50);
    if (shouldUseReverseMode) {
      this.isReversePaginationMode = true;
      // Ensure we load enough pages to include the target page
      const minPagesNeeded = this.pages - pageNumber + 1;
      if (this.loadedPagesCount < minPagesNeeded) {
        this.loadedPagesCount = Math.min(this.pages, Math.max(PAGE_LOAD_CHUNK_SIZE, minPagesNeeded));
      }
    }
    else {
      this.isReversePaginationMode = false;
      // Ensure we load enough pages to include the target page
      if (this.loadedPagesCount < pageNumber) {
        this.loadedPagesCount = Math.max(this.loadedPagesCount, pageNumber);
      }
    }
    // Update the visible options with the new configuration
    this.updateVisiblePageOptions();
  }
  /**
   * Allows navigation to a specific page even if not in visible options.
   */
  navigateToPage(pageNumber) {
    const page = Math.max(1, Math.min(pageNumber, this.pages));
    if (page !== this.value) {
      // Update visible options BEFORE changing value to ensure select component can find the option
      this.ensurePageIsVisible(page);
      this.value = page;
      this.updateItemRange();
    }
  }
  /**
   * Carrega mais páginas quando o usuário scroll próximo ao final (modo normal).
   * Implementa lazy loading conforme solicitado: carrega PAGE_LOAD_CHUNK_SIZE páginas por vez.
   */
  loadMorePages() {
    if (!this.isReversePaginationMode && this.loadedPagesCount < this.pages) {
      // Incrementa em PAGE_LOAD_CHUNK_SIZE páginas por vez conforme solicitado
      const newLoadedCount = Math.min(this.pages, this.loadedPagesCount + PAGE_LOAD_CHUNK_SIZE);
      if (newLoadedCount > this.loadedPagesCount) {
        this.loadedPagesCount = newLoadedCount;
        this.updateVisiblePageOptions();
      }
    }
  }
  /**
   * Carrega páginas anteriores quando o usuário scroll próximo ao topo (modo reverso).
   * Implementa lazy loading reverso: carrega PAGE_LOAD_CHUNK_SIZE páginas anteriores por vez.
   */
  loadPreviousPages() {
    if (this.isReversePaginationMode && this.loadedPagesCount < this.pages) {
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
    return (h(Host, { class: { full_width: this.pageCounter } }, h("bds-grid", { "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, this.itemsPage?.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { ref: (el) => this.selectElement = el, class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.visiblePageOptions.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "pages": ["pagesChanged"],
    "startedPage": ["pagesChanged"],
    "value": ["valueChanged"],
    "itemValue": ["itemSelected"]
  }; }
};
Pagination.style = paginationCss;

export { Pagination as bds_pagination };
