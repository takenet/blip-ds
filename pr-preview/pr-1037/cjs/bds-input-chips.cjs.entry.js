'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const validations = require('./validations-d525e60d.js');

const inputChipsCss = ":host{display:display}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #282828)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #8a0000);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #fabebe);box-shadow:0 0 0 2px var(--color-error, #fabebe)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #282828)}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #01723e);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #282828)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #282828)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #595959);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #282828)}.inside-input-left{position:relative;display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:8px;overflow-y:auto}.inside-input-left::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.inside-input-left::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input-chips__chip{margin:2px 4px 2px 0px}.input-chips__chips{-ms-flex:1;flex:1}";

const InputChips = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsChange = index.createEvent(this, "bdsChange", 7);
    this.bdsChangeChips = index.createEvent(this, "bdsChangeChips", 7);
    this.bdsInputChipsFocus = index.createEvent(this, "bdsInputChipsFocus", 7);
    this.bdsBlur = index.createEvent(this, "bdsBlur", 7);
    this.bdsInputChipsInput = index.createEvent(this, "bdsInputChipsInput", 7);
    this.bdsExtendedQuantityInput = index.createEvent(this, "bdsExtendedQuantityInput", 7);
    this.bdsSubmit = index.createEvent(this, "bdsSubmit", 7);
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.onFocus = () => {
      this.bdsInputChipsFocus.emit();
      this.isPressed = true;
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.bdsInputChipsInput.emit(ev);
    };
    this.keyPressWrapper = (event) => {
      switch (event.key) {
        case 'Enter':
          this.handleDelimiters();
          this.setChip(this.value);
          this.value = '';
          this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
          this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
          break;
        case 'Backspace' :
          if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
            this.removeLastChip();
            this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
            this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
          }
          break;
      }
    };
    this.InputSize = null;
    this.validationDanger = false;
    this.inputAvalible = true;
    this.isPressed = false;
    this.validationMesage = '';
    this.internalChips = [];
    this.chips = [];
    this.blurCreation = false;
    this.type = 'text';
    this.label = '';
    this.maxlength = undefined;
    this.maxChipsLength = undefined;
    this.icon = '';
    this.delimiters = /,|;/;
    this.errorMessage = '';
    this.danger = false;
    this.success = false;
    this.value = '';
    this.duplicated = false;
    this.disableSubmit = false;
    this.disabled = false;
    this.helperMessage = '';
    this.successMessage = '';
    this.inputName = '';
    this.placeholder = '';
    this.counterLength = false;
    this.height = undefined;
    this.maxHeight = undefined;
    this.dataTest = null;
    this.dtButtonClose = null;
  }
  /**
   * Call change event before alter chips values.
   */
  valueChanged() {
    if (this.chips) {
      if (typeof this.chips === 'string') {
        try {
          this.internalChips = JSON.parse(this.chips);
        }
        catch {
          this.internalChips = [];
        }
      }
      else {
        this.internalChips = this.chips;
      }
    }
    else {
      this.internalChips = [];
    }
  }
  internalValueChanged() {
    this.minMaxValidation();
  }
  /**
   * Return the validity of the input chips.
   */
  async isValid() {
    return this.validateChips();
  }
  /**
   * Return the chips
   */
  async get() {
    return this.internalChips;
  }
  /**
   * Clear all chips
   */
  async clear() {
    this.internalChips = [];
    this.value = '';
  }
  async add(value) {
    this.handleDelimiters();
    if (value) {
      this.setChip(value);
    }
    else {
      this.setChip(this.value);
    }
    this.value = '';
  }
  async setFocus() {
    this.nativeInput.focus();
  }
  async removeFocus() {
    this.nativeInput.blur();
  }
  componentDidLoad() {
    this.minMaxValidation();
  }
  componentWillLoad() {
    this.valueChanged();
  }
  validateChips() {
    if (this.type === 'email') {
      return !this.internalChips.some((chip) => !this.validateChip(chip));
    }
    else {
      return true;
    }
  }
  handleOnBlur() {
    this.bdsBlur.emit(this.internalChips);
    if (this.internalChips.length > 0) {
      this.bdsSubmit.emit({ value: this.internalChips });
    }
    this.handleDelimiters();
    this.isPressed = false;
    if (this.blurCreation) {
      this.setChip(this.value);
      this.value = '';
    }
  }
  minMaxValidation() {
    if (!this.maxChipsLength == undefined) {
      this.inputAvalible = true;
    }
    else if (this.internalChips.length >= this.maxChipsLength) {
      this.inputAvalible = false;
      this.bdsExtendedQuantityInput.emit({ value: !this.inputAvalible });
    }
    else {
      this.inputAvalible = true;
    }
  }
  getLastChip() {
    return this.internalChips[this.internalChips.length - 1];
  }
  handleDelimiters() {
    const value = this.nativeInput.value;
    this.value = value ? value.trim() : '';
    if (value.length === 0)
      return;
    const existTerm = value.match(this.delimiters);
    if (!existTerm)
      return;
    const newValue = this.verifyAndSubstituteDelimiters(value);
    if (!newValue) {
      this.clearInputValues();
      return;
    }
    const words = newValue.split(this.delimiters);
    words.forEach((word) => {
      this.setChip(word);
    });
    this.clearInputValues();
  }
  verifyAndSubstituteDelimiters(value) {
    if (value.length === 1 && value[0].match(this.delimiters)) {
      return '';
    }
    let newValue = value.replace(/;/g, ',').replace(/\,+|;+/g, ',');
    if (newValue[0].match(this.delimiters)) {
      newValue = newValue.substring(1);
    }
    return newValue;
  }
  async handleChange(event) {
    const { detail: { value }, } = event;
    // console.log('TRACE [input-chips] handleChange 1:', { value });
    this.value = value ? value.trim() : '';
    if (value.length === 0)
      return;
    const existTerm = value.match(this.delimiters);
    if (!existTerm)
      return;
    const newValue = this.verifyAndSubstituteDelimiters(value);
    if (!newValue) {
      this.clearInputValues();
      return;
    }
    const words = newValue.split(this.delimiters);
    words.forEach((word) => {
      this.setChip(word.trimStart());
    });
    this.clearInputValues();
    this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
    this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
  }
  clearInputValues(value = '') {
    this.nativeInput.value = value;
    this.value = value;
  }
  setChip(name) {
    if (!this.duplicated) {
      const exists = this.internalChips.some((chip) => chip.toLowerCase() === name.toLowerCase());
      if (exists)
        return;
    }
    if (!validations.whitespaceValidation(name)) {
      return;
    }
    this.internalChips = [...this.internalChips, name];
  }
  validateChip(name) {
    const trimmedName = name.trim();
    if (this.type === 'email' && validations.emailValidation(trimmedName)) {
      return false;
    }
    return true;
  }
  removeLastChip() {
    this.internalChips = this.internalChips.slice(0, this.internalChips.length - 1);
  }
  removeChip(event) {
    const { detail: { id }, } = event;
    this.internalChips = this.internalChips.filter((_chip, index) => index.toString() !== id);
    this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
    this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
  }
  renderChips() {
    if (!this.internalChips.length) {
      return [];
    }
    return this.internalChips.map((chip, index$1) => {
      const id = index$1.toString();
      const limit = 30;
      if (chip.length <= limit) {
        return (index.h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event), dtButtonClose: this.dtButtonClose }, chip));
      }
      else {
        return (index.h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, index.h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event), dtButtonClose: this.dtButtonClose }, `${chip.slice(0, limit)} ...`)));
      }
    });
  }
  renderIcon() {
    return (this.icon && (index.h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label,
      } }, index.h("bds-icon", { size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  renderLabel() {
    return (this.label && (index.h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, index.h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
  }
  renderMessage() {
    const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
    let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;
    if (!message && this.validationDanger)
      message = this.validationMesage;
    const styles = this.danger || this.validationDanger
      ? 'input__message input__message--danger'
      : this.success
        ? 'input__message input__message--success'
        : 'input__message';
    if (message) {
      return (index.h("div", { class: styles, part: "input__message" }, index.h("div", { class: "input__message__icon" }, index.h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), index.h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
    }
    return undefined;
  }
  render() {
    const isPressed = this.isPressed && !this.disabled;
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null }, index.h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), index.h("div", { class: "input__container" }, this.renderLabel(), index.h("div", { class: { input__container__wrapper: true } }, this.internalChips.length > 0 && (index.h("span", { style: { height: this.height, maxHeight: this.maxHeight }, class: "inside-input-left" }, this.renderChips())), this.inputAvalible && (index.h("input", { ref: (input) => (this.nativeInput = input), class: { input__container__text: true }, name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest })))), this.counterLength && (index.h("bds-counter-text", { length: this.internalChips.length, max: this.maxChipsLength, active: isPressed })), this.success && index.h("bds-icon", { class: "icon-success", name: "checkb", theme: "outline", size: "xxx-small" }), index.h("slot", { name: "input-right" })), this.renderMessage()));
  }
  static get watchers() { return {
    "chips": ["valueChanged"],
    "internalChips": ["internalValueChanged"]
  }; }
};
InputChips.style = inputChipsCss;

exports.bds_input_chips = InputChips;
