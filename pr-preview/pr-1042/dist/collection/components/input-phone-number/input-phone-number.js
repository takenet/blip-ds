import { h, Host } from "@stencil/core";
import { numberValidation } from "../../utils/validations";
import * as countriesDefault from "./countries.json";
import * as countriesPtBR from "./countries-pt_BR.json";
import * as countriesEnUS from "./countries-en_US.json";
import * as countriesEsES from "./countries-es_ES.json";
export class InputPhoneNumber {
    constructor() {
        this.isOpen = false;
        this.validationDanger = false;
        this.validationMesage = '';
        this.isPressed = false;
        /**
         * Lista de opções do select.
         */
        this.options = [];
        /**
         * Valor do input de telefone.
         */
        this.text = '';
        /**
         * Valor do select.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.value = '+55';
        /**
         * Habilita o estado "danger" no input.
         */
        this.danger = false;
        /**
         * Habilita o estado "success" no input.
         */
        this.success = false;
        /**
         * Desabilita o input.
         */
        this.disabled = false;
        /**
         * Mensagem de ajuda para o usuário.
         */
        this.helperMessage = '';
        /**
         * Mensagem de erro a ser exibida.
         */
        this.errorMessage = '';
        /**
         * Mensagem de sucesso a ser exibida.
         */
        this.successMessage = '';
        /**
         * Data-test para identificar o componente.
         */
        this.dataTest = null;
        /**
         * Data-test para o botão de seleção de bandeira.
         */
        this.dtSelectFlag = null;
        /**
         * Label do input.
         */
        this.label = 'Phone number';
        /**
         * Ícone à esquerda do input.
         */
        this.icon = '';
        /**
         * Valores possíveis: "pt_BR", "en_US", "es_ES".
         * Se nenhum for informado, utiliza o arquivo padrão (countries.json).
         */
        this.language = 'pt_BR';
        this.countries = {};
        this.refNativeInput = (el) => {
            this.nativeInput = el;
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
        this.onBlur = () => {
            this.bdsBlur.emit();
            this.isPressed = false;
        };
        this.changedInputValue = async (ev) => {
            const input = ev.target;
            this.checkValidity();
            if (input) {
                this.text = input.value || '';
                this.numberValidation();
            }
            this.bdsInput.emit(ev);
        };
        this.toggle = () => {
            if (!this.disabled) {
                this.isOpen = !this.isOpen;
            }
        };
        this.handler = (event) => {
            const { value } = event.detail;
            this.value = value.code;
            this.selectedCountry = value.flag;
            this.isoCode = value.isoCode;
            this.bdsPhoneNumberChange.emit({
                value: this.text,
                code: this.value,
                isoCode: this.isoCode,
                country: this.selectedCountry,
            });
            this.toggle();
        };
        this.keyPressWrapper = (event) => {
            const isSelectElement = event.target.localName === 'bds-select';
            const isInputElement = event.target.localName === 'input';
            if (event.key === 'Enter' && !this.isOpen && (isSelectElement || isInputElement)) {
                this.toggle();
            }
        };
    }
    async removeFocus() {
        this.onBlur();
    }
    valueChanged() {
        for (const option of this.childOptions) {
            option.selected = this.value === option.value;
        }
    }
    handleWindow(ev) {
        if (!this.el.contains(ev.target)) {
            this.isOpen = false;
        }
    }
    languageChanged() {
        this.updateCountries();
    }
    updateCountries() {
        switch (this.language) {
            case 'pt_BR':
                this.countries = countriesPtBR['default'];
                break;
            case 'en_US':
                this.countries = countriesEnUS['default'];
                break;
            case 'es_ES':
                this.countries = countriesEsES['default'];
                break;
            default:
                this.countries = countriesDefault['default'];
                break;
        }
        const flagsNames = Object.keys(this.countries);
        const countryIndex = Object.values(this.countries).findIndex((country) => country.code === this.value);
        if (countryIndex !== -1) {
            this.selectedCountry = flagsNames[countryIndex];
        }
        else {
            this.selectedCountry = this.selectedCountry || flagsNames[0];
        }
        this.isoCode = this.isoCode || flagsNames[0];
    }
    componentWillRender() {
        this.updateCountries();
    }
    get childOptions() {
        return Array.from(this.el.querySelectorAll('bds-select-option'));
    }
    handleInputChange() {
        this.bdsPhoneNumberChange.emit({
            value: this.text,
            code: this.value,
            isoCode: this.isoCode,
            country: this.selectedCountry,
        });
    }
    numberValidation() {
        if (numberValidation(this.nativeInput.value)) {
            this.validationMesage = this.numberErrorMessage;
            this.validationDanger = true;
        }
        else {
            this.validationDanger = false;
        }
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.toggle();
        }
    }
    async changeCountry(code, isoCode, flag) {
        this.value = code;
        this.selectedCountry = flag;
        this.isoCode = isoCode;
        this.bdsPhoneNumberChange.emit({
            value: this.text,
            code: this.value,
            isoCode: this.isoCode,
            country: this.selectedCountry,
        });
    }
    checkValidity() {
        if (this.nativeInput.validity.valid) {
            this.validationDanger = false;
        }
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
        return message ? (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message))) : null;
    }
    render() {
        const isPressed = this.isPressed && !this.disabled;
        const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
        const flagsNames = Object.keys(this.countries);
        return (h(Host, { key: '963746172577036c35ed5e180b313dad7ecb278e', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: 'b3be44262f36faa6d2bf6dfb5bba13690ba2113b', class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: '308a3eb1cf86b50ad72ab53bc55293a4f9f16e9d', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("div", { key: '5f713c3155977ddd0d0d99267eb310f6cc483315', onClick: this.toggle, onKeyDown: this.handleKeyDown.bind(this), "data-test": this.dtSelectFlag, class: "input__icon", tabindex: "0" }, h("bds-icon", { key: 'a299eae5785df0b86db311a6759b66964ed93b9d', size: "medium", theme: "solid", name: this.selectedCountry, color: "primary" }), h("bds-icon", { key: '4cead31a49bd76786618b27e36768c1833cff7ff', size: "x-small", name: iconArrow })), h("div", { key: '0fb9d8295bdc203757a1bc76b96fbcdc54379f85', class: "input__container" }, this.renderLabel(), h("div", { key: 'f95cd589904d2858e4c50deed8194a5b8fb77239', class: { input__container__wrapper: true } }, h("div", { key: 'a6e106f1c59d0a976f765ab3ab3e897a2b02bad2', class: "input__container__country-code" }, h("bds-typo", { key: 'ef7bc811cd15fb406240ebe4a335e2575024e18c', "no-wrap": "true", variant: "fs-14" }, this.value)), h("input", { key: '80317b9ca62d1ae341459ef44b09e2eb4ec2b0c1', class: { input__container__text: true }, type: "phonenumber", required: this.required, pattern: "/^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$/", ref: this.refNativeInput, onInput: this.changedInputValue, onFocus: this.onFocus, onBlur: this.onBlur, value: this.text, disabled: this.disabled, "data-test": this.dataTest, maxlength: this.value === '+55' ? 25 : null }))), this.success && h("bds-icon", { key: 'c8d3b80350a5879d8f999945b9607ae6bc0f2ab2', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" }), h("slot", { key: 'ee189c6b765decd5f76e8d4030be67700e360b0d', name: "input-right" })), this.renderMessage()), h("div", { key: '658305c6e219db00f548a744bbe0af9398f48559', class: {
                'select-phone-number__options': true,
                'select-phone-number__options--open': this.isOpen,
            } }, this.isOpen &&
            flagsNames.map((flag) => (h("bds-select-option", { key: flag, onOptionSelected: this.handler, selected: flag === this.selectedCountry, value: { code: this.countries[flag].code, isoCode: this.countries[flag].isoCode, flag }, status: this.countries[flag].isoCode }, this.countries[flag].name, " ", this.countries[flag].code))))));
    }
    static get is() { return "bds-input-phone-number"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["input-phone-number.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-phone-number.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "unknown",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "Array<Option>",
                    "resolved": "Option[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "Option": {
                            "location": "import",
                            "path": "../selects/select-interface",
                            "id": "src/components/selects/select-interface.ts::Option"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Lista de op\u00E7\u00F5es do select."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
                    "text": "Valor do input de telefone."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
                    "text": "Valor do select."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'+55'"
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
                    "text": "Habilita o estado \"danger\" no input."
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
                    "text": "Habilita o estado \"success\" no input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "Desabilita o input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
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
                    "text": "Se `true`, o valor do input ser\u00E1 obrigat\u00F3rio."
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
                    "text": "Mensagem de ajuda para o usu\u00E1rio."
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
                    "text": "Mensagem de erro a ser exibida."
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
                    "text": "Mensagem de sucesso a ser exibida."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
                    "text": "Mensagem de erro para campo obrigat\u00F3rio."
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
                    "text": "Mensagem de erro para valida\u00E7\u00E3o num\u00E9rica."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Data-test para identificar o componente."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtSelectFlag": {
                "type": "string",
                "attribute": "dt-select-flag",
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
                    "text": "Data-test para o bot\u00E3o de sele\u00E7\u00E3o de bandeira."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
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
                    "text": "Label do input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Phone number'"
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
                    "text": "\u00CDcone \u00E0 esquerda do input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "language": {
                "type": "string",
                "attribute": "language",
                "mutable": true,
                "complexType": {
                    "original": "languages",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "languages": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/input-phone-number/input-phone-number.tsx",
                            "id": "src/components/input-phone-number/input-phone-number.tsx::languages"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Valores poss\u00EDveis: \"pt_BR\", \"en_US\", \"es_ES\".\nSe nenhum for informado, utiliza o arquivo padr\u00E3o (countries.json)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'pt_BR'"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "selectedCountry": {},
            "isoCode": {},
            "validationDanger": {},
            "validationMesage": {},
            "isPressed": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsPhoneNumberChange",
                "name": "bdsPhoneNumberChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado quando o valor \u00E9 alterado."
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
                    "text": "Evento disparado quando o input sofre altera\u00E7\u00E3o."
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
                "method": "bdsCancel",
                "name": "bdsCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado quando a sele\u00E7\u00E3o \u00E9 cancelada."
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
                    "text": "Evento disparado quando o select ganha foco."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bdsBlur",
                "name": "bdsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento disparado quando o select perde o foco."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
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
                    "text": "",
                    "tags": []
                }
            },
            "changeCountry": {
                "complexType": {
                    "signature": "(code: any, isoCode: any, flag: any) => Promise<void>",
                    "parameters": [{
                            "name": "code",
                            "type": "any",
                            "docs": ""
                        }, {
                            "name": "isoCode",
                            "type": "any",
                            "docs": ""
                        }, {
                            "name": "flag",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "language",
                "methodName": "languageChanged"
            }, {
                "propName": "text",
                "methodName": "handleInputChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleWindow",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=input-phone-number.js.map
