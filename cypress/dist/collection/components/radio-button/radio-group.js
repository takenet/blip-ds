import { h, Host } from '@stencil/core';
export class RadioGroup {
  constructor() {
    this.radioGroupElement = null;
    this.chagedOptions = (value, event) => {
      if (event.detail.checked == true) {
        this.value = value;
      }
    };
    this.value = undefined;
  }
  valueChanged(value) {
    this.setSelectedRadio(value);
    this.bdsRadioGroupChange.emit({ value });
  }
  componentWillRender() {
    this.radioGroupElement = this.element.getElementsByTagName('bds-radio');
    for (let i = 0; i < this.radioGroupElement.length; i++) {
      this.radioGroupElement[i].addEventListener('bdsChange', (event) => this.chagedOptions(this.radioGroupElement[i].value, event));
    }
  }
  setSelectedRadio(value) {
    const radios = this.radioGroupElement;
    for (let i = 0; i < radios.length; i++) {
      const getValue = radios[i].value;
      radios[i].checked = false;
      if (radios[i].checked == false && value == getValue) {
        radios[i].checked = true;
      }
    }
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "bds-radio-group"; }
  static get encapsulation() { return "scoped"; }
  static get properties() {
    return {
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
      }
    };
  }
  static get events() {
    return [{
        "method": "bdsRadioGroupChange",
        "name": "bdsRadioGroupChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value has changed due to a click event."
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
        "propName": "value",
        "methodName": "valueChanged"
      }];
  }
}
