import { h } from '@stencil/core';
export class Breadcrumb {
  constructor() {
    this.handleCurrentPageLabelSave = (event) => {
      const detail = event.detail;
      const oldLabel = detail.oldValue;
      const newLabel = detail.value;
      if (oldLabel !== newLabel) {
        // Update the current page label in parsedItems
        const updatedItems = [...this.parsedItems];
        if (updatedItems.length > 0) {
          updatedItems[updatedItems.length - 1] = {
            ...updatedItems[updatedItems.length - 1],
            label: newLabel
          };
          this.parsedItems = updatedItems;
        }
        // Emit the change event
        this.bdsCurrentPageLabelChange.emit({
          oldLabel,
          newLabel
        });
      }
    };
    this.items = [];
    this.editableCurrentPage = false;
    this.parsedItems = [];
    this.isDropdownOpen = false;
  }
  parseItems(newValue) {
    if (typeof newValue === 'string') {
      try {
        this.parsedItems = JSON.parse(newValue);
      }
      catch (error) {
        this.parsedItems = [];
      }
    }
    else {
      this.parsedItems = newValue;
    }
  }
  componentWillLoad() {
    this.parseItems(this.items);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  render() {
    if (!this.parsedItems || this.parsedItems.length === 0) {
      return h("p", null, "Sem itens para exibir no Breadcrumb.");
    }
    const visibleItems = this.parsedItems.length <= 3
      ? this.parsedItems
      : [
        this.parsedItems[0],
        { label: '...', href: null },
        this.parsedItems[this.parsedItems.length - 1],
      ];
    return (h("nav", { "aria-label": "breadcrumb" }, h("bds-grid", { direction: "row", "align-items": "center" }, visibleItems.map((item, index) => (h("bds-grid", { class: {
        breadcrumb__item: true,
        'breadcrumb__item--active': index === visibleItems.length - 1,
      }, "aria-current": index === visibleItems.length - 1 ? 'page' : null }, item.label === '...' ? (h("bds-dropdown", { "active-mode": "click", position: "auto" }, h("bds-grid", { slot: "dropdown-content" }, h("bds-grid", { direction: "column", padding: "1", gap: "half" }, this.parsedItems.slice(1, -1).map((subItem, idx) => (h("bds-grid", { class: `breadcrumb__button--${idx}` }, subItem.href ? (h("a", { href: subItem.href, class: `breadcrumb__link breadcrumb__button--${idx}` }, h("bds-grid", { "align-items": "center", gap: "half" }, h("bds-icon", { name: "reply", theme: "outline", class: "button--icon", size: "x-small" }), h("bds-button", { variant: "text", color: "content", size: "short" }, subItem.label)))) : (h("span", null, subItem.label))))))), h("bds-grid", { slot: "dropdown-activator", "align-items": "center" }, h("bds-button", { variant: "text", color: "content", size: "short", onClick: () => this.toggleDropdown(), "icon-left": "more-options-horizontal" }), h("bds-icon", { name: "arrow-right", size: "x-small" })))) : item.href ? (h("bds-grid", { direction: "row" }, h("bds-typo", { variant: "fs-12", margin: false, class: "breadcrumb__link--text" }, h("a", { href: item.href, class: "breadcrumb__link" }, item.label)), h("bds-icon", { name: "arrow-right", size: "x-small" }))) : (h("bds-grid", { direction: "row" }, index === visibleItems.length - 1 && this.editableCurrentPage && !item.href ? (h("bds-input-editable", { value: item.label, size: "short", onBdsInputEditableSave: this.handleCurrentPageLabelSave })) : (h("bds-typo", { variant: "fs-12", bold: "semi-bold", margin: false }, item.label))))))))));
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
      "editableCurrentPage": {
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
          "text": "Enable editing of the current page label using bds-input-editable"
        },
        "attribute": "editable-current-page",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "parsedItems": {},
      "isDropdownOpen": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsCurrentPageLabelChange",
        "name": "bdsCurrentPageLabelChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the current page label is changed"
        },
        "complexType": {
          "original": "BreadcrumbCurrentPageChangeEventDetail",
          "resolved": "BreadcrumbCurrentPageChangeEventDetail",
          "references": {
            "BreadcrumbCurrentPageChangeEventDetail": {
              "location": "local"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "items",
        "methodName": "parseItems"
      }];
  }
}
