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
         * Nome do input, usado para identificação no formulário.
         */
        this.inputName = '';
        /**
         * Define o tipo do input (por exemplo, `text`, `password`, etc).
         */
        this.type = 'text';
        /**
         * Rótulo que será exibido acima do input.
         */
        this.label = '';
        /**
         * Texto que será exibido como sugestão ou dica no input.
         */
        this.placeholder = '';
        /**
         * Define a capitalização automática do texto (valores possíveis: `on`, `off`).
         */
        this.autoCapitalize = 'off';
        /**
         * Define o comportamento de autocompletar do navegador (valores possíveis: `on`, `off`).
         */
        this.autoComplete = 'off';
        /**
         * Torna o input somente leitura.
         */
        this.readonly = false;
        /**
         * Mensagem de ajuda exibida abaixo do input.
         */
        this.helperMessage = '';
        /**
         * Mensagem de erro exibida quando o valor do input é inválido.
         */
        this.errorMessage = '';
        /**
         * Mensagem exibida quando o valor do input é válido.
         */
        this.successMessage = '';
        /**
         * Nome do ícone a ser exibido dentro do input.
         */
        this.icon = '';
        /**
         * Define se o input está desabilitado.
         */
        this.disabled = false;
        /**
         * Define se o input está em estado de erro.
         */
        this.danger = false;
        /**
         * Define se o input está em estado de sucesso.
         */
        this.success = false;
        /**
         * O valor atual do input.
         */
        this.value = '';
        /**
         * Define se será exibido um contador de comprimento de caracteres.
         */
        this.counterLength = false;
        /**
         * Define a regra do contador de comprimento de caracteres (min, max, etc).
         */
        this.counterLengthRule = null;
        /**
         * Define se o input será submetido ao pressionar Enter.
         */
        this.isSubmit = false;
        /**
         * Define se o input é uma área de texto (textarea).
         */
        this.isTextarea = false;
        /**
         * Define a quantidade de linhas da área de texto (se for `textarea`).
         */
        this.rows = 1;
        /**
         * Define a quantidade de colunas da área de texto (se for `textarea`).
         */
        this.cols = 0;
        /**
         * Data test é a prop para testar especificamente a ação do componente.
         */
        this.dataTest = null;
        this.encode = false;
        /**
         * Tratamento de eventos de pressionamento de tecla (Enter, Backspace, etc).
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
         * Função chamada ao digitar no campo de entrada.
         */
        this.onInput = (ev) => {
            this.onBdsInputValidations();
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.bdsInput.emit(ev);
        };
        /**
         * Função chamada ao perder o foco do campo de entrada.
         */
        this.onBlur = () => {
            this.onBlurValidations();
            this.isPressed = false;
            this.bdsOnBlur.emit();
        };
        /**
         * Função chamada ao ganhar o foco do campo de entrada.
         */
        this.onFocus = () => {
            this.isPressed = true;
            this.bdsFocus.emit();
        };
        /**
         * Função chamada ao clicar no campo de entrada.
         */
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        /**
         * Limpa o valor do campo de entrada.
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
     * Define o foco no campo de entrada.
     */
    async setFocus() {
        this.onClickWrapper();
    }
    /**
     * Remove o foco do campo de entrada.
     */
    async removeFocus() {
        this.onBlur();
    }
    /**
     * Retorna o elemento de input do componente.
     */
    async getInputElement() {
        return this.nativeInput;
    }
    /**
     * Verifica se o campo de entrada é válido.
     */
    async isValid() {
        return this.nativeInput.validity.valid;
    }
    /**
     * Limpa o valor do campo de entrada.
     */
    async clear() {
        this.value = '';
    }
    /**
     * Codifica os caracteres especiais para exibição segura (evita injeção de código HTML).
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
     * Avisa sobre a mudança do valor do campo de entrada.
     */
    valueChanged(newValue) {
        const changeValue = this.encode ? this.encodeValue(newValue || '') : newValue || '';
        this.bdsChange.emit({ value: changeValue });
    }
    /**
     * Função que renderiza o ícone dentro do campo de entrada.
     */
    renderIcon() {
        return (this.icon && (h("div", { class: {
                input__icon: true,
                'input__icon--large': !!this.label,
            } }, h("bds-icon", { class: "input__icon--color", size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
    }
    /**
     * Função que renderiza a label do campo de entrada.
     */
    renderLabel() {
        return (this.label && (h("label", { class: {
                input__container__label: true,
                'input__container__label--pressed': this.isPressed && !this.disabled,
            } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
    }
    /**
     * Função que renderiza as mensagens de erro ou sucesso abaixo do campo de entrada.
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
     * Valida o campo de entrada ao perder o foco.
     */
    onBlurValidations() {
        this.required && this.requiredValidation();
        this.pattern && this.patternValidation();
        (this.minlength || this.maxlength) && this.lengthValidation();
        (this.min || this.max) && this.minMaxValidation();
        this.checkValidity();
    }
    /**
     * Realiza as validações do campo enquanto o usuário digita.
     */
    onBdsInputValidations() {
        this.type === 'email' && this.emailValidation();
        this.type === 'phonenumber' && this.numberValidation();
        this.checkValidity();
    }
    /**
     * Valida o padrão regex do campo.
     */
    patternValidation() {
        const regex = new RegExp(this.pattern);
        this.bdsPatternValidation.emit(regex.test(this.nativeInput.value));
    }
    /**
     * Valida se o campo é obrigatório.
     */
    requiredValidation() {
        if (this.nativeInput.validity.valueMissing) {
            this.validationMesage = this.requiredErrorMessage;
            this.validationDanger = true;
        }
    }
    /**
     * Valida o comprimento do texto no campo de entrada.
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
     * Valida os valores mínimos e máximos do campo de entrada.
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
     * Valida se o campo contém um email válido.
     */
    emailValidation() {
        if (emailValidation(this.nativeInput.value)) {
            this.validationMesage = this.emailErrorMessage;
            this.validationDanger = true;
        }
    }
    /**
     * Valida se o campo contém um número válido.
     */
    numberValidation() {
        if (numberValidation(this.nativeInput.value)) {
            this.validationMesage = this.numberErrorMessage;
            this.validationDanger = true;
        }
    }
    /**
     * Verifica se o campo de entrada é válido.
     */
    checkValidity() {
        if (this.nativeInput.validity.valid) {
            this.validationDanger = false;
        }
    }
    /**
     * Atualiza o valor do campo de entrada após as mudanças.
     */
    componentDidUpdate() {
        if (this.nativeInput && this.value != this.nativeInput.value) {
            this.nativeInput.value = this.value;
        }
    }
    render() {
        const isPressed = this.isPressed && !this.disabled;
        const Element = this.isTextarea ? 'textarea' : 'input';
        return (h(Host, { key: 'b4d1fee2987836035820e6d8403d9a9821042305', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: '776d31af06d3628c30666c87038a5c22c8a4f789', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { key: '4b15c0a203aff95741236294bebf6bb83d51359e', name: "input-left" }), h("div", { key: '1b00b4bf38799a0297859f49c738de23611ac159', class: "input__container" }, this.renderLabel(), h("div", { key: 'b9cb4b621f663815e034932e11f5ec620c6e014a', class: { input__container__wrapper: !this.chips, input__container__wrapper__chips: this.chips } }, h("slot", { key: '1585fcf339ca992766ae705e4c2b5455a6a6d4b0', name: "inside-input-left" }), h(Element, { key: 'a66e09fbbeb90287f84fc62d1dbcf0d6e40cbc03', class: { input__container__text: true, input__container__text__chips: this.chips }, ref: (input) => (this.nativeInput = input), rows: this.rows, cols: this.cols, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest }))), this.counterLength && (h("bds-counter-text", Object.assign({ key: '2ae6766b6751a6b6b10d73f4bee841dabd894a0a', length: this.value.length, max: this.maxlength, active: isPressed }, this.counterLengthRule))), this.success && h("bds-icon", { key: '3026ab9be7fe408e2ba51637514ff332d939600d', class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { key: '4eb783d9f97093eedbb6b4fd953fca324161b88a', name: "input-right" })), this.renderMessage()));
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
                    "text": "Nome do input, usado para identifica\u00E7\u00E3o no formul\u00E1rio."
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
                    "text": "Define o tipo do input (por exemplo, `text`, `password`, etc)."
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
                    "text": "R\u00F3tulo que ser\u00E1 exibido acima do input."
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
                    "text": "Texto que ser\u00E1 exibido como sugest\u00E3o ou dica no input."
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
                    "text": "Define a capitaliza\u00E7\u00E3o autom\u00E1tica do texto (valores poss\u00EDveis: `on`, `off`)."
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
                    "text": "Define o comportamento de autocompletar do navegador (valores poss\u00EDveis: `on`, `off`)."
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
                    "text": "Define o valor m\u00E1ximo permitido para o input."
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
                    "text": "Define o n\u00FAmero m\u00E1ximo de caracteres permitidos no input."
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
                    "text": "Define o valor m\u00EDnimo permitido para o input."
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
                    "text": "Define o n\u00FAmero m\u00EDnimo de caracteres permitidos no input."
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
                    "text": "Torna o input somente leitura."
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
                    "text": "Define se o input \u00E9 obrigat\u00F3rio."
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
                    "text": "Define um padr\u00E3o regex que o valor do input deve seguir."
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
                    "text": "Mensagem de ajuda exibida abaixo do input."
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
                    "text": "Mensagem de erro exibida quando o valor do input \u00E9 inv\u00E1lido."
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
                    "text": "Mensagem exibida quando o valor do input \u00E9 v\u00E1lido."
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
                    "text": "Nome do \u00EDcone a ser exibido dentro do input."
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
                    "text": "Define se o input est\u00E1 desabilitado."
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
                    "text": "Define se o input est\u00E1 em estado de erro."
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
                    "text": "Define se o input est\u00E1 em estado de sucesso."
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
                    "text": "O valor atual do input."
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
                    "text": "Define se ser\u00E1 exibido um contador de comprimento de caracteres."
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
                    "text": "Define a regra do contador de comprimento de caracteres (min, max, etc)."
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
                    "text": "Define se o input ser\u00E1 submetido ao pressionar Enter."
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
                    "text": "Define se o input \u00E9 uma \u00E1rea de texto (textarea)."
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
                    "text": "Define a quantidade de linhas da \u00E1rea de texto (se for `textarea`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
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
                    "text": "Define a quantidade de colunas da \u00E1rea de texto (se for `textarea`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
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
                    "text": "Mensagem de erro exibida quando o input n\u00E3o \u00E9 preenchido e \u00E9 obrigat\u00F3rio."
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o atende ao comprimento m\u00EDnimo."
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o atende ao valor m\u00EDnimo permitido."
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o atende ao valor m\u00E1ximo permitido."
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o \u00E9 um email v\u00E1lido."
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
                    "text": "Mensagem de erro exibida quando o valor do input n\u00E3o \u00E9 um n\u00FAmero v\u00E1lido."
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
                    "text": "Define se o input ser\u00E1 exibido como chips (um tipo de entrada com m\u00FAltiplos valores)."
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
                    "text": "Data test \u00E9 a prop para testar especificamente a a\u00E7\u00E3o do componente."
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
                    "text": "Evento disparado quando o valor do input muda."
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
                    "text": "Evento disparado quando o input recebe um input (digita\u00E7\u00E3o)."
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
                    "text": "Evento disparado quando o input perde o foco."
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
                    "text": "Evento disparado quando o input ganha o foco."
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
                    "text": "Evento disparado quando o formul\u00E1rio \u00E9 submetido."
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
                    "text": "Evento disparado para valida\u00E7\u00E3o de padr\u00E3o regex."
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
                    "text": "Evento disparado quando a tecla \"Backspace\" \u00E9 pressionada."
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
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Define o foco no campo de entrada.",
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
                    "text": "Remove o foco do campo de entrada.",
                    "tags": []
                }
            },
            "getInputElement": {
                "complexType": {
                    "signature": "() => Promise<HTMLInputElement>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLInputElement": {
                            "location": "global",
                            "id": "global::HTMLInputElement"
                        }
                    },
                    "return": "Promise<HTMLInputElement>"
                },
                "docs": {
                    "text": "Retorna o elemento de input do componente.",
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
                    "text": "Verifica se o campo de entrada \u00E9 v\u00E1lido.",
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
                    "text": "Limpa o valor do campo de entrada.",
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
