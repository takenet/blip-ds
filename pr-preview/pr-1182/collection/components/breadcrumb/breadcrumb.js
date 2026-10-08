import { h } from '@stencil/core';
export class Breadcrumb {
  constructor() {
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
        // eslint-disable-next-line no-console
        console.warn('[bds-breadcrumb] Failed to parse items:', error);
        this.parsedItems = [];
      }
    }
    else {
      this.parsedItems = newValue;
    }
  }
  renderCollapsedDropdown() {
    return (h("bds-dropdown", { position: "auto", open: this.isDropdownOpen, onBdsToggle: this.handleDropdownToggle }, h("bds-grid", { slot: "dropdown-content" }, h("bds-grid", { direction: "column", padding: "1", gap: "half" }, this.parsedItems.slice(1, -1).map((subItem, idx) => (h("bds-grid", { class: `breadcrumb__button--${idx}`, key: subItem.label + idx }, subItem.href ? (h("a", { href: subItem.href, class: "breadcrumb__link" }, h("bds-grid", { "align-items": "center", gap: "half" }, h("bds-icon", { name: "reply", theme: "outline", class: "button--icon", size: "x-small" }), h("bds-typo", { variant: "fs-16", margin: false, class: "breadcrumb__text" }, subItem.label)))) : (h("span", null, subItem.label))))))), h("bds-grid", { slot: "dropdown-activator", "align-items": "center" }, h("bds-button", { variant: "text", color: "content", size: "short", "icon-left": "more-options-horizontal", onMouseDown: this.handleActivatorPointer, onClick: this.handleActivatorPointer, "aria-label": "Mostrar itens ocultos do breadcrumb" }))));
  }
  renderItemContent(item, isCurrent) {
    if (item.label === '...') {
      return this.renderCollapsedDropdown();
    }
    if (item.href) {
      return (h("bds-typo", { variant: "fs-20", margin: false, class: "breadcrumb__link--text" }, h("a", { href: item.href, class: "breadcrumb__link breadcrumb__text", "aria-current": isCurrent ? 'page' : null }, item.label)));
    }
    return (h("bds-typo", { variant: "fs-20", bold: isCurrent ? 'bold' : 'regular', margin: false, class: "breadcrumb__text", "aria-current": isCurrent ? 'page' : null }, item.label));
  }
  renderBreadcrumbItem(item, index, items) {
    const isLastItem = index === items.length - 1;
    return (h("bds-grid", { class: {
        breadcrumb__item: true,
        'breadcrumb__item--active': isLastItem,
      }, key: item.label + index, "align-items": "center" }, h("bds-grid", { direction: "row", "align-items": "center", padding: "x-1" }, h("bds-grid", { direction: "row", "align-items": "center", padding: "y-half" }, this.renderItemContent(item, isLastItem))), !isLastItem && h("bds-icon", { name: "arrow-right", size: "medium", class: "breadcrumb__text" })));
  }
  componentWillLoad() {
    this.parseItems(this.items);
  }
  render() {
    if (!this.parsedItems || this.parsedItems.length === 0) {
      return h("p", null, "Sem itens para exibir no Breadcrumb.");
    }
    const visibleItems = this.wrapItems && this.parsedItems.length > 3
      ? [
        this.parsedItems[0],
        { label: '...', href: undefined },
        this.parsedItems[this.parsedItems.length - 1],
      ]
      : this.parsedItems;
    return (h("nav", { "aria-label": "breadcrumb" }, h("bds-grid", { direction: "row", "align-items": "center" }, visibleItems.map((element, index) => this.renderBreadcrumbItem(element, index, visibleItems)))));
  }
  static get is() { return "bds-breadcrumb"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["breadcrumb.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["breadcrumb.css"]
    };
  }
  static get properties() {
    return {
      "items": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | Array<{ label: string; href?: string }>",
          "resolved": "string | { label: string; href?: string; }[]",
          "references": {
            "Array": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "items",
        "reflect": false,
        "defaultValue": "[]"
      },
      "wrapItems": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "wrap-items",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get states() {
    return {
      "parsedItems": {},
      "isDropdownOpen": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "items",
        "methodName": "parseItems"
      }];
  }
}
