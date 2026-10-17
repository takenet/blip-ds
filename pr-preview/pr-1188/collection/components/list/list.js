import { Host, h } from '@stencil/core';
export class List {
  constructor() {
    this.itemListElement = null;
    this.chagedOptions = (event) => {
      const { detail } = event;
      if (detail.typeList == 'radio') {
        if (detail.checked == true) {
          this.value = detail;
        }
      }
      if (detail.typeList == 'checkbox') {
        this.setSelectedCheckbox();
      }
      if (detail.typeList == 'switch') {
        this.setSelectedSwitch();
      }
    };
    this.onClickActionsButtons = (event) => {
      const { detail } = event;
      this.bdsClickActionsButtons.emit(detail);
    };
    this.internalData = undefined;
    this.typeList = null;
    this.value = undefined;
    this.data = undefined;
  }
  componentWillLoad() {
    this.data && this.dataChanged();
  }
  componentWillRender() {
    this.data && this.updateData();
    if (!this.data) {
      this.setitemListElement();
    }
  }
  componentDidRender() {
    if (this.data) {
      this.internalDataChanged();
    }
  }
  dataChanged() {
    this.updateData();
  }
  valueChanged(value) {
    this.setSelectedRadio(value);
  }
  internalDataChanged() {
    this.itemListElement = this.element.shadowRoot.querySelectorAll('bds-list-item');
  }
  setitemListElement() {
    this.itemListElement = this.element.getElementsByTagName('bds-list-item');
    for (let i = 0; i < this.itemListElement.length; i++) {
      this.itemListElement[i].typeList = this.typeList;
      this.itemListElement[i].addEventListener('bdsChecked', (event) => this.chagedOptions(event));
    }
  }
  updateData() {
    if (this.data) {
      if (typeof this.data === 'string') {
        this.internalData = JSON.parse(this.data);
      }
      else {
        this.internalData = this.data;
      }
    }
  }
  setSelectedRadio(itemList) {
    const itens = Array.from(this.itemListElement);
    const radios = itens.filter((item) => item.typeList == 'radio');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].value != itemList.value) {
        radios[i].checked = false;
      }
      else {
        const construct = {
          value: radios[i].value,
          text: radios[i]?.text,
          secondaryText: radios[i]?.secondaryText,
          avatarName: radios[i]?.avatarName,
          avatarThumbnail: radios[i]?.avatarThumbnail,
          typeList: radios[i]?.typeList,
        };
        this.bdsListRadioChange.emit(construct);
      }
    }
  }
  setSelectedCheckbox() {
    const checkboxs = this.itemListElement;
    const itens = Array.from(checkboxs).filter((item) => item.typeList == 'checkbox');
    const result = itens
      .filter((item) => item.checked)
      .map((term) => ({
      value: term.value,
      text: term?.text,
      secondaryText: term?.secondaryText,
      avatarName: term?.avatarName,
      avatarThumbnail: term?.avatarThumbnail,
      typeList: term?.typeList,
    }));
    this.bdsListCheckboxChange.emit(result);
  }
  setSelectedSwitch() {
    const Switch = this.itemListElement;
    const itens = Array.from(Switch).filter((item) => item.typeList == 'switch');
    const result = itens
      .filter((item) => item.checked)
      .map((term) => ({
      value: term.value,
      text: term?.text,
      secondaryText: term?.secondaryText,
      avatarName: term?.avatarName,
      avatarThumbnail: term?.avatarThumbnail,
      typeList: term?.typeList,
    }));
    this.bdsListSwitchChange.emit(result);
  }
  render() {
    return (h(Host, null, h("div", { class: {
        list: true,
      } }, this.internalData ? (this.internalData.map((item, idx) => (h("bds-list-item", { key: idx, value: item.value, text: item.text, "type-list": this.typeList ? this.typeList : item.typeList, "secondary-text": item.secondaryText, "avatar-name": item.avatarName, "avatar-thumbnail": item.avatarThumbnail, checked: item.checked, icon: item.icon, chips: item.chips, actionsButtons: item.actionsButtons, onBdsChecked: (ev) => this.chagedOptions(ev), onBdsClickActionButtom: (ev) => this.onClickActionsButtons(ev), dataTest: item.dataTest })))) : (h("slot", null)))));
  }
  static get is() { return "bds-list"; }
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
      "typeList": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TypeList",
          "resolved": "\"checkbox\" | \"default\" | \"radio\" | \"switch\"",
          "references": {
            "TypeList": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Typelist. Used to ."
        },
        "attribute": "type-list",
        "reflect": false,
        "defaultValue": "null"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the selected radio"
        },
        "attribute": "value",
        "reflect": true
      },
      "data": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | Data[]",
          "resolved": "Data[] | string",
          "references": {
            "Data": {
              "location": "import",
              "path": "./list-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The Data of the list\nShould be passed this way:\ndata='[{\"value\": \"01\",\"text\": \"Text\",\"secondaryText\": \"Secondary Text\",\"avatarName\": \"\",\"avatarThumbnail\": \"\",\"checked\"=\"true\",\"icon\": \"settings-builder\"}, {\"value\": \"02\",\"text\": \"Text\",\"secondaryText\": \"Secondary Text\",\"avatarName\": \"\",\"avatarThumbnail\": \"\",\"checked\"=\"false\",\"icon\": \"settings-builder\",}]'\nData can also be passed as child by using bds-list-item component, but passing as a child you may have some compatibility problems with Angular."
        },
        "attribute": "data",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "internalData": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsListCheckboxChange",
        "name": "bdsListCheckboxChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value checkboxes has changed because of a click event."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsListRadioChange",
        "name": "bdsListRadioChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value radios has changed because of a click event."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsListSwitchChange",
        "name": "bdsListSwitchChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value switches has changed because of a click event."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsClickActionsButtons",
        "name": "bdsClickActionsButtons",
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
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "data",
        "methodName": "dataChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
      }, {
        "propName": "internalData",
        "methodName": "internalDataChanged"
      }];
  }
}
