'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const positionElement = require('./position-element-c9b15fa1.js');
const validations = require('./validations-f941fed4.js');

const selectCss = ":host{display:block}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:10px 4px 10px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 7px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-ghost, #8c8c8c);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #454545)}.select{position:relative;outline:none}.select__icon{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.select__options{background:var(--color-surface-0, #ffffff);width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;pointer-events:none;opacity:0}.select__options::-webkit-scrollbar{width:16px;background-color:transparent}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}.inside-input-left{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:8px}.input-chips__chip{margin:2px 4px 2px 0px}.input-chips__chips{-ms-flex:1;flex:1}";

const SelectChips = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsChange = index.createEvent(this, "bdsChange", 7);
    this.bdsCancel = index.createEvent(this, "bdsCancel", 7);
    this.bdsFocus = index.createEvent(this, "bdsFocus", 7);
    this.bdsBlur = index.createEvent(this, "bdsBlur", 7);
    this.bdsChangeChips = index.createEvent(this, "bdsChangeChips", 7);
    this.bdsSelectChipsInput = index.createEvent(this, "bdsSelectChipsInput", 7);
    this.bdsSubmit = index.createEvent(this, "bdsSubmit", 7);
    this.handleChangeChipsValue = async () => {
      await this.resetFilterOptions();
    };
    this.refDropdown = (el) => {
      this.dropElement = el;
    };
    this.refIconDrop = (el) => {
      this.iconDropElement = el;
    };
    this.toggle = () => {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
      }
    };
    this.handler = async (event) => {
      const { detail: { value }, } = event;
      this.selectedOption = value;
      const text = this.getText(value);
      await this.addChip(text);
      this.toggle();
    };
    this.handlerNewOption = async (text) => {
      await this.addChip(text);
      this.toggle();
    };
    this.getText = (value) => {
      const el = this.childOptions.find((option) => option.value === value);
      return this.getTextFromOption(el);
    };
    this.getTextFromOption = (opt) => {
      var _a, _b;
      if ((opt === null || opt === void 0 ? void 0 : opt.status) || (opt === null || opt === void 0 ? void 0 : opt.bulkOption)) {
        if (this.internalOptions) {
          const internalOption = this.internalOptions.find((option) => option.value == opt.value);
          if (internalOption) {
            return internalOption.label;
          }
        }
        return opt.querySelector(`#bds-typo-label-${opt.value}`).textContent;
      }
      return (opt === null || opt === void 0 ? void 0 : opt.titleText) ? opt.titleText : (_b = (_a = opt === null || opt === void 0 ? void 0 : opt.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
    };
    this.setFocusWrapper = () => {
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.removeFocusWrapper = () => {
      this.nativeInput.blur();
    };
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.onFocus = () => {
      this.bdsFocus.emit();
      this.isPressed = true;
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.bdsSelectChipsInput.emit(ev);
      this.changedInputValue();
    };
    this.keyPressWrapper = (event) => {
      switch (event.key) {
        case 'Enter':
          if (this.canAddNew !== false) {
            this.handleDelimiters();
            this.setChip(this.value);
            this.value = '';
          }
          if (!this.disabled) {
            this.isOpen = true;
          }
          break;
        case 'ArrowDown':
          if (!this.disabled) {
            this.isOpen = true;
          }
          break;
        case 'ArrowUp':
          if (!this.disabled) {
            this.isOpen = false;
          }
          break;
        case 'Backspace' :
          if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
            this.removeLastChip();
            this.bdsChangeChips.emit({ data: this.internalChips });
          }
          break;
      }
    };
    this.changedInputValue = async () => {
      this.value = this.nativeInput.value;
      if (this.nativeInput.value) {
        await this.filterOptions(this.nativeInput.value);
      }
      else {
        await this.resetFilterOptions();
      }
      if (this.value && this.isOpen === false) {
        this.isOpen = true;
      }
    };
    this.internalOptions = undefined;
    this.isOpen = false;
    this.intoView = null;
    this.selectedOptions = [];
    this.validationDanger = false;
    this.isPressed = false;
    this.validationMesage = '';
    this.internalChips = [];
    this.selectedOption = undefined;
    this.options = undefined;
    this.chips = [];
    this.newPrefix = '';
    this.value = '';
    this.danger = false;
    this.success = false;
    this.maxlength = undefined;
    this.errorMessage = '';
    this.disabled = false;
    this.label = '';
    this.icon = '';
    this.duplicated = false;
    this.canAddNew = true;
    this.notFoundMessage = 'No results found';
    this.type = 'text';
    this.delimiters = /,|;/;
    this.disableSubmit = false;
    this.helperMessage = '';
    this.successMessage = '';
    this.inputName = '';
    this.placeholder = '';
    this.optionsPosition = 'auto';
    this.dataTest = null;
  }
  isOpenChanged(isOpen) {
    if (this.positionHeightDrop == 'bottom') {
      this.iconDropElement.name = this.isOpen ? 'arrow-up' : 'arrow-down';
    }
    else {
      this.iconDropElement.name = this.isOpen ? 'arrow-down' : 'arrow-up';
    }
    if (isOpen)
      if (this.optionsPosition != 'auto') {
        this.setDefaultPlacement(this.optionsPosition);
      }
      else {
        this.validatePositionDrop();
      }
  }
  handleWindow(ev) {
    if (!this.el.contains(ev.target)) {
      this.isOpen = false;
    }
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
    this.handleChangeChipsValue();
    this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
    if (this.internalChips.length > 0) {
      const latestOption = { label: this.getLastChip(), value: this.selectedOption };
      this.selectedOptions = [...this.selectedOptions, latestOption];
      this.bdsChange.emit({ data: this.selectedOptions });
    }
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
  async getChips() {
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
  componentWillLoad() {
    this.valueChanged();
    this.intoView = positionElement.getScrollParent(this.el);
  }
  async componentDidLoad() {
    await this.resetFilterOptions();
    if (this.optionsPosition != 'auto') {
      this.setDefaultPlacement(this.optionsPosition);
    }
    else {
      this.validatePositionDrop();
    }
  }
  setDefaultPlacement(value) {
    if (value == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    }
    else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }
  validatePositionDrop() {
    const positionValue = positionElement.positionAbsoluteElement({
      actionElement: this.el,
      changedElement: this.dropElement,
      intoView: this.intoView,
    });
    this.positionHeightDrop = positionValue.y;
    if (positionValue.y == 'bottom') {
      this.dropElement.classList.add('select__options--position-bottom');
      this.iconDropElement.name = 'arrow-down';
    }
    else {
      this.dropElement.classList.add('select__options--position-top');
      this.iconDropElement.name = 'arrow-up';
    }
  }
  async connectedCallback() {
    for (const option of this.childOptions) {
      option.addEventListener('optionSelected', this.handler);
    }
  }
  get childOptionsEnabled() {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'))
      : Array.from(this.el.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'));
  }
  get childOptions() {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'))
      : Array.from(this.el.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'));
  }
  async filterOptions(term) {
    if (!term) {
      await this.resetFilterOptions();
      return;
    }
    for (const option of this.childOptions) {
      const isExistsChip = this.existsChip(option.textContent, await this.getChips());
      const optionTextLower = option.textContent.toLowerCase();
      const termLower = term.toLowerCase();
      if (isExistsChip) {
        option.setAttribute('invisible', 'invisible');
      }
      if (term && optionTextLower.includes(termLower) && !isExistsChip) {
        option.removeAttribute('invisible');
      }
      if (term && !optionTextLower.includes(termLower) && !isExistsChip) {
        option.setAttribute('invisible', 'invisible');
      }
    }
  }
  async resetFilterOptions() {
    for (const option of this.childOptions) {
      if (this.existsChip(option.textContent, await this.getChips())) {
        option.setAttribute('invisible', 'invisible');
      }
      else {
        option.removeAttribute('invisible');
      }
    }
  }
  existsChip(optionChip, chips) {
    return chips.some((chip) => optionChip === chip);
  }
  enableCreateOption() {
    return !!(this.childOptionsEnabled.length === 0 && this.nativeInput && this.nativeInput.value);
  }
  async addChip(chip) {
    await this.setChip(chip);
    this.nativeInput.value = '';
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
    this.bdsBlur.emit();
    this.isPressed = false;
  }
  getLastChip() {
    return this.internalChips[this.internalChips.length - 1];
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
  async handleChange(event) {
    const { detail: { value }, } = event;
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
        return (index.h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event) }, chip));
      }
      else {
        return (index.h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, index.h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event) }, `${chip.slice(0, limit)} ...`)));
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
  generateKey(value) {
    return value.toLowerCase().replace(/ /g, '-');
  }
  render() {
    const isPressed = this.isPressed && !this.disabled;
    let internalOptions = [];
    if (this.options) {
      if (typeof this.options === 'string') {
        try {
          internalOptions = JSON.parse(this.options);
        }
        catch (e) { }
      }
      else {
        internalOptions = this.options;
      }
    }
    return (index.h("div", { class: "select", tabindex: "0", onFocus: this.setFocusWrapper, onBlur: this.removeFocusWrapper }, index.h("div", { class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null, onClick: this.toggle }, index.h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper }, this.renderIcon(), index.h("div", { class: "input__container" }, this.renderLabel(), index.h("div", { class: { input__container__wrapper: true } }, this.internalChips.length > 0 && index.h("span", { class: "inside-input-left" }, this.renderChips()), index.h("input", { ref: (input) => (this.nativeInput = input), class: { input__container__text: true }, name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper }))), index.h("div", { class: "select__icon" }, index.h("bds-icon", { ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" })), this.success && index.h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()), index.h("div", { ref: (el) => this.refDropdown(el), class: {
        select__options: true,
        'select__options--open': this.isOpen,
      } }, internalOptions.map((option) => (index.h("bds-select-option", { key: this.generateKey(option.value), onOptionSelected: this.handler, value: option.value, status: option.status }, option.label))), index.h("slot", null), this.canAddNew === true && this.enableCreateOption() && (index.h("bds-select-option", { id: "option-add", value: "add", onClick: () => this.handlerNewOption(this.nativeInput.value) }, this.newPrefix, this.nativeInput.value)), !this.canAddNew && this.enableCreateOption() && (index.h("bds-select-option", { id: "no-option", value: "add" }, this.notFoundMessage)))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isOpen": ["isOpenChanged"],
    "chips": ["valueChanged"],
    "internalChips": ["internalValueChanged"]
  }; }
};
SelectChips.style = selectCss;

exports.bds_select_chips = SelectChips;
