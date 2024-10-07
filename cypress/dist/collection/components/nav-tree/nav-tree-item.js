import { Host, h } from '@stencil/core';
export class NavTreeItem {
  constructor() {
    this.navTreeParent = null;
    this.navTreeChild = null;
    this.itensElement = null;
    this.handler = () => {
      if (!this.loading && !this.disable) {
        if (this.navTreeParent.collapse == 'single') {
          for (let i = 0; i < this.itensElement.length; i++) {
            if (this.itensElement[i] != this.element)
              this.itensElement[i].isOpen = false;
          }
        }
        this.toggle();
      }
    };
    this.collapse = 'single';
    this.icon = null;
    this.text = undefined;
    this.secondaryText = null;
    this.isOpen = false;
    this.loading = false;
    this.disable = false;
    this.dataTest = null;
  }
  async toggle() {
    this.isOpen = !this.isOpen;
  }
  isOpenChanged(value) {
    this.bdsToogleChange.emit({ value: value, element: this.element });
    // if (this.navTreeChild) this.navTreeChild.isOpen = value;
  }
  componentWillLoad() {
    this.navTreeParent =
      (this.element.parentElement.tagName == 'BDS-NAV-TREE' && this.element.parentElement) ||
        ('BDS-NAV-TREE-ITEM' && this.element.parentElement);
    this.navTreeChild = this.element.querySelector('bds-nav-tree-item');
  }
  componentWillRender() {
    this.itensElement = this.navTreeParent.getElementsByTagName('bds-nav-tree-item');
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.handler();
    }
  }
  render() {
    return (h(Host, null, h("div", { tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { class: {
        nav_tree_item: true,
        nav_tree_item_active: this.isOpen,
        nav_tree_item_button: !this.navTreeChild,
        nav_tree_item_button_active: !this.navTreeChild && this.isOpen,
        [`nav_tree_item--loading`]: this.loading,
        [`nav_tree_item--disable`]: this.disable,
      }, onClick: () => this.handler(), "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
        [`icon-item`]: true,
        [`icon-item-active`]: this.isOpen,
      }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { class: "nav_tree_item_content" }, this.text && (h("bds-typo", { class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { class: "nav_tree_item_slot" }, h("slot", { name: "header-content" })), this.navTreeChild && (h("bds-icon", { class: {
        [`nav_main_arrow`]: true,
        [`nav_main_arrow_active`]: this.isOpen,
        [`nav_main_arrow--loading`]: this.loading,
      }, name: "arrow-down" })))), this.navTreeChild && (h("div", { class: {
        accordion: true,
        accordion_open: this.isOpen,
      } }, h("div", { class: "container" }, h("slot", null))))));
  }
  static get is() { return "bds-nav-tree-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["nav-tree.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["nav-tree.css"]
    };
  }
  static get properties() {
    return {
      "collapse": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "collapses",
          "resolved": "\"multiple\" | \"single\"",
          "references": {
            "collapses": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Focus Selected. Used to add title in header accordion."
        },
        "attribute": "collapse",
        "reflect": false,
        "defaultValue": "'single'"
      },
      "icon": {
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
          "text": "Icon. Used to add icon in list item."
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "null"
      },
      "text": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Text. Used to insert a text in the display item."
        },
        "attribute": "text",
        "reflect": false
      },
      "secondaryText": {
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
          "text": "SecondaryText. Used to insert a secondaryText in the display item."
        },
        "attribute": "secondary-text",
        "reflect": false,
        "defaultValue": "null"
      },
      "isOpen": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Active. Used to define when the item is highlighted."
        },
        "attribute": "is-open",
        "reflect": true,
        "defaultValue": "false"
      },
      "loading": {
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
          "text": "Loading state. Indicates if the component is in a loading state."
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "disable": {
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
          "text": "Disable state. Indicates if the component is disabled."
        },
        "attribute": "disable",
        "reflect": false,
        "defaultValue": "false"
      },
      "dataTest": {
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
          "text": "Data test is the prop to specifically test the component action object."
        },
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get events() {
    return [{
        "method": "bdsToogleChange",
        "name": "bdsToogleChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "When de activation of component change, the event are dispache."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "toggle": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "isOpen",
        "methodName": "isOpenChanged"
      }];
  }
}
