import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';
import { g as getScrollParent } from './position-element-dba422ab.js';

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
    registerInstance(this, hostRef);
    this.bdsPaginationChange = createEvent(this, "bdsPaginationChange", 7);
    this.bdsItemsPerPageChange = createEvent(this, "bdsItemsPerPageChange", 7);
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
    this.itemValue = this.itemsPage[0];
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
    const pages = this.numberItems / this.itemValue;
    this.pages = Math.ceil(pages);
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
    return (h(Host, { class: { full_width: this.pageCounter } }, h("bds-grid", { "justify-content": "space-between" }, this.itemsPerPage && this.itemsPage && (h("bds-grid", { gap: "1", "align-items": "center", class: "items_per_page" }, h("bds-typo", { variant: "fs-14" }, currentLanguage.itemsPerPage, ":"), h("bds-select", { class: "actions_select", value: this.itemValue, "options-position": this.optionsPosition }, (_a = this.itemsPage) === null || _a === void 0 ? void 0 : _a.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.itemSelected(el) }, el)))), h("bds-typo", { variant: "fs-14", "no-wrap": "true" }, this.startItem, "-", this.endItem, " ", currentLanguage.of, " ", this.numberItems))), h("bds-grid", { gap: "1", "align-items": "center", class: "actions" }, h("bds-button-icon", { onBdsClick: (ev) => this.firstPage(ev), size: "short", variant: "secondary", icon: "arrow-first", dataTest: this.dtButtonInitial }), h("bds-button-icon", { onBdsClick: (ev) => this.previewPage(ev), size: "short", variant: "secondary", icon: "arrow-left", dataTest: this.dtButtonPrev }), h("bds-select", { class: "actions_select", value: this.value, "options-position": this.optionsPosition }, this.paginationNumbers.map((el, index) => (h("bds-select-option", { key: index, value: el, onClick: () => this.optionSelected(el) }, el)))), this.pageCounter && (h("bds-typo", { class: "actions--text", variant: "fs-14", "no-wrap": "true" }, currentLanguage.of, " ", this.pages, " ", currentLanguage.pages)), h("bds-button-icon", { onBdsClick: (ev) => this.nextPage(ev), size: "short", variant: "secondary", icon: "arrow-right", dataTest: this.dtButtonNext }), h("bds-button-icon", { onBdsClick: (ev) => this.lastPage(ev), size: "short", variant: "secondary", icon: "arrow-last", dataTest: this.dtButtonEnd })))));
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
