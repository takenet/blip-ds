'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const inputEditableCss = ".element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input,.element_input textarea{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder,.element_input textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-moz-placeholder,.element_input textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input:-ms-input-placeholder,.element_input textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-ms-input-placeholder,.element_input textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::placeholder,.element_input textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-webkit-input-placeholder,.element_input textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #f6f6f6)}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-primary, #1e6bf1);z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-delete, #e60f0f);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-delete, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-success, #84ebbc);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-content-default, #454545);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-content-default, #454545);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed{color:var(--color-content-default, #454545)}.input--state-success .input__container__text{caret-color:var(--color-content-default, #454545);color:var(--color-content-default, #454545)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed;background:var(--color-surface-2, #e0e0e0)}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-primary, #1e6bf1);z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-success, #84ebbc);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-delete, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-delete, #e60f0f)}.input__editable{display:block}.input__editable--static{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative}.input__editable--static::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.input__editable--static:focus-visible{outline:none}.input__editable--static:focus-visible::before{border-color:var(--color-focus, #c226fb)}.input__editable--static:hover .input__editable--static__typo{border:1px solid var(--color-primary, #1e6bf1)}.input__editable--static:hover .input__editable--static__icon{color:var(--color-primary, #1e6bf1)}.input__editable--static__typo{border:1px solid transparent;margin:0;padding:8px;border-radius:8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:80%;color:var(--color-content-default, #454545)}.input__editable--static__icon{margin-left:8px;color:var(--color-content-ghost, #8c8c8c)}.input__editable--active{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.input__editable--active .element_input{min-width:120px;margin-right:4px}.input__editable--active .element_input.expanded{max-width:100%}.input__editable--active .element_input.fixed{max-width:140px}.input__editable--active .element_input.short input{font-size:1rem;line-height:0px}.input__editable--active .element_input.standard input{font-size:1.5rem;line-height:0px}.input__editable--active .element_input.tall input{font-size:2.5rem;line-height:0px}.input__editable--active .element_input::part(input-container){padding:4px 4px 5px 12px}.input__editable--active .element_input::part(input__message){min-width:180px}.input__editable--active bds-icon{cursor:pointer;position:relative}.input__editable--active bds-icon::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.input__editable--active bds-icon:focus-visible{outline:none}.input__editable--active bds-icon:focus-visible::before{border-color:var(--color-focus, #c226fb)}.input__editable--active__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:auto 0}.input__editable--active__icon--error{color:var(--color-delete, #e60f0f)}.input__editable--active__icon--error:hover{color:var(--color-delete, #e60f0f)}.input__editable--active__icon--checkball{color:var(--color-primary, #1e6bf1)}.input__editable--active__icon--checkball:hover{color:var(--color-primary, #1e6bf1)}.input__editable--active__icon--checkball--error{color:var(--color-content-ghost, #8c8c8c)}.input__editable--active__icon--checkball--error:hover{color:var(--color-content-ghost, #8c8c8c)}.input__editable--hidden{display:none}";

const InputEditable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsInputEditableSave = index.createEvent(this, "bdsInputEditableSave", 7);
    this.bdsChange = index.createEvent(this, "bdsChange", 7);
    this.bdsInput = index.createEvent(this, "bdsInput", 7);
    this.bdsCancel = index.createEvent(this, "bdsCancel", 7);
    this.bdsFocus = index.createEvent(this, "bdsFocus", 7);
    this.bdsBlur = index.createEvent(this, "bdsBlur", 7);
    this.handleEditing = () => {
      this.toggleEditing();
    };
    this.toggleEditing = () => {
      this.isEditing = !this.isEditing;
    };
    this.handleSaveText = () => {
      const newValue = this.nativeInput.value;
      if (newValue.length > 0 && newValue.length >= this.minlength && !this.danger) {
        this.bdsInputEditableSave.emit({ value: newValue, oldValue: this.oldValue });
        this.oldValue = newValue;
        this.value = newValue;
        this.toggleEditing();
      }
    };
    this.changedInputValue = async (ev) => {
      const input = ev.target;
      this.checkValidity();
      if (input) {
        if (input.value.length < Number(this.minlength)) {
          this.isValid = false;
        }
        else {
          this.isValid = true;
        }
      }
      this.bdsInput.emit(ev);
      this.bdsChange.emit({ value: this.nativeInput.value, oldValue: this.oldValue });
    };
    this.onFocus = () => {
      this.isFocused = true;
      this.isPressed = true;
      this.bdsFocus.emit();
    };
    this.onBlur = () => {
      this.onBlurValidations();
      this.bdsBlur.emit();
      this.isPressed = false;
    };
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.getExpand = () => {
      if (this.expand) {
        return 'expanded';
      }
      else {
        return 'fixed';
      }
    };
    this.oldValue = undefined;
    this.isEditing = false;
    this.isValid = true;
    this.isPressed = false;
    this.isFocused = false;
    this.validationMesage = '';
    this.validationDanger = false;
    this.size = 'standard';
    this.expand = false;
    this.dataTest = null;
    this.inputName = '';
    this.value = '';
    this.requiredErrorMessage = undefined;
    this.minlength = 0;
    this.minlengthErrorMessage = undefined;
    this.maxlength = undefined;
    this.errorMessage = '';
    this.successMessage = '';
    this.helperMessage = '';
    this.placeholder = '';
    this.danger = false;
    this.success = false;
    this.dtButtonEdit = null;
    this.dtButtonClose = null;
    this.dtButtonConfirm = null;
  }
  componentWillLoad() {
    this.oldValue = this.value;
  }
  onBlurValidations() {
    this.requiredValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    this.checkValidity();
  }
  requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }
  lengthValidation() {
    if (this.nativeInput.validity.tooShort) {
      this.validationMesage = this.minlengthErrorMessage;
      this.validationDanger = true;
      return;
    }
    if (this.nativeInput.validity.tooLong) {
      this.validationDanger = true;
      return;
    }
  }
  checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }
  handleKeyDownToggle(event) {
    if (event.key == 'Enter') {
      this.toggleEditing();
    }
  }
  handleKeyDownSave(event) {
    if (event.key == 'Enter') {
      this.handleSaveText();
    }
  }
  getFontSizeClass() {
    if (this.size == 'short') {
      return 'fs-16';
    }
    else if (this.size == 'standard') {
      return 'fs-24';
    }
    else if (this.size == 'tall') {
      return 'fs-40';
    }
    else {
      return 'fs-24';
    }
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
      return (index.h("div", { class: styles, part: "input__message" }, index.h("div", { class: "input__message__icon" }, index.h("bds-icon", { size: "x-small", name: icon, theme: "solid", color: "inherit" })), index.h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
    }
    return undefined;
  }
  render() {
    const variant = this.getFontSizeClass();
    const inputExpand = this.getExpand();
    return (index.h(index.Host, null, index.h("div", { class: "input__editable" }, index.h("div", { class: { 'input__editable--static': true, 'input__editable--hidden': this.isEditing }, onClick: this.handleEditing, "data-test": this.dtButtonEdit, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this) }, index.h("bds-typo", { tag: "span", part: "input__editable--static__typo", class: "input__editable--static__typo", variant: variant }, this.value), index.h("bds-icon", { key: "edit-icon", class: "input__editable--static__icon", name: "edit" })), index.h("div", { class: { 'input__editable--active': true, 'input__editable--hidden': !this.isEditing } }, index.h("div", { class: { element_input: true, [inputExpand]: true, [this.size]: true } }, index.h("div", { class: {
        input: true,
        select: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--pressed': this.isPressed,
      }, onClick: this.onClickWrapper }, index.h("div", { class: "input__container" }, index.h("input", { class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholder, value: this.value, required: true, part: "input", "data-test": this.dataTest })), this.success && index.h("bds-icon", { class: "icon-success", name: "checkball", theme: "solid", size: "xxx-small" })), this.renderMessage()), index.h("div", { class: "input__editable--active__icon" }, index.h("bds-icon", { key: "error-icon", class: "input__editable--active__icon--error", theme: "solid", name: "error", onClick: this.handleEditing, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this), dataTest: this.dtButtonClose }), index.h("bds-icon", { key: "checkball-icon", class: {
        'input__editable--active__icon--checkball': true,
        'input__editable--active__icon--checkball--error': !this.isValid,
      }, theme: "solid", name: "checkball", onClick: this.handleSaveText, tabindex: "0", onKeyDown: this.handleKeyDownSave.bind(this), dataTest: this.dtButtonConfirm }))))));
  }
  get el() { return index.getElement(this); }
};
InputEditable.style = inputEditableCss;

exports.bds_input_editable = InputEditable;
