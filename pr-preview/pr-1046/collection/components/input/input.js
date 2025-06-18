/* eslint-disable no-console */
import { h, Host } from '@stencil/core';
import { emailValidation, numberValidation } from '../../utils/validations';
export class Input {
  constructor() {
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
   * Centralizes all necessary updates for the textarea, including auto-resize.
   */
  updateTextarea() {
    if (this.isTextarea && this.autoResize) {
      this.autoResizeTextarea();
    }
  }
  /**
   * Function that renders the icon inside the input field.
   */
  renderIcon() {
    return (this.icon && (h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label || this.iconSize === 'medium',
        'input__icon--textarea': this.isTextarea,
      } }, h("bds-icon", { class: "input__icon--color", size: this.label || this.iconSize === 'medium' ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  /**
   * Function that renders the label of the input field.
   */
  renderLabel() {
    return (this.label && (h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
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
      return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
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
    if (emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Validates if the field contains a valid number.
   */
  numberValidation() {
    if (numberValidation(this.nativeInput.value)) {
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
    // Update textarea after value changes
    this.updateTextarea();
  }
  /**
   * Initial configurations after the component loads.
   */
  componentDidLoad() {
    // Set initial height for textarea
    this.updateTextarea();
  }
  render() {
    const isPressed = this.isPressed && !this.disabled;
    const Element = this.isTextarea ? 'textarea' : 'input';
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
        'input--textarea': this.isTextarea,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { name: "input-left" }), h("div", { class: "input__container" }, this.renderLabel(), h("div", { class: {
        input__container__wrapper: !this.chips,
        input__container__wrapper__chips: this.chips,
        'input__container__wrapper--textarea': this.isTextarea
      } }, h("slot", { name: "inside-input-left" }), h(Element, { class: {
        input__container__text: true,
        input__container__text__chips: this.chips,
        'input__container__text--textarea': this.isTextarea
      }, ref: (input) => (this.nativeInput = input), rows: this.isTextarea ? this.rows : undefined, cols: this.isTextarea ? this.cols : undefined, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.isTextarea ? undefined : this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest, style: this.isTextarea ? {
        minHeight: `${this.minHeight || 60}px`,
        maxHeight: `${this.maxHeight || 200}px`,
        resize: this.resizable ? (this.autoResize ? 'none' : 'vertical') : 'none'
      } : {} }))), this.counterLength && (h("bds-counter-text", { length: this.value.length, max: this.maxlength, active: isPressed, ...this.counterLengthRule })), this.success && h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { name: "input-right" })), this.renderMessage()));
  }
  static get is() { return "bds-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["input.css"]
    };
  }
  static get properties() {
    return {
      "inputName": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Input name, used for form identification."
        },
        "attribute": "input-name",
        "reflect": false,
        "defaultValue": "''"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputType",
          "resolved": "\"date\" | \"email\" | \"number\" | \"password\" | \"phonenumber\" | \"text\"",
          "references": {
            "InputType": {
              "location": "import",
              "path": "./input-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the input type (e.g., `text`, `password`, etc)."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'text'"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Label to be displayed above the input."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Text to be displayed as a hint or placeholder in the input."
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "autoCapitalize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputAutocapitalize",
          "resolved": "\"characters\" | \"none\" | \"off\" | \"on\" | \"sentences\" | \"words\"",
          "references": {
            "InputAutocapitalize": {
              "location": "import",
              "path": "./input-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines automatic text capitalization (possible values: `on`, `off`)."
        },
        "attribute": "auto-capitalize",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autoComplete": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputAutoComplete",
          "resolved": "\"current-password\" | \"new-password\" | \"off\" | \"on\" | \"username\"",
          "references": {
            "InputAutoComplete": {
              "location": "import",
              "path": "./input-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines browser autocomplete behavior (possible values: `on`, `off`)."
        },
        "attribute": "auto-complete",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "max": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the maximum allowed value for the input."
        },
        "attribute": "max",
        "reflect": false
      },
      "maxlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the maximum number of characters allowed in the input."
        },
        "attribute": "maxlength",
        "reflect": false
      },
      "min": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the minimum allowed value for the input."
        },
        "attribute": "min",
        "reflect": false
      },
      "minlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the minimum number of characters allowed in the input."
        },
        "attribute": "minlength",
        "reflect": false
      },
      "readonly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Makes the input read-only."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines if the input is required."
        },
        "attribute": "required",
        "reflect": false
      },
      "pattern": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines a regex pattern that the input value must follow."
        },
        "attribute": "pattern",
        "reflect": false
      },
      "helperMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Help message displayed below the input."
        },
        "attribute": "helper-message",
        "reflect": false,
        "defaultValue": "''"
      },
      "errorMessage": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Error message displayed when the input value is invalid."
        },
        "attribute": "error-message",
        "reflect": false,
        "defaultValue": "''"
      },
      "successMessage": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Message displayed when the input value is valid."
        },
        "attribute": "success-message",
        "reflect": false,
        "defaultValue": "''"
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Name of the icon to be displayed inside the input."
        },
        "attribute": "icon",
        "reflect": true,
        "defaultValue": "''"
      },
      "disabled": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines if the input is disabled."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "danger": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines if the input is in error state."
        },
        "attribute": "danger",
        "reflect": true,
        "defaultValue": "false"
      },
      "success": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines if the input is in success state."
        },
        "attribute": "success",
        "reflect": true,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | null",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The current value of the input."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
      },
      "counterLength": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines whether a character length counter will be displayed."
        },
        "attribute": "counter-length",
        "reflect": false,
        "defaultValue": "false"
      },
      "counterLengthRule": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "InputCounterLengthRules",
          "resolved": "{ warning: CounterTextRule; delete: CounterTextRule; }",
          "references": {
            "InputCounterLengthRules": {
              "location": "import",
              "path": "./input-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the character length counter rule (min, max, etc)."
        },
        "defaultValue": "null"
      },
      "isSubmit": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines whether the input will be submitted when pressing Enter."
        },
        "attribute": "is-submit",
        "reflect": false,
        "defaultValue": "false"
      },
      "isTextarea": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines whether the input is a textarea."
        },
        "attribute": "is-textarea",
        "reflect": false,
        "defaultValue": "false"
      },
      "rows": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the number of lines for the textarea (if `textarea`)."
        },
        "attribute": "rows",
        "reflect": false,
        "defaultValue": "3"
      },
      "cols": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the number of columns for the textarea (if `textarea`)."
        },
        "attribute": "cols",
        "reflect": false,
        "defaultValue": "0"
      },
      "autoResize": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines whether the textarea should automatically resize based on content."
        },
        "attribute": "auto-resize",
        "reflect": false,
        "defaultValue": "true"
      },
      "resizable": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines whether the textarea can be manually resized by the user."
        },
        "attribute": "resizable",
        "reflect": false,
        "defaultValue": "false"
      },
      "minHeight": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the minimum height of the textarea in pixels."
        },
        "attribute": "min-height",
        "reflect": false,
        "defaultValue": "60"
      },
      "maxHeight": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the maximum height of the textarea in pixels."
        },
        "attribute": "max-height",
        "reflect": false,
        "defaultValue": "200"
      },
      "iconSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'medium'",
          "resolved": "\"medium\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the icon size (small or medium)."
        },
        "attribute": "icon-size",
        "reflect": false,
        "defaultValue": "'small'"
      },
      "requiredErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error message displayed when the input is not filled and is required."
        },
        "attribute": "required-error-message",
        "reflect": false
      },
      "minlengthErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error message displayed when the input value doesn't meet the minimum length requirement."
        },
        "attribute": "minlength-error-message",
        "reflect": false
      },
      "minErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error message displayed when the input value doesn't meet the minimum allowed value."
        },
        "attribute": "min-error-message",
        "reflect": false
      },
      "maxErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error message displayed when the input value doesn't meet the maximum allowed value."
        },
        "attribute": "max-error-message",
        "reflect": false
      },
      "emailErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error message displayed when the input value is not a valid email."
        },
        "attribute": "email-error-message",
        "reflect": false
      },
      "numberErrorMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Error message displayed when the input value is not a valid number."
        },
        "attribute": "number-error-message",
        "reflect": false
      },
      "chips": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines if the input will be displayed as chips (a type of input with multiple values)."
        },
        "attribute": "chips",
        "reflect": false
      },
      "dataTest": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action."
        },
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      },
      "encode": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "encode",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isPressed": {},
      "isPassword": {},
      "validationMesage": {},
      "validationDanger": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsChange",
        "name": "bdsChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when the input value changes."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsInput",
        "name": "bdsInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when the input receives input (typing)."
        },
        "complexType": {
          "original": "KeyboardEvent",
          "resolved": "KeyboardEvent",
          "references": {
            "KeyboardEvent": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "bdsOnBlur",
        "name": "bdsOnBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when the input loses focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsFocus",
        "name": "bdsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when the input gains focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsSubmit",
        "name": "bdsSubmit",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when the form is submitted."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsPatternValidation",
        "name": "bdsPatternValidation",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted for regex pattern validation."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsKeyDownBackspace",
        "name": "bdsKeyDownBackspace",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event emitted when the \"Backspace\" key is pressed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets focus to the input field.",
          "tags": []
        }
      },
      "removeFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Removes focus from the input field.",
          "tags": []
        }
      },
      "getInputElement": {
        "complexType": {
          "signature": "() => Promise<HTMLInputElement | HTMLTextAreaElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLInputElement": {
              "location": "global"
            },
            "HTMLTextAreaElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLInputElement | HTMLTextAreaElement>"
        },
        "docs": {
          "text": "Returns the input element of the component.",
          "tags": []
        }
      },
      "isValid": {
        "complexType": {
          "signature": "() => Promise<boolean>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "Checks if the input field is valid.",
          "tags": []
        }
      },
      "clear": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Clears the input field value.",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "valueChanged"
      }];
  }
}
