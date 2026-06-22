'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const breadcrumbCss = ":host{display:block}:host *{color:var(--color-content-default, #282828)}.button--icon{-webkit-transform:rotate(180deg);transform:rotate(180deg);color:var(--color-content-ghost, #8c8c8c)}.breadcrumb__button--0{padding-left:0}.breadcrumb__button--0 .button--icon{display:none}.breadcrumb__button--1{padding-left:8px}.breadcrumb__button--2{padding-left:16px}.breadcrumb__button--3{padding-left:24px}.breadcrumb__button--4{padding-left:32px}.breadcrumb__link--text{color:var(--color-content-disable, #595959)}.breadcrumb__link{text-decoration:none}.breadcrumb__item{-webkit-transition:color 0.15s, background-color 0.15s;transition:color 0.15s, background-color 0.15s}.breadcrumb__item bds-typo,.breadcrumb__item bds-icon,.breadcrumb__item .breadcrumb__text{color:var(--color-content-ghost, #8c8c8c)}.breadcrumb__item bds-typo:hover,.breadcrumb__item .breadcrumb__text:hover{color:var(--color-content-default, #282828)}.breadcrumb__item--active{border-radius:12px}.breadcrumb__item--active:hover{background-color:var(--color-surface-3, #e3e3e3)}.breadcrumb__item--active bds-typo,.breadcrumb__item--active bds-icon,.breadcrumb__item--active .breadcrumb__text{color:var(--color-content-default, #282828)}";

const Breadcrumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    // internal normalized boolean value to avoid re-assigning the prop inside its watcher
    this.wrapItemsBool = true;
    this.items = [];
    this.wrapItems = true;
    this.parsedItems = [];
    this.isDropdownOpen = false;
  }
  handleWrapItemsChange(newValue) {
    if (typeof newValue === 'string') {
      if (newValue === 'true')
        this.wrapItemsBool = true;
      else if (newValue === 'false')
        this.wrapItemsBool = false;
      else if (newValue === '')
        this.wrapItemsBool = true; // presence-only attribute => true
      else
        this.wrapItemsBool = !!newValue;
    }
    else {
      this.wrapItemsBool = !!newValue;
    }
  }
  parseItems(newValue) {
    if (typeof newValue === 'string') {
      try {
        this.parsedItems = JSON.parse(newValue);
      }
      catch {
        this.parsedItems = [];
      }
    }
    else {
      this.parsedItems = newValue;
    }
  }
  componentWillLoad() {
    this.parseItems(this.items);
    // Normalize initial wrapItems value with preference for explicit attribute
    const attr = this.hostElement.getAttribute('wrap-items');
    if (attr === null) {
      // attribute absent — use the prop value (could be boolean or string)
      this.handleWrapItemsChange(this.wrapItems);
    }
    else if (attr === '') {
      // presence-only attribute means true
      this.wrapItemsBool = true;
    }
    else if (attr === 'false') {
      this.wrapItemsBool = false;
    }
    else if (attr === 'true') {
      this.wrapItemsBool = true;
    }
    else {
      this.wrapItemsBool = !!attr;
    }
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  render() {
    if (!this.parsedItems || this.parsedItems.length === 0) {
      return index.h("p", null, "Sem itens para exibir no Breadcrumb.");
    }
    const visibleItems = this.wrapItemsBool && this.parsedItems.length > 3
      ? [
        this.parsedItems[0],
        { label: '...', href: null },
        this.parsedItems[this.parsedItems.length - 1],
      ]
      : this.parsedItems;
    const renderBreadcrumbItem = (item, index$1) => {
      const isLastItem = index$1 === visibleItems.length - 1;
      const renderBasedOnLabel = (item) => {
        if (item.label === '...') {
          return (index.h("bds-dropdown", { "active-mode": "click", position: "auto", open: this.isDropdownOpen }, index.h("bds-grid", { slot: "dropdown-content" }, index.h("bds-grid", { direction: "column", padding: "1", gap: "half" }, this.parsedItems.slice(1, -1).map((subItem, idx) => (index.h("bds-grid", { class: `breadcrumb__button--${idx}`, key: subItem.label + idx }, subItem.href ? (index.h("a", { href: subItem.href, class: `breadcrumb__link breadcrumb__button--${idx}` }, index.h("bds-grid", { "align-items": "center", gap: "half" }, index.h("bds-icon", { name: "reply", theme: "outline", class: "button--icon", size: "x-small" }), index.h("bds-button", { variant: "text", color: "content", size: "short" }, subItem.label)))) : (index.h("span", null, subItem.label))))))), index.h("bds-grid", { slot: "dropdown-activator", "align-items": "center" }, index.h("bds-button", { variant: "text", color: "content", size: "short", onClick: () => this.toggleDropdown(), "icon-left": "more-options-horizontal" }))));
        }
        if (item.href) {
          return (index.h("bds-typo", { variant: "fs-20", margin: false, class: "breadcrumb__link--text" }, index.h("a", { href: item.href, class: "breadcrumb__link breadcrumb__text" }, item.label)));
        }
        return (index.h("bds-typo", { variant: "fs-20", bold: isLastItem ? 'bold' : 'regular', margin: false, class: "breadcrumb__text" }, item.label));
      };
      return (index.h("bds-grid", { class: {
          breadcrumb__item: true,
          'breadcrumb__item--active': isLastItem,
        }, "aria-current": isLastItem ? 'page' : null, key: item.label + index$1, "align-items": "center" }, index.h("bds-grid", { direction: "row", "align-items": "center", padding: "x-1" }, index.h("bds-grid", { direction: "row", "align-items": "center", padding: "y-half" }, renderBasedOnLabel(item))), !isLastItem && index.h("bds-icon", { name: "arrow-right", size: "medium", class: "breadcrumb__text" })));
    };
    return (index.h("nav", { "aria-label": "breadcrumb" }, index.h("bds-grid", { direction: "row", "align-items": "center" }, visibleItems.map((element, index) => renderBreadcrumbItem(element, index)))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "wrapItems": ["handleWrapItemsChange"],
    "items": ["parseItems"]
  }; }
};
Breadcrumb.style = breadcrumbCss;

exports.bds_breadcrumb = Breadcrumb;
