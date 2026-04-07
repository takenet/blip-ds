import { Host, h } from '@stencil/core';
export class NavTreeGroup {
  constructor() {
    this.itemsElement = null;
    this.isOpenAftAnimation = false;
    this.navTreeChild = null;
    this.collapse = 'single';
    this.collapsed = false;
  }
  collapsedChanged(value) {
    this.propagateCollapsed(value);
  }
  propagateCollapsed(value) {
    const items = this.element.getElementsByTagName('bds-nav-tree');
    for (let i = 0; i < items.length; i++) {
      items[i].collapsed = value;
    }
  }
  componentWillRender() {
    this.itemsElement = this.element.getElementsByTagName('bds-nav-tree');
    for (let i = 0; i < this.itemsElement.length; i++) {
      this.itemsElement[i].reciveNumber(i);
      this.itemsElement[i].collapsed = this.collapsed;
    }
  }
  async closeAll(actNumber) {
    this.bdsNavTreeGroupCloseAll.emit();
    for (let i = 0; i < this.itemsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i)
          this.itemsElement[i].close();
      }
      else {
        this.itemsElement[i].close();
      }
    }
  }
  async openAll(actNumber) {
    this.bdsNavTreeGroupOpenAll.emit();
    for (let i = 0; i < this.itemsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i)
          this.itemsElement[i].open();
      }
      else {
        this.itemsElement[i].open();
      }
    }
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "bds-nav-tree-group"; }
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
          "text": "Collapse. Used to set mode of iteraction of componente when navigate with menu. You can choose a option single or multiple."
        },
        "attribute": "collapse",
        "reflect": false,
        "defaultValue": "'single'"
      },
      "collapsed": {
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
          "text": "Collapsed state. When true, propagates collapsed=true to all bds-nav-tree children,\nhiding their text, arrow and header-content, showing only icons."
        },
        "attribute": "collapsed",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isOpenAftAnimation": {},
      "navTreeChild": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsNavTreeGroupCloseAll",
        "name": "bdsNavTreeGroupCloseAll",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsNavTreeGroupOpenAll",
        "name": "bdsNavTreeGroupOpenAll",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
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
      "closeAll": {
        "complexType": {
          "signature": "(actNumber?: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
      },
      "openAll": {
        "complexType": {
          "signature": "(actNumber?: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
        "propName": "collapsed",
        "methodName": "collapsedChanged"
      }];
  }
}
