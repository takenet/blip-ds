/* eslint-disable no-console */
import { h, Host } from "@stencil/core";
import { emailValidation, numberValidation } from "../../utils/validations";
/**
 * @deprecated Use `uai-input` for new UAI experiences. For multiline text (`isTextarea`), use `uai-textarea`; for passwords, use `uai-input-password`. Chips, phone and date will move to their own UAI components. This component remains supported for existing consumers.
 */
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
        return (h(Host, { key: '4701900b11fe205c9137b90b78319b59643b1651', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: 'e929c33bda8e606dec6828cfb6705ce5cbafbf89', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
                'input--textarea': this.isTextarea,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { key: 'fe342e7723981d0ba88a2858a6edce57c4cd8082', name: "input-left" }), h("div", { key: '4670c92b5931545f979df9a82ea6a51de85dedbb', class: "input__container" }, this.renderLabel(), h("div", { key: '51d2c4fb112394778cdec45fee2e78729c3b34ed', class: {
                input__container__wrapper: !this.chips,
                input__container__wrapper__chips: this.chips,
                'input__container__wrapper--textarea': this.isTextarea
            } }, h("slot", { key: '8f1ce1f576317944d3b263700f3a7edbe9746822', name: "inside-input-left" }), h(Element, { key: 'e3be18626a97af8defea33aeaedca632b13204cd', class: {
                input__container__text: true,
                input__container__text__chips: this.chips,
                'input__container__text--textarea': this.isTextarea
            }, ref: (input) => (this.nativeInput = input), rows: this.isTextarea ? this.rows : undefined, cols: this.isTextarea ? this.cols : undefined, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.isTextarea ? undefined : this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest, style: this.isTextarea ? {
                minHeight: `${this.minHeight || 60}px`,
                maxHeight: `${this.maxHeight || 200}px`,
                resize: this.resizable ? (this.autoResize ? 'none' : 'vertical') : 'none'
            } : {} }))), this.counterLength && (h("bds-counter-text", Object.assign({ key: '6ebe9ed826abf769d526dd7980de67a3ffddc381', length: this.value.length, max: this.maxlength, active: isPressed }, this.counterLengthRule))), this.success && h("bds-icon", { key: '7cfd0709f42b181da4f47c99dcd76625180be294', class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { key: 'f94871defb785ba1901603d45ff4dc2b81bfd57e', name: "input-right" })), this.renderMessage()));
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
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
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputType",
                            "referenceLocation": "InputType"
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
                "attribute": "type",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
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
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutocapitalize",
                            "referenceLocation": "InputAutocapitalize"
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
                "attribute": "auto-capitalize",
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
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutoComplete",
                            "referenceLocation": "InputAutoComplete"
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
                "attribute": "auto-complete",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "maxlength"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pattern"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "helper-message",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error-message",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "danger",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "success",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "counter-length",
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
                            "path": "./input-interface",
                            "id": "src/components/input/input-interface.ts::InputCounterLengthRules",
                            "referenceLocation": "InputCounterLengthRules"
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
                "attribute": "is-submit",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-textarea",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "rows",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "cols",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-resize",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "resizable",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-height",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-size",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength-error-message"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-error-message"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-error-message"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "email-error-message"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "number-error-message"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "chips"
            },
            "debounceDelay": {
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
                    "text": "Defines the debounce delay in milliseconds for textarea auto-resize."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "debounce-delay",
                "defaultValue": "100"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "encode",
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
