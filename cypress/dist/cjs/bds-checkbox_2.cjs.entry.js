'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const checkboxCss = ".checkbox{display:inline}.checkbox input[type=checkbox]{display:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;cursor:pointer;margin:0}.checkbox input[type=checkbox]:focus{outline:0}.checkbox__icon{position:relative}.checkbox__icon::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.checkbox__icon:focus-visible{outline:none}.checkbox__icon:focus-visible::before{border-color:var(--color-focus, #c226fb)}.checkbox__icon:hover{border-color:var(--color-brand, #0096fa)}.checkbox--selected .checkbox__icon{background-color:var(--color-surface-primary, #1e6bf1);border-color:var(--color-surface-primary, #1e6bf1)}.checkbox--selected .checkbox__icon__svg{color:var(--color-content-bright, #ffffff)}.checkbox--selected .checkbox__icon:hover{background-color:var(--color-brand, #0096fa)}.checkbox--selected-disabled .checkbox__label{cursor:not-allowed}.checkbox--selected-disabled .checkbox__icon{color:var(--color-content-default, #454545);border-color:var(--color-content-default, #454545);background-color:var(--color-surface-3, #cfcfcf);opacity:50%}.checkbox--selected-disabled .checkbox__text{opacity:50%}.checkbox--deselected .checkbox__icon__svg{display:none}.checkbox--deselected-disabled .checkbox__label{cursor:not-allowed}.checkbox--deselected-disabled .checkbox__icon{opacity:50%;background-color:var(--color-surface-1, #f6f6f6);border:1px solid var(--color-brand, #0096fa)}.checkbox--deselected-disabled .checkbox__icon__svg{display:none}.checkbox__label{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.checkbox__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:18px;width:18px;border-radius:4px;color:var(--color-surface-1, #f6f6f6);border:1px solid var(--color-content-default, #454545);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s}.checkbox__text{margin-left:8px;color:var(--color-content-default, #454545)}";

let checkBoxIds = 0;
const Checkbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsChange = index.createEvent(this, "bdsChange", 7);
    this.bdsInput = index.createEvent(this, "bdsInput", 7);
    this.onClick = (ev) => {
      ev.stopPropagation();
      this.checked = !this.checked;
      this.bdsChange.emit({
        checked: this.checked,
      });
    };
    this.refNativeInput = (input) => {
      this.nativeInput = input;
    };
    this.getStyleState = () => {
      if (this.checked && !this.disabled) {
        return 'checkbox--selected';
      }
      if (!this.checked && !this.disabled) {
        return 'checkbox--deselected';
      }
      if (this.checked && this.disabled) {
        return 'checkbox--selected-disabled';
      }
      if (!this.checked && this.disabled) {
        return 'checkbox--deselected-disabled';
      }
      return '';
    };
    this.checkBoxId = undefined;
    this.refer = undefined;
    this.label = undefined;
    this.name = undefined;
    this.checked = false;
    this.disabled = false;
    this.dataTest = null;
  }
  connectedCallback() {
    this.checkBoxId = this.refer || `bds-checkbox-${checkBoxIds++}`;
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  getValue() {
    return Promise.resolve(this.nativeInput.checked);
  }
  async toggle() {
    this.checked = !this.checked;
    this.bdsChange.emit({
      checked: this.checked,
    });
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.checked = !this.checked;
      this.bdsChange.emit({
        checked: this.checked,
      });
    }
  }
  render() {
    const styleState = this.getStyleState();
    return (index.h("div", { class: {
        checkbox: true,
        [styleState]: true,
      } }, index.h("input", { type: "checkbox", ref: this.refNativeInput, id: this.checkBoxId, name: this.name, onClick: (ev) => this.onClick(ev), checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), index.h("label", { class: "checkbox__label", htmlFor: this.checkBoxId }, index.h("div", { class: "checkbox__icon", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, index.h("bds-icon", { class: "checkbox__icon__svg", size: "x-small", name: "true", color: "inherit" })), this.label && (index.h("bds-typo", { class: "checkbox__text", variant: "fs-14", tag: "span" }, this.label)))));
  }
};
Checkbox.style = checkboxCss;

const selectOptionCss = ":host(.option-checked){-ms-flex-order:-1;order:-1}.load-spinner{background-color:var(--color-surface-0, #ffffff);height:200px}.select-option{display:grid;width:100%;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:var(--color-surface-0, #ffffff);padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-order:1;order:1}.select-option--selected .select-option__container--value{color:var(--color-primary, #1e6bf1)}.select-option--disabled .select-option__container--value,.select-option--disabled .select-option__container--bulk{cursor:not-allowed;color:var(--color-content-disable, #636363)}.select-option--disabled .select-option__container--value:hover,.select-option--disabled .select-option__container--bulk:hover{background-color:var(--color-surface-1, #f6f6f6)}.select-option ::slotted(bds-icon){margin-right:10px}.select-option__container{color:var(--color-content-default, #454545);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.select-option__container__checkbox{cursor:pointer;padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-direction:row;flex-direction:row}.select-option__container__fill_space{width:100%}.select-option__container--bulk,.select-option__container--status{color:var(--color-content-ghost, #8c8c8c)}.select-option__container--status{margin-left:4px}.select-option__container__overflow{overflow:hidden;padding-right:16px}.select-option__container:hover>.select-option__container--value,.select-option__container:hover>.select-option__container--bulk,.select-option__container:hover>.select-option__container--status{color:var(--color-primary, #1e6bf1)}.select-option__container:active>.select-option__container--value,.select-option__container:active>.select-option__container--bulk,.select-option__container:active>.select-option__container--status{color:var(--color-primary, #1e6bf1)}.select-option:hover{background-color:var(--color-surface-1, #f6f6f6)}.select-option:focus{background-color:var(--color-surface-1, #f6f6f6);color:#3f7de8}.select-option--selected{background-color:var(--color-surface-1, #f6f6f6)}.select-option--invisible{display:none}";

const SelectOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.optionSelected = index.createEvent(this, "optionSelected", 7);
    this.optionChecked = index.createEvent(this, "optionChecked", 7);
    this.refNativeInput = (input) => {
      this.nativeInput = input;
    };
    this.checkedCurrent = () => {
      if (this.typeOption !== 'checkbox')
        return;
      this.nativeInput.toggle();
    };
    this.onClickSelectOption = () => {
      if (this.typeOption == 'checkbox')
        return;
      if (!this.disabled) {
        this.optionSelected.emit({ value: this.value, label: this.element.innerHTML });
      }
    };
    this.optionHandle = (ev) => {
      const elementChecked = ev.target;
      const data = { value: elementChecked.name, label: this.element.innerHTML, checked: elementChecked.checked };
      this.checked = !this.checked;
      this.optionChecked.emit(data);
    };
    this.attachOptionKeyboardListeners = (event) => {
      const element = event.target;
      switch (event.key) {
        case "Enter" /* Keyboard.ENTER */:
          this.onClickSelectOption();
          break;
        case "ArrowDown" /* Keyboard.ARROW_DOWN */:
          if (element.parentElement.nextElementSibling &&
            !element.parentElement.nextElementSibling.hasAttribute('invisible')) {
            event.preventDefault();
            event.stopPropagation();
            element.parentElement.nextElementSibling.firstElementChild.focus();
          }
          break;
        case "ArrowUp" /* Keyboard.ARROW_UP */:
          if (element.parentElement.previousElementSibling &&
            !element.parentElement.previousElementSibling.hasAttribute('invisible')) {
            event.preventDefault();
            event.stopPropagation();
            element.parentElement.previousElementSibling.firstElementChild.focus();
          }
      }
    };
    this.value = undefined;
    this.selected = false;
    this.disabled = false;
    this.invisible = false;
    this.danger = false;
    this.bulkOption = '';
    this.slotAlign = 'center';
    this.titleText = undefined;
    this.status = undefined;
    this.typeOption = 'default';
    this.checked = false;
    this.dataTest = null;
  }
  changeSelectionType() {
    this.typeOption = this.typeOption;
  }
  async toggle() {
    this.checked = !this.checked;
  }
  async toMark() {
    this.checked = true;
  }
  async markOff() {
    this.checked = false;
  }
  render() {
    return (index.h("div", { id: `bds-select-option-${this.value}`, "data-event": "click", role: "button", onKeyDown: this.attachOptionKeyboardListeners, onClick: this.onClickSelectOption, "data-value": this.value, "data-test": this.dataTest, class: {
        'select-option': this.typeOption != 'checkbox',
        'select-option--selected': this.selected,
        'select-option--disabled': this.disabled,
        'select-option--invisible': this.invisible,
      } }, index.h("div", { style: { alignSelf: this.slotAlign } }, index.h("slot", { name: "input-left" })), index.h("div", { class: {
        'select-option__container': true,
        'select-option__container__fill_space': !!this.status,
        'select-option__container__checkbox': this.typeOption == 'checkbox',
      }, onClick: () => this.checkedCurrent() }, this.titleText && (index.h("bds-typo", { class: "select-option__container--value", variant: "fs-16", bold: "semi-bold" }, this.titleText)), this.typeOption === 'checkbox' ? (index.h("bds-checkbox", { ref: this.refNativeInput, refer: `html-for-${this.value}`, label: this.element.innerHTML, name: this.value, checked: this.checked, onBdsChange: (ev) => this.optionHandle(ev) })) : (index.h("bds-typo", { class: {
        'select-option__container--value': true,
        'select-option__container__overflow': !!this.status,
      }, noWrap: !!this.status, variant: "fs-14" }, index.h("slot", null)))), this.bulkOption && (index.h("bds-typo", { class: "select-option__container--bulk", variant: "fs-10" }, this.bulkOption)), this.status && (index.h("bds-typo", { class: "select-option__container--status", noWrap: true, variant: "fs-10" }, this.status))));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "typeOption": ["changeSelectionType"]
  }; }
};
SelectOption.style = selectOptionCss;

exports.bds_checkbox = Checkbox;
exports.bds_select_option = SelectOption;
