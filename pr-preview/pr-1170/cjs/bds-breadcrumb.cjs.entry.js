'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const breadcrumbCss = ":host{display:block}:host *{color:var(--color-content-default, #282828)}.button--icon{-webkit-transform:rotate(180deg);transform:rotate(180deg);color:var(--color-content-ghost, #8c8c8c)}.breadcrumb__button--0{padding-left:0}.breadcrumb__button--0 .button--icon{display:none}.breadcrumb__button--1{padding-left:8px}.breadcrumb__button--2{padding-left:16px}.breadcrumb__button--3{padding-left:24px}.breadcrumb__button--4{padding-left:32px}.breadcrumb__link--text{color:var(--color-content-disable, #595959)}.breadcrumb__link{text-decoration:none}.breadcrumb__item{-webkit-transition:color 0.15s, background-color 0.15s;transition:color 0.15s, background-color 0.15s}.breadcrumb__item bds-typo,.breadcrumb__item bds-icon,.breadcrumb__item .breadcrumb__text{color:var(--color-content-ghost, #8c8c8c)}.breadcrumb__item bds-typo:hover,.breadcrumb__item .breadcrumb__text:hover{color:var(--color-content-default, #282828)}.breadcrumb__item--active{border-radius:12px}.breadcrumb__item--active:hover{background-color:var(--color-surface-3, #e3e3e3)}.breadcrumb__item--active bds-typo,.breadcrumb__item--active bds-icon,.breadcrumb__item--active .breadcrumb__text{color:var(--color-content-default, #282828)}";

const Breadcrumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.handleDropdownToggle = (event) => {
      const nextOpen = !!event?.detail?.value;
      if (nextOpen === this.isDropdownOpen)
        return;
      this.isDropdownOpen = nextOpen;
    };
    this.handleActivatorPointer = (event) => {
      event.stopPropagation();
    };
    this.items = [];
    this.wrapItems = true;
    this.parsedItems = [];
    this.isDropdownOpen = false;
  }
  parseItems(newValue) {
    if (typeof newValue === 'string') {
      try {
        this.parsedItems = JSON.parse(newValue);
      }
      catch (error) {
        console.warn('[bds-breadcrumb] Failed to parse items:', error);
        this.parsedItems = [];
      }
    }
    else {
      this.parsedItems = newValue;
    }
  }
  renderCollapsedDropdown() {
    return (index.h("bds-dropdown", { position: "auto", open: this.isDropdownOpen, onBdsToggle: this.handleDropdownToggle }, index.h("bds-grid", { slot: "dropdown-content" }, index.h("bds-grid", { direction: "column", padding: "1", gap: "half" }, this.parsedItems.slice(1, -1).map((subItem, idx) => (index.h("bds-grid", { class: `breadcrumb__button--${idx}`, key: subItem.label + idx }, subItem.href ? (index.h("a", { href: subItem.href, class: "breadcrumb__link" }, index.h("bds-grid", { "align-items": "center", gap: "half" }, index.h("bds-icon", { name: "reply", theme: "outline", class: "button--icon", size: "x-small" }), index.h("bds-typo", { variant: "fs-16", margin: false, class: "breadcrumb__text" }, subItem.label)))) : (index.h("span", null, subItem.label))))))), index.h("bds-grid", { slot: "dropdown-activator", "align-items": "center" }, index.h("bds-button", { variant: "text", color: "content", size: "short", "icon-left": "more-options-horizontal", onMouseDown: this.handleActivatorPointer, onClick: this.handleActivatorPointer, "aria-label": "Mostrar itens ocultos do breadcrumb" }))));
  }
  renderItemContent(item, isCurrent) {
    if (item.label === '...') {
      return this.renderCollapsedDropdown();
    }
    if (item.href) {
      return (index.h("bds-typo", { variant: "fs-20", margin: false, class: "breadcrumb__link--text" }, index.h("a", { href: item.href, class: "breadcrumb__link breadcrumb__text", "aria-current": isCurrent ? 'page' : null }, item.label)));
    }
    return (index.h("bds-typo", { variant: "fs-20", bold: isCurrent ? 'bold' : 'regular', margin: false, class: "breadcrumb__text", "aria-current": isCurrent ? 'page' : null }, item.label));
  }
  renderBreadcrumbItem(item, index$1, items) {
    const isLastItem = index$1 === items.length - 1;
    return (index.h("bds-grid", { class: {
        breadcrumb__item: true,
        'breadcrumb__item--active': isLastItem,
      }, key: item.label + index$1, "align-items": "center" }, index.h("bds-grid", { direction: "row", "align-items": "center", padding: "x-1" }, index.h("bds-grid", { direction: "row", "align-items": "center", padding: "y-half" }, this.renderItemContent(item, isLastItem))), !isLastItem && index.h("bds-icon", { name: "arrow-right", size: "medium", class: "breadcrumb__text" })));
  }
  componentWillLoad() {
    this.parseItems(this.items);
  }
  render() {
    if (!this.parsedItems || this.parsedItems.length === 0) {
      return index.h("p", null, "Sem itens para exibir no Breadcrumb.");
    }
    const visibleItems = this.wrapItems && this.parsedItems.length > 3
      ? [
        this.parsedItems[0],
        { label: '...', href: undefined },
        this.parsedItems[this.parsedItems.length - 1],
      ]
      : this.parsedItems;
    return (index.h("nav", { "aria-label": "breadcrumb" }, index.h("bds-grid", { direction: "row", "align-items": "center" }, visibleItems.map((element, index) => this.renderBreadcrumbItem(element, index, visibleItems)))));
  }
  static get watchers() { return {
    "items": ["parseItems"]
  }; }
};
Breadcrumb.style = breadcrumbCss;

exports.bds_breadcrumb = Breadcrumb;
