import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';

const RadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsRadioGroupChange = createEvent(this, "bdsRadioGroupChange", 7);
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
  get element() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};

export { RadioGroup as bds_radio_group };
