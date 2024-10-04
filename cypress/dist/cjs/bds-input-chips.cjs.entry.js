'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const validations = require('./validations-f941fed4.js');

const inputChipsCss = ".sc-bds-input-chips-h{display:display}.element_input.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input.sc-bds-input-chips input.sc-bds-input-chips,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-webkit-input-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-moz-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips:-ms-input-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-ms-input-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-webkit-input-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input.sc-bds-input-chips .bds-icon.sc-bds-input-chips{position:relative;z-index:1}.input--state-primary.sc-bds-input-chips{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.sc-bds-input-chips .input__icon.sc-bds-input-chips{position:relative}.input--state-primary.sc-bds-input-chips .input__icon.sc-bds-input-chips::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary.sc-bds-input-chips:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed.sc-bds-input-chips{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed.sc-bds-input-chips .input__icon.sc-bds-input-chips .bds-icon.sc-bds-input-chips{color:var(--color-primary, #1e6bf1)}.input--state-primary.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:var(--color-content-default, #454545)}.input--state-primary.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips bds-typo.sc-bds-input-chips{color:var(--color-primary, #1e6bf1)}.input--state-primary.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger.sc-bds-input-chips{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.sc-bds-input-chips .input__icon.sc-bds-input-chips{position:relative}.input--state-danger.sc-bds-input-chips .input__icon.sc-bds-input-chips::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger.sc-bds-input-chips:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed.sc-bds-input-chips{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed.sc-bds-input-chips .input__icon.sc-bds-input-chips .bds-icon.sc-bds-input-chips{color:var(--color-negative, #e60f0f)}.input--state-danger.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:var(--color-delete, #e60f0f)}.input--state-danger.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips bds-typo.sc-bds-input-chips{color:var(--color-negative, #e60f0f)}.input--state-danger.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success.sc-bds-input-chips{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.sc-bds-input-chips .input__icon.sc-bds-input-chips{position:relative}.input--state-success.sc-bds-input-chips .input__icon.sc-bds-input-chips::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success.sc-bds-input-chips:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed.sc-bds-input-chips{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed.sc-bds-input-chips .input__icon.sc-bds-input-chips .bds-icon.sc-bds-input-chips{color:var(--color-positive, #10603b)}.input--state-success.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:var(--color-content-default, #454545)}.input--state-success.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips bds-typo.sc-bds-input-chips{color:var(--color-positive, #10603b)}.input--state-success.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled.sc-bds-input-chips{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled.sc-bds-input-chips .input__icon.sc-bds-input-chips{position:relative}.input--state-disabled.sc-bds-input-chips .input__icon.sc-bds-input-chips::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input.sc-bds-input-chips .icon-success.sc-bds-input-chips{color:var(--color-positive, #10603b);margin-left:4px}.input--label.sc-bds-input-chips{padding:7px 4px 8px 12px}.input__icon.sc-bds-input-chips{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large.sc-bds-input-chips{padding:4px}.input__container.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips.sc-bds-input-chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips.sc-bds-input-chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips.sc-bds-input-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text.sc-bds-input-chips{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text.sc-bds-input-chips:focus{outline:0}.input__container__text.sc-bds-input-chips::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text.sc-bds-input-chips:focus{outline:0}.input__container__text[type=checkbox].sc-bds-input-chips,.input__container__text[type=radio].sc-bds-input-chips{width:13px;height:13px}.input__container__text[type=search].sc-bds-input-chips{-webkit-appearance:textfield;-webkit-box-sizing:content-box}.sc-bds-input-chips::-webkit-search-decoration{display:none}.input__container__text[type=reset].sc-bds-input-chips,.input__container__text[type=button].sc-bds-input-chips,.input__container__text[type=submit].sc-bds-input-chips{overflow:visible}.input__container__text.sc-bds-input-chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text.sc-bds-input-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message.sc-bds-input-chips bds-typo.sc-bds-input-chips{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon.sc-bds-input-chips{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger.sc-bds-input-chips .bds-icon.sc-bds-input-chips{color:var(--color-negative, #e60f0f)}.input__message--danger.sc-bds-input-chips .input__message__text.sc-bds-input-chips{color:var(--color-negative, #e60f0f)}.input__message--success.sc-bds-input-chips .input__message__icon.sc-bds-input-chips .bds-icon.sc-bds-input-chips{color:var(--color-positive, #10603b)}.input__message--success.sc-bds-input-chips .input__message__text.sc-bds-input-chips{color:var(--color-content-default, #454545)}.inside-input-left.sc-bds-input-chips{position:relative;display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:8px}.input-chips__chip.sc-bds-input-chips{margin:2px 4px 2px 0px}.input-chips__chips.sc-bds-input-chips{-ms-flex:1;flex:1}";

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
          break;
        case 'Backspace' :
          if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
            this.removeLastChip();
            this.bdsChangeChips.emit({ data: this.internalChips });
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
        catch (_a) {
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
    this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
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
      this.setChip(word);
    });
    this.clearInputValues();
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
    return (index.h(index.Host, null, index.h("div", { class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, index.h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), index.h("div", { class: "input__container" }, this.renderLabel(), index.h("div", { class: { input__container__wrapper: true } }, this.internalChips.length > 0 && index.h("span", { class: "inside-input-left" }, this.renderChips()), this.inputAvalible && (index.h("input", { ref: (input) => (this.nativeInput = input), class: { input__container__text: true }, name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest })))), this.counterLength && (index.h("bds-counter-text", { length: this.internalChips.length, max: this.maxChipsLength, active: isPressed })), this.success && index.h("bds-icon", { class: "icon-success", name: "checkb", theme: "outline", size: "xxx-small" }), index.h("slot", { name: "input-right" })), this.renderMessage())));
  }
  static get watchers() { return {
    "chips": ["valueChanged"],
    "internalChips": ["internalValueChanged"]
  }; }
};
InputChips.style = inputChipsCss;

exports.bds_input_chips = InputChips;
