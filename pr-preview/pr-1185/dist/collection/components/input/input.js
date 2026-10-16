/* eslint-disable no-console */
import { h, Host } from "@stencil/core";
import { emailValidation, numberValidation } from "../../utils/validations";
export class Input {
    constructor() {
        this.isPressed = false;
        this.isPassword = false;
        this.validationMesage = '';
        this.validationDanger = false;
        /**
         * Input name, used for form identification.
         */
        this.inputName = '';
        /**
         * Defines the input type (e.g., `text`, `password`, etc).
         */
        this.type = 'text';
        /**
         * Label to be displayed above the input.
         */
        this.label = '';
        /**
         * Text to be displayed as a hint or placeholder in the input.
         */
        this.placeholder = '';
        /**
         * Defines automatic text capitalization (possible values: `on`, `off`).
         */
        this.autoCapitalize = 'off';
        /**
         * Defines browser autocomplete behavior (possible values: `on`, `off`).
         */
        this.autoComplete = 'off';
        /**
         * Makes the input read-only.
         */
        this.readonly = false;
        /**
         * Help message displayed below the input.
         */
        this.helperMessage = '';
        /**
         * Error message displayed when the input value is invalid.
         */
        this.errorMessage = '';
        /**
         * Message displayed when the input value is valid.
         */
        this.successMessage = '';
        /**
         * Name of the icon to be displayed inside the input.
         */
        this.icon = '';
        /**
         * Defines if the input is disabled.
         */
        this.disabled = false;
        /**
         * Defines if the input is in error state.
         */
        this.danger = false;
        /**
         * Defines if the input is in success state.
         */
        this.success = false;
        /**
         * The current value of the input.
         */
        this.value = '';
        /**
         * Defines whether a character length counter will be displayed.
         */
        this.counterLength = false;
        /**
         * Defines the character length counter rule (min, max, etc).
         */
        this.counterLengthRule = null;
        /**
         * Defines whether the input will be submitted when pressing Enter.
         */
        this.isSubmit = false;
        /**
         * Defines whether the input is a textarea.
         */
        this.isTextarea = false;
        /**
         * Defines the number of lines for the textarea (if `textarea`).
         */
        this.rows = 3;
        /**
         * Defines the number of columns for the textarea (if `textarea`).
         */
        this.cols = 0;
        /**
         * Defines whether the textarea should automatically resize based on content.
         */
        this.autoResize = true;
        /**
         * Defines whether the textarea can be manually resized by the user.
         */
        this.resizable = false;
        /**
         * Defines the minimum height of the textarea in pixels.
         */
        this.minHeight = 60;
        /**
         * Defines the maximum height of the textarea in pixels.
         */
        this.maxHeight = 200;
        /**
         * Defines the icon size (small or medium).
         */
        this.iconSize = 'small';
        /**
         * Defines the debounce delay in milliseconds for textarea auto-resize.
         */
        this.debounceDelay = 100;
        /**
         * Data test is the prop to specifically test the component action.
         */
        this.dataTest = null;
        this.encode = false;
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
        const iconSizeValue = this.iconSize === 'medium' ? 'medium' : 'small';
        const isLargeIcon = this.iconSize === 'medium';
        return (this.icon && (h("div", { class: {
                input__icon: true,
                'input__icon--large': isLargeIcon,
                'input__icon--textarea': this.isTextarea,
            } }, h("bds-icon", { class: "input__icon--color", size: iconSizeValue, name: this.icon, color: "inherit" }))));
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
        return (h(Host, { key: 'cd976d3b96db3046f3a3eba8326bbee46ff9e151', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: '6c2ba8cc39bcdc73e2be7604555783d946fac94b', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
                'input--textarea': this.isTextarea,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { key: '6767cc61b7d22a4f96e857d2c053e758cc8ff081', name: "input-left" }), h("div", { key: 'e5716618215cec9a77c90e1e0baa7f878dc27c96', class: "input__container" }, this.renderLabel(), h("div", { key: '2916bed57190055ec01438f9be400f74716be5c5', class: {
                input__container__wrapper: !this.chips,
                input__container__wrapper__chips: this.chips,
                'input__container__wrapper--textarea': this.isTextarea
            } }, h("slot", { key: '0cccef053caf8461e7bf99e8f39386b4150146c9', name: "inside-input-left" }), h(Element, { key: 'e1f54dc300b9f12f7123b081a7f05ce8c27246f0', class: {
                input__container__text: true,
                input__container__text__chips: this.chips,
                'input__container__text--textarea': this.isTextarea
            }, ref: (input) => (this.nativeInput = input), rows: this.isTextarea ? this.rows : undefined, cols: this.isTextarea ? this.cols : undefined, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.isTextarea ? undefined : this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest, style: this.isTextarea ? {
                minHeight: `${this.minHeight || 60}px`,
                maxHeight: `${this.maxHeight || 200}px`,
                resize: this.resizable ? (this.autoResize ? 'none' : 'vertical') : 'none'
            } : {} }))), this.counterLength && (h("bds-counter-text", Object.assign({ key: '8665fa48a456ddf90b993442d44e93c116425fdb', length: this.value.length, max: this.maxlength, active: isPressed }, this.counterLengthRule))), this.success && h("bds-icon", { key: '244099c9cb2ff093412ed03b4b73207c68530bfd', class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { key: 'd882c2f79c904f0adc4d18febd9c5ed77932644a', name: "input-right" })), this.renderMessage()));
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
                "attribute": "input-name",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "InputType",
                    "resolved": "\"date\" | \"email\" | \"number\" | \"password\" | \"phonenumber\" | \"text\"",
                    "references": {
                        "InputType": {
                            "location": "import",
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the input type (e.g., `text`, `password`, etc)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'text'"
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "autoCapitalize": {
                "type": "string",
                "attribute": "auto-capitalize",
                "mutable": false,
                "complexType": {
                    "original": "InputAutocapitalize",
                    "resolved": "\"characters\" | \"none\" | \"off\" | \"on\" | \"sentences\" | \"words\"",
                    "references": {
                        "InputAutocapitalize": {
                            "location": "import",
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutocapitalize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines automatic text capitalization (possible values: `on`, `off`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'off'"
            },
            "autoComplete": {
                "type": "string",
                "attribute": "auto-complete",
                "mutable": false,
                "complexType": {
                    "original": "InputAutoComplete",
                    "resolved": "\"current-password\" | \"new-password\" | \"off\" | \"on\" | \"username\"",
                    "references": {
                        "InputAutoComplete": {
                            "location": "import",
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutoComplete"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines browser autocomplete behavior (possible values: `on`, `off`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'off'"
            },
            "max": {
                "type": "string",
                "attribute": "max",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "maxlength": {
                "type": "number",
                "attribute": "maxlength",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "min": {
                "type": "string",
                "attribute": "min",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "minlength": {
                "type": "number",
                "attribute": "minlength",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "pattern": {
                "type": "string",
                "attribute": "pattern",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "helperMessage": {
                "type": "string",
                "attribute": "helper-message",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "errorMessage": {
                "type": "string",
                "attribute": "error-message",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "successMessage": {
                "type": "string",
                "attribute": "success-message",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "danger": {
                "type": "boolean",
                "attribute": "danger",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "success": {
                "type": "boolean",
                "attribute": "success",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "counterLength": {
                "type": "boolean",
                "attribute": "counter-length",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "counterLengthRule": {
                "type": "unknown",
                "attribute": "counter-length-rule",
                "mutable": false,
                "complexType": {
                    "original": "InputCounterLengthRules",
                    "resolved": "{ warning: CounterTextRule; delete: CounterTextRule; }",
                    "references": {
                        "InputCounterLengthRules": {
                            "location": "import",
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputCounterLengthRules"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the character length counter rule (min, max, etc)."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "isSubmit": {
                "type": "boolean",
                "attribute": "is-submit",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "isTextarea": {
                "type": "boolean",
                "attribute": "is-textarea",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "rows": {
                "type": "number",
                "attribute": "rows",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "3"
            },
            "cols": {
                "type": "number",
                "attribute": "cols",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "autoResize": {
                "type": "boolean",
                "attribute": "auto-resize",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "resizable": {
                "type": "boolean",
                "attribute": "resizable",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "minHeight": {
                "type": "number",
                "attribute": "min-height",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "60"
            },
            "maxHeight": {
                "type": "number",
                "attribute": "max-height",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "200"
            },
            "iconSize": {
                "type": "string",
                "attribute": "icon-size",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'small'"
            },
            "requiredErrorMessage": {
                "type": "string",
                "attribute": "required-error-message",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "minlengthErrorMessage": {
                "type": "string",
                "attribute": "minlength-error-message",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "minErrorMessage": {
                "type": "string",
                "attribute": "min-error-message",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "maxErrorMessage": {
                "type": "string",
                "attribute": "max-error-message",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "emailErrorMessage": {
                "type": "string",
                "attribute": "email-error-message",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "numberErrorMessage": {
                "type": "string",
                "attribute": "number-error-message",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "chips": {
                "type": "boolean",
                "attribute": "chips",
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
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "debounceDelay": {
                "type": "number",
                "attribute": "debounce-delay",
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
                    "text": "Defines the debounce delay in milliseconds for textarea auto-resize."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "100"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "encode": {
                "type": "boolean",
                "attribute": "encode",
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
                "getter": false,
                "setter": false,
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
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
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
                    "original": "InputEvent",
                    "resolved": "InputEvent",
                    "references": {
                        "InputEvent": {
                            "location": "global",
                            "id": "global::InputEvent"
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
                    "original": "void",
                    "resolved": "void",
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
                    "original": "void",
                    "resolved": "void",
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
                    "original": "{ event: KeyboardEvent; value: string }",
                    "resolved": "{ event: KeyboardEvent; value: string; }",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
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
                    "original": "boolean",
                    "resolved": "boolean",
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
                    "original": "{ event: KeyboardEvent; value: string }",
                    "resolved": "{ event: KeyboardEvent; value: string; }",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
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
                            "location": "global",
                            "id": "global::Promise"
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
                            "location": "global",
                            "id": "global::Promise"
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
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLInputElement": {
                            "location": "global",
                            "id": "global::HTMLInputElement"
                        },
                        "HTMLTextAreaElement": {
                            "location": "global",
                            "id": "global::HTMLTextAreaElement"
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
                            "location": "global",
                            "id": "global::Promise"
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
                            "location": "global",
                            "id": "global::Promise"
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
//# sourceMappingURL=input.js.map
