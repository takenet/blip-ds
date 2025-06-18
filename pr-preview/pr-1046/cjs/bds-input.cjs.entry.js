'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const validations = require('./validations-d525e60d.js');

const inputCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--textarea{padding:12px 12px 12px 12px;-ms-flex-align:start;align-items:flex-start}.input--textarea.input--label{padding:12px 12px 12px 12px}.input--textarea .input__icon{margin-top:1px}.input--textarea .input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #282828)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #8a0000);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #fabebe);box-shadow:0 0 0 2px var(--color-error, #fabebe)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #282828)}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #01723e);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #282828)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #282828)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px;margin-top:1px}.input--label{padding:7px 4px 8px 12px}.input--label.input--textarea{padding:12px 12px 12px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px;-ms-flex-negative:0;flex-shrink:0}.input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start;margin-top:1px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex:1;flex:1}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper--textarea{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:2px}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;resize:none;cursor:inherit;width:100%;min-height:auto}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text--textarea{resize:vertical;overflow-y:auto;line-height:20px;padding:0;scrollbar-width:thin;scrollbar-color:var(--color-border-2, rgba(0, 0, 0, 0.16)) transparent}.input__container__text--textarea::-webkit-scrollbar{width:8px}.input__container__text--textarea::-webkit-scrollbar-track{background:transparent}.input__container__text--textarea::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.input__container__text--textarea::-webkit-scrollbar-thumb:hover{background:var(--color-content-ghost, #8c8c8c)}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #595959);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px;-ms-flex-negative:0;flex-shrink:0}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #282828)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}";

const Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsChange = index.createEvent(this, "bdsChange", 7);
    this.bdsInput = index.createEvent(this, "bdsInput", 7);
    this.bdsOnBlur = index.createEvent(this, "bdsOnBlur", 7);
    this.bdsFocus = index.createEvent(this, "bdsFocus", 7);
    this.bdsSubmit = index.createEvent(this, "bdsSubmit", 7);
    this.bdsPatternValidation = index.createEvent(this, "bdsPatternValidation", 7);
    this.bdsKeyDownBackspace = index.createEvent(this, "bdsKeyDownBackspace", 7);
    /**
     * Key press event handling (Enter, Backspace, etc).
     */
    this.keyPressWrapper = (event) => {
      switch (event.key) {
        case 'Enter':
          this.bdsSubmit.emit({ event, value: this.value });
          if (this.isSubmit) {
            this.clearTextInput();
            event.preventDefault();
          }
          break;
        case 'Backspace':
        case 'Delete':
          this.bdsKeyDownBackspace.emit({ event, value: this.value });
          break;
      }
    };
    /**
     * Function called when typing in the input field.
     */
    this.onInput = (ev) => {
      this.onBdsInputValidations();
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      // Update textarea if needed
      this.updateTextarea();
      this.bdsInput.emit(ev);
    };
    /**
     * Function called when the input field loses focus.
     */
    this.onBlur = () => {
      this.onBlurValidations();
      this.isPressed = false;
      this.bdsOnBlur.emit();
    };
    /**
     * Function called when the input field gains focus.
     */
    this.onFocus = () => {
      this.isPressed = true;
      this.bdsFocus.emit();
    };
    /**
     * Function called when clicking on the input field.
     */
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    /**
     * Clears the input field value.
     */
    this.clearTextInput = (ev) => {
      if (!this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.value = '';
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
    this.isPressed = false;
    this.isPassword = false;
    this.validationMesage = '';
    this.validationDanger = false;
    this.inputName = '';
    this.type = 'text';
    this.label = '';
    this.placeholder = '';
    this.autoCapitalize = 'off';
    this.autoComplete = 'off';
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.readonly = false;
    this.required = undefined;
    this.pattern = undefined;
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.icon = '';
    this.disabled = false;
    this.danger = false;
    this.success = false;
    this.value = '';
    this.counterLength = false;
    this.counterLengthRule = null;
    this.isSubmit = false;
    this.isTextarea = false;
    this.rows = 3;
    this.cols = 0;
    this.autoResize = true;
    this.resizable = false;
    this.minHeight = 60;
    this.maxHeight = 200;
    this.iconSize = 'small';
    this.requiredErrorMessage = undefined;
    this.minlengthErrorMessage = undefined;
    this.minErrorMessage = undefined;
    this.maxErrorMessage = undefined;
    this.emailErrorMessage = undefined;
    this.numberErrorMessage = undefined;
    this.chips = undefined;
    this.debounceDelay = 100;
    this.dataTest = null;
    this.encode = false;
  }
  /**
   * Sets focus to the input field.
   */
  async setFocus() {
    this.onClickWrapper();
  }
  /**
   * Removes focus from the input field.
   */
  async removeFocus() {
    this.onBlur();
  }
  /**
   * Returns the input element of the component.
   */
  async getInputElement() {
    return this.nativeInput;
  }
  /**
   * Checks if the input field is valid.
   */
  async isValid() {
    return this.nativeInput.validity.valid;
  }
  /**
   * Clears the input field value.
   */
  async clear() {
    this.value = '';
  }
  /**
   * Encodes special characters for safe display (prevents HTML code injection).
   */
  encodeValue(value) {
    const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g, amp = /&/g, slash = /\//g;
    if (!this.encode)
      return value;
    return (value &&
      value
        .toString()
        .replace(lt, '&lt;')
        .replace(gt, '&gt;')
        .replace(ap, '&#39;')
        .replace(ic, '&#34;')
        .replace(amp, '&amp;')
        .replace(slash, '&#47;'));
  }
  /**
   * Notifies about the input field value change.
   */
  valueChanged(newValue) {
    const changeValue = this.encode ? this.encodeValue(newValue || '') : newValue || '';
    this.bdsChange.emit({ value: changeValue });
  }
  /**
   * Auto-resizes the textarea based on content.
   */
  autoResizeTextarea() {
    if (this.isTextarea && this.autoResize && this.nativeInput) {
      const textarea = this.nativeInput;
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      // Calculate new height
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.min(Math.max(scrollHeight, this.minHeight || 60), this.maxHeight || 200);
      textarea.style.height = `${newHeight}px`;
    }
  }
  /**
   * Debounced version of auto-resize to improve performance during rapid input events.
   */
  debouncedAutoResize() {
    if (this.autoResizeDebounceTimer) {
      clearTimeout(this.autoResizeDebounceTimer);
    }
    this.autoResizeDebounceTimer = window.setTimeout(() => {
      this.autoResizeTextarea();
    }, this.debounceDelay); // Configurable debounce delay
  }
  /**
   * Centralizes all necessary updates for the textarea, including auto-resize.
   */
  updateTextarea(immediate = false) {
    if (this.isTextarea && this.autoResize) {
      if (immediate) {
        // For immediate updates (component load, prop changes)
        this.autoResizeTextarea();
      }
      else {
        // For input events, use debounced version
        this.debouncedAutoResize();
      }
    }
  }
  /**
   * Function that renders the icon inside the input field.
   */
  renderIcon() {
    return (this.icon && (index.h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label || this.iconSize === 'medium',
        'input__icon--textarea': this.isTextarea,
      } }, index.h("bds-icon", { class: "input__icon--color", size: this.label || this.iconSize === 'medium' ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  /**
   * Function that renders the label of the input field.
   */
  renderLabel() {
    return (this.label && (index.h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, index.h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
  }
  /**
   * Function that renders error or success messages below the input field.
   */
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
  /**
   * Validates the input field when it loses focus.
   */
  onBlurValidations() {
    this.required && this.requiredValidation();
    this.pattern && this.patternValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    (this.min || this.max) && this.minMaxValidation();
    this.checkValidity();
  }
  /**
   * Performs field validations while the user types.
   */
  onBdsInputValidations() {
    this.type === 'email' && this.emailValidation();
    this.type === 'phonenumber' && this.numberValidation();
    this.checkValidity();
  }
  /**
   * Validates the regex pattern of the field.
   */
  patternValidation() {
    const regex = new RegExp(this.pattern);
    this.bdsPatternValidation.emit(regex.test(this.nativeInput.value));
  }
  /**
   * Validates if the field is required.
   */
  requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Validates the text length in the input field.
   */
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
  /**
   * Validates the minimum and maximum values of the input field.
   */
  minMaxValidation() {
    if (this.nativeInput.validity.rangeUnderflow) {
      this.validationMesage = this.minErrorMessage;
      this.validationDanger = true;
      return;
    }
    if (this.nativeInput.validity.rangeOverflow) {
      this.validationMesage = this.maxErrorMessage;
      this.validationDanger = true;
      return;
    }
  }
  /**
   * Validates if the field contains a valid email.
   */
  emailValidation() {
    if (validations.emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Validates if the field contains a valid number.
   */
  numberValidation() {
    if (validations.numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Checks if the input field is valid.
   */
  checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }
  /**
   * Updates the input field value after changes.
   */
  componentDidUpdate() {
    if (this.nativeInput && this.value != this.nativeInput.value) {
      this.nativeInput.value = this.value;
    }
    // Update textarea after value changes (immediate for prop changes)
    this.updateTextarea(true);
  }
  /**
   * Initial configurations after the component loads.
   */
  componentDidLoad() {
    // Set initial height for textarea (immediate for initial load)
    this.updateTextarea(true);
  }
  /**
   * Cleanup when component is destroyed.
   */
  disconnectedCallback() {
    if (this.autoResizeDebounceTimer) {
      window.clearTimeout(this.autoResizeDebounceTimer);
    }
  }
  render() {
    const isPressed = this.isPressed && !this.disabled;
    const Element = this.isTextarea ? 'textarea' : 'input';
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null }, index.h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
        'input--textarea': this.isTextarea,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), index.h("slot", { name: "input-left" }), index.h("div", { class: "input__container" }, this.renderLabel(), index.h("div", { class: {
        input__container__wrapper: !this.chips,
        input__container__wrapper__chips: this.chips,
        'input__container__wrapper--textarea': this.isTextarea
      } }, index.h("slot", { name: "inside-input-left" }), index.h(Element, { class: {
        input__container__text: true,
        input__container__text__chips: this.chips,
        'input__container__text--textarea': this.isTextarea
      }, ref: (input) => (this.nativeInput = input), rows: this.isTextarea ? this.rows : undefined, cols: this.isTextarea ? this.cols : undefined, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.isTextarea ? undefined : this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest, style: this.isTextarea ? {
        minHeight: `${this.minHeight || 60}px`,
        maxHeight: `${this.maxHeight || 200}px`,
        resize: this.resizable ? (this.autoResize ? 'none' : 'vertical') : 'none'
      } : {} }))), this.counterLength && (index.h("bds-counter-text", { length: this.value.length, max: this.maxlength, active: isPressed, ...this.counterLengthRule })), this.success && index.h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "small" }), index.h("slot", { name: "input-right" })), this.renderMessage()));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Input.style = inputCss;

exports.bds_input = Input;
