import { Host, h } from '@stencil/core';
export class ListItem {
  constructor() {
    this.handler = () => {
      this.typeList == 'radio' ? (this.checked = true) : (this.checked = !this.checked);
    };
    this.clickActionButtons = (data, event) => {
      const elementButton = event.composedPath()[0];
      this.bdsClickActionButtom.emit({
        value: this.value,
        icon: data,
        elementButton: elementButton,
      });
    };
    this.internalChips = [];
    this.internalActionsButtons = [];
    this.checked = false;
    this.typeList = null;
    this.avatarName = null;
    this.avatarThumbnail = null;
    this.icon = null;
    this.value = null;
    this.text = null;
    this.secondaryText = null;
    this.chips = [];
    this.actionsButtons = [];
    this.clickable = false;
    this.active = false;
    this.borderRadius = false;
    this.size = 'standard';
    this.dataTest = null;
  }
  componentWillLoad() {
    this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
    this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
    this.chipsChanged();
    this.actionsButtonsChanged();
  }
  checkedChanged(isChecked) {
    this.bdsChecked.emit({
      value: this.value,
      text: this.text,
      secondaryText: this.secondaryText,
      typeList: this.typeList,
      checked: isChecked,
    });
  }
  chipsChanged() {
    if (this.chips) {
      if (typeof this.chips === 'string') {
        this.internalChips = JSON.parse(this.chips);
      }
      else {
        this.internalChips = this.chips;
      }
    }
    else {
      this.internalChips = [];
    }
  }
  actionsButtonsChanged() {
    if (this.actionsButtons) {
      if (typeof this.actionsButtons === 'string') {
        this.internalActionsButtons = JSON.parse(this.actionsButtons);
      }
      else {
        this.internalActionsButtons = this.actionsButtons;
      }
    }
    else {
      this.internalActionsButtons = [];
    }
  }
  renderChips() {
    if (!this.internalChips.length) {
      return [];
    }
    return this.internalChips.map((chip, index) => {
      const id = index.toString();
      const limit = 30;
      if (chip.length <= limit) {
        return (h("bds-chip-clickable", { id: id, key: id, color: "default" }, chip));
      }
      else {
        return (h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("bds-chip-clickable", { id: id, key: id, color: "default" }, `${chip.slice(0, limit)} ...`)));
      }
    });
  }
  renderActionsButtons() {
    if (!this.internalActionsButtons.length) {
      return [];
    }
    return this.internalActionsButtons.map((button, index) => {
      const id = index.toString();
      return (h("bds-button-icon", { key: id, variant: "secondary", icon: button, size: "short", onClick: (ev) => this.clickActionButtons(button, ev) }));
    });
  }
  render() {
    const hasInput = this.clickable == true || this.typeList == 'checkbox' || this.typeList == 'radio' || this.typeList == 'switch';
    const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
    const hasAvatar = this.avatarName || this.avatarThumbnail;
    return (h(Host, null, h("div", { onClick: this.handler, tabindex: "0", class: {
        list_item: true,
        clickable: hasInput,
        border_radius: this.borderRadius,
        [`list_item_${this.size}`]: true,
      }, "data-test": this.dataTest }, this.active && h("div", { class: "active" }), hasLeftInput && (h("div", { class: { input_list: true } }, this.typeList == 'radio' && h("bds-radio", { value: this.value, checked: this.checked }), this.typeList == 'checkbox' && (h("bds-checkbox", { refer: "", label: "", name: "cb1", disabled: false, checked: this.checked })))), hasAvatar ? (h("bds-avatar", { class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: "extra-small" })) : (this.icon && (h("bds-icon", { class: {
        [`icon-item`]: true,
        [`icon-item-active`]: this.active,
      }, size: "medium", name: this.icon, color: "inherit", theme: this.active ? 'solid' : 'outline' }))), h("div", { class: { [`content-slot`]: true } }, h("slot", null)), (this.text || this.secondaryText) && (h("div", { class: {
        [`content-item`]: true,
        [`grow-up`]: !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length < 0,
      } }, this.text && (h("bds-typo", { class: "title-item", variant: "fs-16", tag: "span", bold: this.active ? 'bold' : 'regular' }, this.text)), this.secondaryText && (h("bds-typo", { class: "subtitle-item", variant: "fs-12", "line-height": "small", tag: "span" }, this.secondaryText)))), h("div", { class: { [`content-area`]: true, [`grow-up`]: true } }, this.internalChips.length > 0 && h("div", { class: "internal-chips" }, this.renderChips()), h("slot", { name: "content-area" })), (!this.typeList || this.typeList == 'default') && (h("div", { class: { [`action-area`]: true } }, this.internalActionsButtons.length > 0 && (h("div", { class: "internal-actions-buttons" }, this.renderActionsButtons())), h("slot", { name: "action-area" }))), this.typeList == 'switch' && h("bds-switch", { refer: "", name: "", checked: this.checked }))));
  }
  static get is() { return "bds-list-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["list.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["list.css"]
    };
  }
  static get properties() {
    return {
      "checked": {
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
          "text": ""
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
      },
      "typeList": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TypeList",
          "resolved": "\"checkbox\" | \"default\" | \"radio\" | \"switch\"",
          "references": {
            "TypeList": {
              "location": "import",
              "path": "./list"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Typelis. Used toselect type of item list."
        },
        "attribute": "type-list",
        "reflect": false,
        "defaultValue": "null"
      },
      "avatarName": {
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
          "text": "AvatarName. Used to enter the avatar name."
        },
        "attribute": "avatar-name",
        "reflect": false,
        "defaultValue": "null"
      },
      "avatarThumbnail": {
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
          "text": "AvatarThumbnail. Used to insert the avatar photo."
        },
        "attribute": "avatar-thumbnail",
        "reflect": false,
        "defaultValue": "null"
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
      "value": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value. Used to insert a value in list item."
        },
        "attribute": "value",
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
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Text. Used to insert a text in the display item."
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "null"
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
      "chips": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | string[]",
          "resolved": "string | string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The chips on the component\r\nShould be passed this way:\r\nchips='[\"chip1\", \"chip2\"]'"
        },
        "attribute": "chips",
        "reflect": false,
        "defaultValue": "[]"
      },
      "actionsButtons": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | string[]",
          "resolved": "string | string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The actions buttons on the component\r\nShould be passed this way:\r\nactions-buttons='[\"copy\", \"settings-general\", \"more-options-horizontal\"]'"
        },
        "attribute": "actions-buttons",
        "reflect": false,
        "defaultValue": "[]"
      },
      "clickable": {
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
          "text": "Clickable. Used to define if the item is clickable or not."
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "active": {
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
          "text": "Active. Used to define when the item is highlighted."
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      },
      "borderRadius": {
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
          "text": "Enable rounded border on item"
        },
        "attribute": "border-radius",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ItemSize",
          "resolved": "\"short\" | \"standard\" | \"tall\"",
          "references": {
            "ItemSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size. Entered as one of the size. Can be one of:\r\n'tall', 'standard', 'short';"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
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
  static get states() {
    return {
      "internalChips": {},
      "internalActionsButtons": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsChecked",
        "name": "bdsChecked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value has changed because of a click event."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsClickActionButtom",
        "name": "bdsClickActionButtom",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when click in someone actions buttom insert in data."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "checked",
        "methodName": "checkedChanged"
      }, {
        "propName": "chips",
        "methodName": "chipsChanged"
      }, {
        "propName": "actionsButtons",
        "methodName": "actionsButtonsChanged"
      }];
  }
}
