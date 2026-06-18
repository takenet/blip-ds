'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const RadioGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsRadioGroupChange = index.createEvent(this, "bdsRadioGroupChange", 7);
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
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};

exports.bds_radio_group = RadioGroup;
