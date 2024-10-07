import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';
import { g as getScrollParent, p as positionAbsoluteElement } from './position-element-dba422ab.js';

const autocompleteCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-primary .input__container__text:-moz-placeholder-shown{color:var(--color-content-ghost, #8c8c8c)}.input--state-primary .input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input--state-primary .input__container__text:placeholder-shown{color:var(--color-content-ghost, #8c8c8c)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-danger .input__container__text:-moz-placeholder-shown{color:var(--color-content-ghost, #8c8c8c)}.input--state-danger .input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input--state-danger .input__container__text:placeholder-shown{color:var(--color-content-ghost, #8c8c8c)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-success .input__container__text:-moz-placeholder-shown{color:var(--color-content-ghost, #8c8c8c)}.input--state-success .input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input--state-success .input__container__text:placeholder-shown{color:var(--color-content-ghost, #8c8c8c)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__text::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__text::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__text::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__text::placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #454545)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__text::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__text::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__text::placeholder{color:var(--color-content-ghost, #8c8c8c)}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px}.input__container__wrapper .inside-input-left{display:inline}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit;-ms-flex-negative:99999;flex-shrink:99999}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}:host{display:block}.select{position:relative;outline:none;overflow:hidden}.select__icon{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.select__icon bds-icon{margin-left:10px}.select .icon-hidden{visibility:hidden}.select__options{display:grid;background:var(--color-surface-0, #ffffff);width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;pointer-events:none;opacity:0}.select__options::-webkit-scrollbar{width:16px;background-color:transparent}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}.select__options .selection-title{-ms-flex-order:-2;order:-2;width:100%;padding:8px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.select__options .select-all{-ms-flex-order:-3;order:-3;padding:8px 8px 8px 12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-direction:row;flex-direction:row}.select__options .content-divisor{display:block;width:100%;height:1px;background-color:var(--color-surface-1, #f6f6f6)}.select__options .content-divisor .divisor{display:block;margin:0 16px;height:1px;background-color:var(--color-border-2, #e0e0e0)}.select__options .load-spinner{background-color:var(--color-surface-1, #f6f6f6);height:200px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}.select__options .options-checked{-ms-flex-order:-1;order:-1}";

const BdsAutocomplete = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsChange = createEvent(this, "bdsChange", 7);
    this.bdsSelectedChange = createEvent(this, "bdsSelectedChange", 7);
    this.bdsMultiselectedChange = createEvent(this, "bdsMultiselectedChange", 7);
    this.bdsInput = createEvent(this, "bdsInput", 7);
    this.bdsCancel = createEvent(this, "bdsCancel", 7);
    this.bdsFocus = createEvent(this, "bdsFocus", 7);
    this.bdsBlur = createEvent(this, "bdsBlur", 7);
    this.refDropdown = (el) => {
      this.dropElement = el;
    };
    this.refIconDrop = (el) => {
      this.iconDropElement = el;
    };
    this.refCheckAllInput = (input) => {
      this.checkAllInput = input;
    };
    this.onFocus = () => {
      this.isFocused = true;
      this.isPressed = true;
      this.bdsFocus.emit();
    };
    this.onFocusout = () => {
      if (!this.isOpen) {
        this.nativeInput.value = this.getText();
      }
    };
    this.onBlur = () => {
      var _a;
      this.bdsBlur.emit();
      this.isPressed = false;
      if (!this.isOpen) {
        this.isFocused = false;
        this.nativeInput.value = this.getText();
        this.cleanInputSelection();
      }
      if (this.selectionType == 'multiple' && ((_a = this.checkedOptions) === null || _a === void 0 ? void 0 : _a.length) > 0)
        this.getTextMultiselect(this.checkedOptions);
    };
    this.onClickWrapper = () => {
      this.onFocus();
      this.toggle();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.toggle = () => {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
      }
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
        return opt.querySelector(`#bds-typo-label-${this.value}`).textContent;
      }
      return (opt === null || opt === void 0 ? void 0 : opt.titleText) ? opt.titleText : (_b = (_a = opt === null || opt === void 0 ? void 0 : opt.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
    };
    this.getText = () => {
      const opt = this.childOptions.find((option) => option.value == this.value);
      return this.getTextFromOption(opt);
    };
    this.getTextMultiselect = (data) => {
      const valueInput = (data === null || data === void 0 ? void 0 : data.length) > 0 && `${data === null || data === void 0 ? void 0 : data.length} selecionados`;
      this.textMultiselect = valueInput;
    };
    this.handlerMultiselect = () => {
      this.updateListChecked(this.childOptions);
      this.nativeInput.value = '';
      this.value = undefined;
      this.resetFilterOptions();
      if (this.childOptions.length != this.checkedOptions.length) {
        setTimeout(() => {
          this.checkAllInput.checked = false;
        }, 10);
      }
    };
    this.handleCheckAll = (event) => {
      const { detail: { checked }, } = event;
      for (const option of this.childOptions) {
        if (checked) {
          option.toMark();
        }
        else {
          option.markOff();
        }
      }
      setTimeout(() => {
        this.updateListChecked(this.childOptions);
      }, 10);
    };
    this.updateListChecked = (data) => {
      for (const option of data) {
        option.checked ? option.classList.add('option-checked') : option.classList.remove('option-checked');
      }
      const defaultCheckedOptions = Array.from(data).filter((item) => item.checked == true);
      const value = defaultCheckedOptions.map((term) => ({
        value: term.value,
        label: term.textContent,
        checked: term.checked,
      }));
      this.checkedOptions = value;
    };
    this.handler = (event) => {
      const { detail: { value }, } = event;
      this.value = value;
      this.toggle();
    };
    this.cleanInputSelection = async () => {
      if (!this.disabled) {
        this.value = '';
        this.nativeInput.value = '';
        this.isOpen = false;
        this.bdsCancel.emit({ value: '' });
        await this.resetFilterOptions();
      }
    };
    this.changedInputValue = async (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.bdsInput.emit(ev);
      if (this.nativeInput.value) {
        await this.filterOptions(this.nativeInput.value);
      }
      else {
        this.value = '';
        if (this.isOpen) {
          await this.resetFilterOptions();
        }
        else {
          this.setTimeoutFilter();
        }
      }
      if (this.isOpen === false) {
        this.value = this.getSelectedValue();
        this.setTimeoutFilter();
      }
    };
    this.intoView = null;
    this.isPressed = false;
    this.isOpen = false;
    this.text = '';
    this.textMultiselect = '';
    this.placeholderState = this.placeholder;
    this.internalOptions = undefined;
    this.cloneOptions = undefined;
    this.checkedOptions = undefined;
    this.isFocused = false;
    this.validationDanger = false;
    this.validationMesage = '';
    this.options = undefined;
    this.value = undefined;
    this.selected = undefined;
    this.danger = false;
    this.success = false;
    this.disabled = false;
    this.searchOnlyTitle = true;
    this.label = '';
    this.icon = '';
    this.placeholder = '';
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.optionsPosition = 'auto';
    this.clearIconOnFocus = false;
    this.dataTest = null;
    this.loading = false;
    this.selectionType = 'single';
    this.selectionTitle = '';
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
  itemSelectedChanged() {
    this.bdsSelectedChange.emit(this.selected);
  }
  valueChanged() {
    this.bdsChange.emit({ value: this.value == null ? this.value : this.value.toString() });
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
    this.selected = this.childOptionSelected;
    this.text = this.getText();
  }
  handleWindow(ev) {
    if (!this.el.contains(ev.target)) {
      this.isOpen = false;
    }
  }
  changeCheckedOptions() {
    var _a;
    this.placeholderState =
      this.selectionType === 'multiple'
        ? ((_a = this.checkedOptions) === null || _a === void 0 ? void 0 : _a.length) === 0 || this.checkedOptions === null
          ? this.placeholder
          : ''
        : this.placeholder;
    this.getTextMultiselect(this.checkedOptions);
    this.bdsMultiselectedChange.emit({ value: this.checkedOptions });
  }
  parseOptions() {
    if (this.options) {
      this.resetFilterOptions();
      try {
        this.internalOptions = typeof this.options === 'string' ? JSON.parse(this.options) : this.options;
      }
      catch (e) {
        this.internalOptions = [];
      }
    }
  }
  changeSelectionType() {
    if (!this.options) {
      for (const option of this.childOptions) {
        if (this.selectionType === 'multiple') {
          option.typeOption = 'checkbox';
          option.addEventListener('optionChecked', this.handlerMultiselect);
        }
        else {
          option.typeOption = 'default';
          option.selected = this.value === option.value;
          option.addEventListener('optionSelected', this.handler);
        }
      }
    }
  }
  componentWillLoad() {
    this.intoView = getScrollParent(this.el);
    this.options && this.parseOptions();
  }
  componentDidLoad() {
    if (!this.options) {
      for (const option of this.childOptions) {
        if (this.selectionType === 'multiple') {
          option.typeOption = 'checkbox';
          option.addEventListener('optionChecked', this.handlerMultiselect);
        }
        else {
          option.typeOption = 'default';
          option.selected = this.value === option.value;
          option.addEventListener('optionSelected', this.handler);
        }
      }
    }
    this.text = this.getText();
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
    const positionValue = positionAbsoluteElement({
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
  get childOptions() {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option'))
      : Array.from(this.el.querySelectorAll('bds-select-option'));
  }
  get childOptionSelected() {
    return this.options
      ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option')).find((option) => option.selected)
      : Array.from(this.el.querySelectorAll('bds-select-option')).find((option) => option.selected);
  }
  keyPressWrapper(event) {
    var _a, _b, _c, _d;
    switch (event.key) {
      case 'Enter':
        this.toggle();
        break;
      case 'ArrowDown':
        if (!this.disabled) {
          this.isOpen = true;
        }
        if (this.childOptionSelected) {
          this.value = (_a = this.childOptionSelected.nextSibling) === null || _a === void 0 ? void 0 : _a.value;
          return;
        }
        this.value = (_b = this.el.firstElementChild) === null || _b === void 0 ? void 0 : _b.value;
        break;
      case 'ArrowUp':
        if (this.childOptionSelected) {
          this.value = (_c = this.childOptionSelected.previousSibling) === null || _c === void 0 ? void 0 : _c.value;
          return;
        }
        this.value = (_d = this.el.lastElementChild) === null || _d === void 0 ? void 0 : _d.value;
        break;
    }
  }
  setTimeoutFilter() {
    setTimeout(() => {
      this.resetFilterOptions();
    }, 500);
  }
  async filterOptions(term) {
    if (!term) {
      await this.resetFilterOptions();
    }
    for (const option of this.childOptions) {
      const optionTextLowercase = this.searchOnlyTitle
        ? this.getTextFromOption(option).toLowerCase()
        : option.textContent.toLowerCase();
      const termLower = term.toLowerCase();
      optionTextLowercase.includes(termLower)
        ? option.removeAttribute('invisible')
        : option.setAttribute('invisible', 'invisible');
    }
  }
  async resetFilterOptions() {
    const childOptions = this.childOptions;
    for (const option of childOptions) {
      option.removeAttribute('invisible');
    }
  }
  getSelectedValue() {
    var _a;
    return (_a = this.childOptionSelected) === null || _a === void 0 ? void 0 : _a.value;
  }
  renderIcon() {
    return (this.icon && (h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label,
      } }, h("bds-icon", { size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  renderLabel() {
    return (this.label && (h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
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
      return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
    }
    return undefined;
  }
  render() {
    var _a, _b;
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: {
        input: true,
        select: true,
        'input--state-primary': !this.danger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': this.isPressed,
      }, onClick: this.onClickWrapper }, this.renderIcon(), h("div", { class: "input__container", tabindex: "0", onFocusout: this.onFocusout }, this.renderLabel(), h("div", { class: { input__container__wrapper: true } }, ((_a = this.textMultiselect) === null || _a === void 0 ? void 0 : _a.length) > 0 && (h("bds-typo", { variant: "fs-14", class: "inside-input-left" }, this.textMultiselect)), h("input", { class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), disabled: this.disabled, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholderState, type: "text", value: this.text, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper.bind(this) }))), h("div", { class: "select__icon" }, h("bds-icon", { size: "small", name: "error", theme: "solid", onClick: this.cleanInputSelection, class: {
        'icon-hidden': (this.clearIconOnFocus && (!this.isFocused || !this.isOpen)) || !this.value,
      } }), h("bds-icon", { ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" }))), this.renderMessage(), this.loading ? (h("div", { ref: (el) => this.refDropdown(el), class: {
        select__options: true,
        'select__options--open': this.isOpen,
      } }, h("bds-loading-spinner", { class: "load-spinner", size: "small" }))) : (h("div", { ref: (el) => this.refDropdown(el), class: {
        select__options: true,
        'select__options--open': this.isOpen,
      } }, this.selectionTitle && this.selectionType == 'multiple' && (h("bds-typo", { class: "selection-title", variant: "fs-10", bold: "bold" }, this.selectionTitle)), this.selectionType == 'multiple' && this.value == null && (h("bds-checkbox", { ref: this.refCheckAllInput, refer: `refer-multiselect`, label: `Selecionar Todos`, name: "chack-all", class: "select-all", onBdsChange: (ev) => this.handleCheckAll(ev) })), ((_b = this.checkedOptions) === null || _b === void 0 ? void 0 : _b.length) > 0 && (h("span", { class: "content-divisor" }, h("span", { class: "divisor" }))), this.internalOptions ? (this.internalOptions.map((option, idx) => (h("bds-select-option", { onOptionSelected: this.handler, onOptionChecked: this.handlerMultiselect, selected: this.value === option.value, value: option.value, key: idx, bulkOption: option.bulkOption, status: option.status, "type-option": this.selectionType == 'multiple' ? 'checkbox' : 'default' }, option.label)))) : (h("slot", null))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isOpen": ["isOpenChanged"],
    "selected": ["itemSelectedChanged"],
    "value": ["valueChanged"],
    "checkedOptions": ["changeCheckedOptions"],
    "options": ["parseOptions"],
    "selectionType": ["changeSelectionType"]
  }; }
};
BdsAutocomplete.style = autocompleteCss;

export { BdsAutocomplete as bds_autocomplete };
