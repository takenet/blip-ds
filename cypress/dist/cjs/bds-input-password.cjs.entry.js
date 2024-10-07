'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const inputPasswordCss = ".sc-bds-input-password-h{display:block}.element_input.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input.sc-bds-input-password input.sc-bds-input-password{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input.sc-bds-input-password input.sc-bds-input-password::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input.sc-bds-input-password .bds-icon.sc-bds-input-password{position:relative;z-index:1}.input--state-primary.sc-bds-input-password{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.sc-bds-input-password .input__icon.sc-bds-input-password{position:relative}.input--state-primary.sc-bds-input-password .input__icon.sc-bds-input-password::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary.sc-bds-input-password:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed.sc-bds-input-password{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed.sc-bds-input-password .input__icon.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-primary, #1e6bf1)}.input--state-primary.sc-bds-input-password .input__container__label.sc-bds-input-password{color:var(--color-content-default, #454545)}.input--state-primary.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password bds-typo.sc-bds-input-password{color:var(--color-primary, #1e6bf1)}.input--state-primary.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger.sc-bds-input-password{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.sc-bds-input-password .input__icon.sc-bds-input-password{position:relative}.input--state-danger.sc-bds-input-password .input__icon.sc-bds-input-password::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger.sc-bds-input-password:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed.sc-bds-input-password{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed.sc-bds-input-password .input__icon.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-negative, #e60f0f)}.input--state-danger.sc-bds-input-password .input__container__label.sc-bds-input-password{color:var(--color-delete, #e60f0f)}.input--state-danger.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password bds-typo.sc-bds-input-password{color:var(--color-negative, #e60f0f)}.input--state-danger.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success.sc-bds-input-password{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.sc-bds-input-password .input__icon.sc-bds-input-password{position:relative}.input--state-success.sc-bds-input-password .input__icon.sc-bds-input-password::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success.sc-bds-input-password:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed.sc-bds-input-password{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed.sc-bds-input-password .input__icon.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-positive, #10603b)}.input--state-success.sc-bds-input-password .input__container__label.sc-bds-input-password{color:var(--color-content-default, #454545)}.input--state-success.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password bds-typo.sc-bds-input-password{color:var(--color-positive, #10603b)}.input--state-success.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled.sc-bds-input-password{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled.sc-bds-input-password .input__icon.sc-bds-input-password{position:relative}.input--state-disabled.sc-bds-input-password .input__icon.sc-bds-input-password::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input.sc-bds-input-password .icon-success.sc-bds-input-password{color:var(--color-positive, #10603b);margin-left:4px}.input--label.sc-bds-input-password{padding:7px 4px 8px 12px}.input__icon.sc-bds-input-password{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large.sc-bds-input-password{padding:4px}.input__container.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips.sc-bds-input-password{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips.sc-bds-input-password::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips.sc-bds-input-password::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text.sc-bds-input-password{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text.sc-bds-input-password:focus{outline:0}.input__container__text.sc-bds-input-password::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text.sc-bds-input-password:focus{outline:0}.input__container__text[type=checkbox].sc-bds-input-password,.input__container__text[type=radio].sc-bds-input-password{width:13px;height:13px}.input__container__text[type=search].sc-bds-input-password{-webkit-appearance:textfield;-webkit-box-sizing:content-box}.sc-bds-input-password::-webkit-search-decoration{display:none}.input__container__text[type=reset].sc-bds-input-password,.input__container__text[type=button].sc-bds-input-password,.input__container__text[type=submit].sc-bds-input-password{overflow:visible}.input__container__text.sc-bds-input-password::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text.sc-bds-input-password::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message.sc-bds-input-password bds-typo.sc-bds-input-password{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon.sc-bds-input-password{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-negative, #e60f0f)}.input__message--danger.sc-bds-input-password .input__message__text.sc-bds-input-password{color:var(--color-negative, #e60f0f)}.input__message--success.sc-bds-input-password .input__message__icon.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-positive, #10603b)}.input__message--success.sc-bds-input-password .input__message__text.sc-bds-input-password{color:var(--color-content-default, #454545)}.input__password--icon.sc-bds-input-password{position:relative;color:var(--color-content-disable, #636363);display:-ms-flexbox;display:flex}.input__password--icon.sc-bds-input-password::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px;pointer-events:none}.input__password--icon.sc-bds-input-password:focus-visible{outline:none}.input__password--icon.sc-bds-input-password:focus-visible::before{border-color:var(--color-focus, #c226fb)}";

const InputPassword = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsInputPasswordChange = index.createEvent(this, "bdsInputPasswordChange", 7);
    this.bdsInputPasswordInput = index.createEvent(this, "bdsInputPasswordInput", 7);
    this.bdsInputPasswordBlur = index.createEvent(this, "bdsInputPasswordBlur", 7);
    this.bdsInputPasswordFocus = index.createEvent(this, "bdsInputPasswordFocus", 7);
    this.bdsInputPasswordSubmit = index.createEvent(this, "bdsInputPasswordSubmit", 7);
    this.bdsKeyDownBackspace = index.createEvent(this, "bdsKeyDownBackspace", 7);
    this.refNativeInput = (el) => {
      this.nativeInput = el;
    };
    this.toggleEyePassword = () => {
      if (!this.disabled) {
        this.openEyes = !this.openEyes;
      }
    };
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.bdsInputPasswordInput.emit(ev);
    };
    this.onBlur = () => {
      this.bdsInputPasswordBlur.emit();
      this.isPressed = false;
    };
    this.onFocus = () => {
      this.bdsInputPasswordFocus.emit();
      this.isPressed = true;
    };
    this.onSubmit = () => {
      this.bdsInputPasswordSubmit.emit();
    };
    this.keyPressWrapper = (ev) => {
      this.bdsKeyDownBackspace.emit({ ev, value: this.value });
    };
    this.validationDanger = false;
    this.isPressed = false;
    this.validationMesage = '';
    this.openEyes = false;
    this.value = '';
    this.label = '';
    this.inputName = '';
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.readonly = false;
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.danger = false;
    this.success = false;
    this.icon = '';
    this.disabled = false;
    this.autoCapitalize = 'off';
    this.autoComplete = 'off';
    this.placeholder = '';
    this.dataTest = null;
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.toggleEyePassword();
    }
  }
  getAutoComplete() {
    if (!this.openEyes)
      return 'current-password';
    return this.autoComplete;
  }
  onChange() {
    this.bdsInputPasswordChange.emit({ value: this.value == null ? this.value : this.value.toString() });
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
    const iconPassword = this.openEyes ? 'eye-open' : 'eye-closed';
    const type = this.openEyes ? 'text' : 'password';
    const autocomplete = this.getAutoComplete();
    return (index.h(index.Host, null, index.h("div", { class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, index.h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), index.h("div", { class: "input__container" }, this.renderLabel(), index.h("div", { class: { input__container__wrapper: true } }, index.h("input", { ref: this.refNativeInput, class: { input__container__text: true }, type: type, name: this.inputName, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, autocomplete: autocomplete, autocapitalize: this.autoCapitalize, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onSubmit: this.onSubmit, value: this.value, disabled: this.disabled, "data-test": this.dataTest }))), index.h("div", { class: "input__password--icon", onClick: this.toggleEyePassword, onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }, index.h("bds-icon", { size: "small", name: iconPassword, color: "inherit" })), this.success && index.h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage())));
  }
  static get watchers() { return {
    "value": ["onChange"]
  }; }
};
InputPassword.style = inputPasswordCss;

exports.bds_input_password = InputPassword;
