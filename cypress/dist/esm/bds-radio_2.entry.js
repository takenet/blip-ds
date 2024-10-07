import { r as registerInstance, c as createEvent, h, H as Host } from './index-611fd21e.js';

const radioCss = ":host{display:-ms-flexbox;display:flex}.radio{display:-ms-flexbox;display:flex;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.radio [type=radio]{display:none}.radio [type=radio]:focus{outline:0}.radio__circle{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px;-ms-flex-negative:0;flex-shrink:0;border:2px solid var(--color-content-default, #454545);padding:4px;border-radius:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;position:relative}.radio__circle__pointer{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;border-radius:100%;background:transparent;height:10px;width:10px}.radio__circle .hover{width:0;height:0;opacity:0}.radio__circle .focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, #c226fb);border-radius:4px;padding:4px;width:100%;height:100%;outline:none}.radio:hover{border-color:var(--color-content-disable, #636363)}.radio:hover .hover{display:-ms-flexbox;display:flex;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));position:absolute;width:36px;height:36px;opacity:1;border-radius:24px;-webkit-transition:width 0.2s, height 0.2s;transition:width 0.2s, height 0.2s}.radio__text{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;padding-left:8px;color:var(--color-content-default, #454545)}.radio__input[type=radio]:checked~.radio__circle{background:transparent;border-color:var(--color-content-default, #454545)}.radio__input[type=radio]:checked~.radio__circle .radio__circle__pointer{background-color:var(--color-primary, #1e6bf1)}.radio__input[type=radio]:checked~.radio__circle:hover{border-color:var(--color-content-default, #454545)}.radio__input[type=radio]:checked~.radio__circle:hover .radio__circle__pointer{background-color:var(--color-primary, #1e6bf1)}.radio__input[type=radio]:disabled~.radio__circle{border-color:var(--color-content-disable, #636363);background-color:var(--color-surface-3, #cfcfcf)}.radio__input[type=radio]:disabled~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:hover~.radio__circle{border-color:var(--color-content-disable, #636363);background-color:var(--color-surface-3, #cfcfcf)}.radio__input[type=radio]:disabled:hover~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:checked~.radio__circle{border-color:var(--color-content-disable, #636363);background-color:var(--color-surface-3, #cfcfcf)}.radio__input[type=radio]:disabled:checked~.radio__circle .radio__circle__pointer{background-color:var(--color-content-default, #454545)}.radio__input[type=radio]:disabled:checked:hover~.radio__circle{border-color:var(--color-content-disable, #636363);background-color:var(--color-surface-3, #cfcfcf)}.radio__input[type=radio]:disabled:checked:hover~.radio__circle .radio__circle__pointer{background-color:var(--color-content-default, #454545)}.radio__input[type=radio]:disabled~.radio__text{color:var(--color-content-disable, #636363);cursor:not-allowed}.radio__input[type=radio]:disabled~.radio__circle{cursor:not-allowed}";

let radioButtonIds = 0;
const Radio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsChange = createEvent(this, "bdsChange", 7);
    this.bdsClickChange = createEvent(this, "bdsClickChange", 7);
    this.onClick = (event) => {
      this.checked = true;
      this.bdsClickChange.emit({ checked: this.checked });
      event.stopPropagation();
    };
    this.refNativeInput = (input) => {
      this.nativeInput = input;
    };
    this.radioId = undefined;
    this.refer = undefined;
    this.label = undefined;
    this.value = undefined;
    this.name = undefined;
    this.checked = false;
    this.disabled = false;
    this.dataTest = null;
  }
  checkedChanged(isChecked) {
    this.bdsChange.emit({ checked: isChecked });
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  getValue() {
    return Promise.resolve(this.nativeInput.checked);
  }
  connectedCallback() {
    this.radioId = this.refer || `bds-radio-${radioButtonIds++}`;
  }
  handleClickKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      this.onClick(event);
      event.preventDefault();
      this.bdsClickChange.emit({ checked: this.checked });
    }
  }
  render() {
    return (h(Host, null, h("label", { class: "radio", htmlFor: this.radioId }, h("input", { class: "radio__input", type: "radio", ref: this.refNativeInput, id: this.radioId, onClick: this.onClick, disabled: this.disabled, checked: this.checked, value: this.value, name: this.name, "data-test": this.dataTest }), h("div", { class: "radio__circle" }, !this.disabled ? h("div", { class: "focus", tabindex: "0", onKeyDown: this.handleClickKey.bind(this) }) : '', !this.disabled ? h("div", { class: "hover" }) : '', h("div", { class: "radio__circle__pointer" })), this.label && (h("bds-typo", { class: "radio__text", variant: "fs-14", bold: this.checked ? 'bold' : 'regular', tag: "span" }, this.label)), h("slot", null))));
  }
  static get watchers() { return {
    "checked": ["checkedChanged"]
  }; }
};
Radio.style = radioCss;

const switchCss = ".switch{position:relative;display:inline-block}.switch--size-tall{width:56px;height:32px}.switch--size-standard{width:42px;height:24px}.switch--size-short{width:32px;height:18px}.switch .focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, #c226fb);border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}.switch input{opacity:100;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--color-content-ghost, #8c8c8c);-webkit-transition:0.4s;transition:0.4s;border-radius:34px}.slider--size-tall::before{position:absolute;content:\" \";left:4px;bottom:4px;top:4px;background-color:var(--color-content-bright, #ffffff);-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:24px;height:24px}.slider--size-standard::before{position:absolute;content:\" \";left:3px;bottom:3px;top:3px;background-color:var(--color-content-bright, #ffffff);-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:18px;height:18px}.slider--size-short::before{position:absolute;content:\" \";left:2.25px;bottom:2.25px;top:2.25px;background-color:var(--color-content-bright, #ffffff);-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:13.5px;height:13.5px}.slider--deselected-disabled{cursor:not-allowed;background-color:var(--color-content-ghost, #8c8c8c);opacity:0.5}input:checked+.slider{background-color:var(--color-surface-primary, #1e6bf1)}input:checked+.slider--selected-disabled{cursor:not-allowed;opacity:0.5}input:focus+.slider{-webkit-box-shadow:0 0 1px #3f7de8;box-shadow:0 0 1px #3f7de8}input:focus+.slider--selected-disabled{-webkit-box-shadow:0 0 1px #b9cbd3;box-shadow:0 0 1px #b9cbd3}input:focus+.slider--deselected-disabled{-webkit-box-shadow:0 0 1px #d2dfe6;box-shadow:0 0 1px #d2dfe6}input:checked+.slider--size-tall::before{-webkit-transform:translateX(24px);-ms-transform:translateX(24px);transform:translateX(24px)}input:checked+.slider--size-standard::before{-webkit-transform:translateX(18px);-ms-transform:translateX(18px);transform:translateX(18px)}input:checked+.slider--size-short::before{-webkit-transform:translateX(13.75px);-ms-transform:translateX(13.75px);transform:translateX(13.75px)}";

let switchIds = 0;
const Switch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsChange = createEvent(this, "bdsChange", 7);
    this.onClick = () => {
      this.checked = !this.checked;
    };
    this.refNativeInput = (input) => {
      this.nativeInput = input;
    };
    this.getStyleState = () => {
      if (this.checked && !this.disabled) {
        return 'slider--selected';
      }
      if (!this.checked && !this.disabled) {
        return 'slider--deselected';
      }
      if (this.checked && this.disabled) {
        return 'slider--selected-disabled';
      }
      if (!this.checked && this.disabled) {
        return 'slider--deselected-disabled';
      }
      return '';
    };
    this.handleClick = (ev) => {
      if (!this.disabled) {
        if (ev.key === 'Enter') {
          this.checked = !this.checked;
        }
      }
    };
    this.switchId = undefined;
    this.refer = undefined;
    this.size = 'standard';
    this.name = undefined;
    this.checked = false;
    this.disabled = false;
    this.dataTest = null;
  }
  connectedCallback() {
    this.switchId = this.refer || `bds-switch-${switchIds++}`;
  }
  checkedChanged(isChecked) {
    this.bdsChange.emit({
      checked: isChecked,
    });
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  getValue() {
    return Promise.resolve(this.nativeInput.checked);
  }
  getSizeClass() {
    return `switch switch--size-${this.size} `;
  }
  getSizeSliderClass() {
    return `slider slider--size-${this.size} round `;
  }
  render() {
    const sizeClass = this.getSizeClass();
    const sizeSliderClass = this.getSizeSliderClass();
    const styleState = this.getStyleState();
    return (h("label", { class: { [sizeClass]: true } }, h("div", { tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), h("input", { type: "checkbox", ref: this.refNativeInput, id: this.switchId, name: this.name, onClick: this.onClick, checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("span", { class: { [sizeSliderClass]: true, [styleState]: true } })));
  }
  static get watchers() { return {
    "checked": ["checkedChanged"]
  }; }
};
Switch.style = switchCss;

export { Radio as bds_radio, Switch as bds_switch };
