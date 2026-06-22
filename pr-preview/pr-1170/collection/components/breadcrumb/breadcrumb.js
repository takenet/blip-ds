import { h } from '@stencil/core';
export class Breadcrumb {
  constructor() {
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
          return (h("bds-dropdown", { "active-mode": "click", position: "auto", open: this.isDropdownOpen }, h("bds-grid", { slot: "dropdown-content" }, h("bds-grid", { direction: "column", padding: "1", gap: "half" }, this.parsedItems.slice(1, -1).map((subItem, idx) => (h("bds-grid", { class: `breadcrumb__button--${idx}`, key: subItem.label + idx }, subItem.href ? (h("a", { href: subItem.href, class: `breadcrumb__link breadcrumb__button--${idx}` }, h("bds-grid", { "align-items": "center", gap: "half" }, h("bds-icon", { name: "reply", theme: "outline", class: "button--icon", size: "x-small" }), h("bds-button", { variant: "text", color: "content", size: "short" }, subItem.label)))) : (h("span", null, subItem.label))))))), h("bds-grid", { slot: "dropdown-activator", "align-items": "center" }, h("bds-button", { variant: "text", color: "content", size: "short", onClick: () => this.toggleDropdown(), "icon-left": "more-options-horizontal" }))));
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
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "boolean | string",
          "resolved": "boolean | string",
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
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "wrapItems",
        "methodName": "handleWrapItemsChange"
      }, {
        "propName": "items",
        "methodName": "parseItems"
      }];
  }
}
