import { h, Host } from "@stencil/core";
/**
 * @deprecated Use `uai-input-password` for new UAI experiences. This component remains supported for existing consumers.
 */
export class InputPassword {
    constructor() {
        /**
         * Used to set the danger behavior by the internal validators
         */
        this.validationDanger = false;
        /**
         * Conditions the element to say whether it is pressed or not, to add styles.
         */
        this.isPressed = false;
        /**
         * Used to set the error message setted by the internal validators
         */
        this.validationMesage = '';
        this.openEyes = false;
        /**
         * The value of the input.
         */
        this.value = '';
        /**
         *  label in input, with he the input size increases.
         */
        this.label = '';
        /**
         * Input Name
         */
        this.inputName = '';
        /**
         * If `true`, the user cannot modify the value.
         */
        this.readonly = false;
        /**
         * Indicated to pass a help the user in complex filling.
         */
        this.helperMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.errorMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.successMessage = '';
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = '';
        /**
         * Disabled input.
         */
        this.disabled = false;
        /**
         * Capitalizes every word's second character.
         */
        this.autoCapitalize = 'off';
        /**
         * Hint for form autofill feature
         */
        this.autoComplete = 'off';
        /**
         * A tip for the user who can enter no controls.
         */
        this.placeholder = '';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
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
        this.keyPressWrapper = (event) => {
            switch (event.key) {
                case 'Enter':
                    this.bdsInputPasswordSubmit.emit({ event, value: this.value });
                    break;
                case 'Backspace':
                case 'Delete':
                    this.bdsKeyDownBackspace.emit({ event, value: this.value });
                    break;
            }
        };
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
        const isPressed = this.isPressed && !this.disabled;
        const iconPassword = this.openEyes ? 'eye-open' : 'eye-closed';
        const type = this.openEyes ? 'text' : 'password';
        const autocomplete = this.getAutoComplete();
        return (h(Host, { key: '0ba059cb7986dfe360736ffb1b315c6c5dfe1d99', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: '73209259558a6b81dc9e042edeb97fe17f1cd740', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("div", { key: 'e27b1739663f7ea5b7e660c8e868a49fa0c51d8b', class: "input__container" }, this.renderLabel(), h("div", { key: 'a90bcf721a87eca4ebd23714a1680f853cc64270', class: { input__container__wrapper: true } }, h("input", { key: '2e52fc0bab08d1e7004529825463f3db30191e63', ref: this.refNativeInput, class: { input__container__text: true }, type: type, name: this.inputName, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, autocomplete: autocomplete, autocapitalize: this.autoCapitalize, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onSubmit: this.onSubmit, value: this.value, disabled: this.disabled, "data-test": this.dataTest }))), h("div", { key: '0e0ea78d0eab1d28af19f9dbea6f777a01e39fbb', class: "input__password--icon", onClick: this.toggleEyePassword, onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }, h("bds-icon", { key: '3c327a10682c9379207b0fcc918b5eaa101d5a94', size: "small", name: iconPassword, color: "inherit" })), this.success && h("bds-icon", { key: '27df068f35fc12baa37622caf985fcae26231fe0', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()));
    }
    static get is() { return "bds-input-password"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["input-password.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-password.css"]
        };
    }
    static get properties() {
        return {
            "openEyes": {
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
                "attribute": "open-eyes",
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
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value",
                "defaultValue": "''"
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
                    "text": "label in input, with he the input size increases."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "''"
            },
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
                    "text": "Input Name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
                "defaultValue": "''"
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
                    "text": "The maximum value, which must not be less than its minimum (min attribute) value."
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
                    "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter."
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
                    "text": "The minimum value, which must not be greater than its maximum (max attribute) value."
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
                    "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter."
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
                    "text": "If `true`, the user cannot modify the value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly",
                "defaultValue": "false"
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
                    "text": "Indicated to pass a help the user in complex filling."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "helper-message",
                "defaultValue": "''"
            },
            "errorMessage": {
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
                    "text": "Indicated to pass an feeback to user."
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
                    "text": "Indicated to pass an feeback to user."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
                "defaultValue": "''"
            },
            "danger": {
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
                    "text": "Add state danger on input, use for use feedback."
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
                    "text": "Add state success on input, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "success",
                "defaultValue": "false"
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
                    "text": "used for add icon in input left. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "''"
            },
            "disabled": {
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
                    "text": "Disabled input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
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
                            "path": "../input/input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutocapitalize",
                            "referenceLocation": "InputAutocapitalize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Capitalizes every word's second character."
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
                            "path": "../input/input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutoComplete",
                            "referenceLocation": "InputAutoComplete"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Hint for form autofill feature"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-complete",
                "defaultValue": "'off'"
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
                    "text": "A tip for the user who can enter no controls."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "''"
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "validationDanger": {},
            "isPressed": {},
            "validationMesage": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsInputPasswordChange",
                "name": "bdsInputPasswordChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed."
                },
                "complexType": {
                    "original": "{ value: string | null }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "bdsInputPasswordInput",
                "name": "bdsInputPasswordInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input has changed."
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
                "method": "bdsInputPasswordBlur",
                "name": "bdsInputPasswordBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event input onblur."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bdsInputPasswordFocus",
                "name": "bdsInputPasswordFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event input focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bdsInputPasswordSubmit",
                "name": "bdsInputPasswordSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event input enter."
                },
                "complexType": {
                    "original": "{ event: KeyboardEvent; value: string | null } | void",
                    "resolved": "void | { event: KeyboardEvent; value: string; }",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
                }
            }, {
                "method": "bdsKeyDownBackspace",
                "name": "bdsKeyDownBackspace",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event input key down backspace."
                },
                "complexType": {
                    "original": "{ event: KeyboardEvent; value: string | null }",
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
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "onChange"
            }];
    }
}
