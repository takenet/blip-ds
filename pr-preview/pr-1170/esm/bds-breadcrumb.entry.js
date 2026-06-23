import { r as registerInstance, h, g as getElement } from './index-611fd21e.js';

const breadcrumbCss = ":host{display:block}:host *{color:var(--color-content-default, #282828)}.button--icon{-webkit-transform:rotate(180deg);transform:rotate(180deg);color:var(--color-content-ghost, #8c8c8c)}.breadcrumb__button--0{padding-left:0}.breadcrumb__button--0 .button--icon{display:none}.breadcrumb__button--1{padding-left:8px}.breadcrumb__button--2{padding-left:16px}.breadcrumb__button--3{padding-left:24px}.breadcrumb__button--4{padding-left:32px}.breadcrumb__link--text{color:var(--color-content-disable, #595959)}.breadcrumb__link{text-decoration:none}.breadcrumb__item{-webkit-transition:color 0.15s, background-color 0.15s;transition:color 0.15s, background-color 0.15s}.breadcrumb__item bds-typo,.breadcrumb__item bds-icon,.breadcrumb__item .breadcrumb__text{color:var(--color-content-ghost, #8c8c8c)}.breadcrumb__item bds-typo:hover,.breadcrumb__item .breadcrumb__text:hover{color:var(--color-content-default, #282828)}.breadcrumb__item--active{border-radius:12px}.breadcrumb__item--active:hover{background-color:var(--color-surface-3, #e3e3e3)}.breadcrumb__item--active bds-typo,.breadcrumb__item--active bds-icon,.breadcrumb__item--active .breadcrumb__text{color:var(--color-content-default, #282828)}";

const Breadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // internal normalized boolean value to avoid re-assigning the prop inside its watcher
    this.wrapItemsBool = true;
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
  render() {
    if (!this.parsedItems || this.parsedItems.length === 0) {
      return h("p", null, "Sem itens para exibir no Breadcrumb.");
    }
    const visibleItems = this.wrapItemsBool && this.parsedItems.length > 3
      ? [
        this.parsedItems[0],
        { label: '...', href: null },
        this.parsedItems[this.parsedItems.length - 1],
      ]
      : this.parsedItems;
    const renderBreadcrumbItem = (item, index) => {
      const isLastItem = index === visibleItems.length - 1;
      const renderBasedOnLabel = (item) => {
        if (item.label === '...') {
          return (h("bds-dropdown", { position: "auto", open: this.isDropdownOpen, onBdsToggle: this.handleDropdownToggle }, h("bds-grid", { slot: "dropdown-content" }, h("bds-grid", { direction: "column", padding: "1", gap: "half" }, this.parsedItems.slice(1, -1).map((subItem, idx) => (h("bds-grid", { class: `breadcrumb__button--${idx}`, key: subItem.label + idx }, subItem.href ? (h("a", { href: subItem.href, style: { textDecoration: 'none' } }, h("bds-grid", { "align-items": "center", gap: "half" }, h("bds-icon", { name: "reply", theme: "outline", class: "button--icon", size: "x-small" }), h("bds-typo", { variant: "fs-16", margin: false, class: "breadcrumb__text" }, subItem.label)))) : (h("span", null, subItem.label))))))), h("bds-grid", { slot: "dropdown-activator", "align-items": "center" }, h("bds-button", { variant: "text", color: "content", size: "short", "icon-left": "more-options-horizontal", onMouseDown: this.handleActivatorPointer, onClick: this.handleActivatorPointer }))));
        }
        if (item.href) {
          return (h("bds-typo", { variant: "fs-20", margin: false, class: "breadcrumb__link--text" }, h("a", { href: item.href, class: "breadcrumb__link breadcrumb__text" }, item.label)));
        }
        return (h("bds-typo", { variant: "fs-20", bold: isLastItem ? 'bold' : 'regular', margin: false, class: "breadcrumb__text" }, item.label));
      };
      return (h("bds-grid", { class: {
          breadcrumb__item: true,
          'breadcrumb__item--active': isLastItem,
        }, "aria-current": isLastItem ? 'page' : null, key: item.label + index, "align-items": "center" }, h("bds-grid", { direction: "row", "align-items": "center", padding: "x-1" }, h("bds-grid", { direction: "row", "align-items": "center", padding: "y-half" }, renderBasedOnLabel(item))), !isLastItem && h("bds-icon", { name: "arrow-right", size: "medium", class: "breadcrumb__text" })));
    };
    return (h("nav", { "aria-label": "breadcrumb" }, h("bds-grid", { direction: "row", "align-items": "center" }, visibleItems.map((element, index) => renderBreadcrumbItem(element, index)))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "wrapItems": ["handleWrapItemsChange"],
    "items": ["parseItems"]
  }; }
};
Breadcrumb.style = breadcrumbCss;

export { Breadcrumb as bds_breadcrumb };
