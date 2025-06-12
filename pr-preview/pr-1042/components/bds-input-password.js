import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-3JBO9P5_.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const inputPasswordCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, rgb(89, 89, 89));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.input__password--icon{position:relative;color:var(--color-content-disable, rgb(89, 89, 89));display:-ms-flexbox;display:flex}.input__password--icon::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px;pointer-events:none}.input__password--icon:focus-visible{outline:none}.input__password--icon:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}";

const InputPassword = /*@__PURE__*/ proxyCustomElement(class InputPassword extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsInputPasswordChange = createEvent(this, "bdsInputPasswordChange");
        this.bdsInputPasswordInput = createEvent(this, "bdsInputPasswordInput");
        this.bdsInputPasswordBlur = createEvent(this, "bdsInputPasswordBlur");
        this.bdsInputPasswordFocus = createEvent(this, "bdsInputPasswordFocus");
        this.bdsInputPasswordSubmit = createEvent(this, "bdsInputPasswordSubmit");
        this.bdsKeyDownBackspace = createEvent(this, "bdsKeyDownBackspace");
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
        return (h(Host, { key: '7e31694311d0699ee89239340da854fd4862e6a4', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: '1c459cb8a664bb1e1d33773307142e2e261f7fda', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("div", { key: '78c548c1a6d7ceb975a3404268f8800ce8970308', class: "input__container" }, this.renderLabel(), h("div", { key: '4254808e1037a6476025484e168cb23a6fb569e2', class: { input__container__wrapper: true } }, h("input", { key: 'f8b4da950f1648a9bb79214ea242c56558ae74ce', ref: this.refNativeInput, class: { input__container__text: true }, type: type, name: this.inputName, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, autocomplete: autocomplete, autocapitalize: this.autoCapitalize, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onSubmit: this.onSubmit, value: this.value, disabled: this.disabled, "data-test": this.dataTest }))), h("div", { key: '0502b6ed8d9a2d47e5425fd837b40de6ef96b229', class: "input__password--icon", onClick: this.toggleEyePassword, onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }, h("bds-icon", { key: '59052f30b977d8501dfc519a8f6c8e8c94220f76', size: "small", name: iconPassword, color: "inherit" })), this.success && h("bds-icon", { key: '8253c92100519f811555025a8992221bb6b0b059', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()));
    }
    static get watchers() { return {
        "value": ["onChange"]
    }; }
    static get style() { return inputPasswordCss; }
}, [1, "bds-input-password", {
        "openEyes": [4, "open-eyes"],
        "value": [1537],
        "label": [1],
        "inputName": [1, "input-name"],
        "max": [1],
        "maxlength": [2],
        "min": [1],
        "minlength": [2],
        "readonly": [4],
        "helperMessage": [1, "helper-message"],
        "errorMessage": [1, "error-message"],
        "successMessage": [1025, "success-message"],
        "danger": [516],
        "success": [1540],
        "icon": [513],
        "disabled": [4],
        "autoCapitalize": [1, "auto-capitalize"],
        "autoComplete": [1, "auto-complete"],
        "placeholder": [1],
        "dataTest": [1, "data-test"],
        "validationDanger": [32],
        "isPressed": [32],
        "validationMesage": [32]
    }, undefined, {
        "value": ["onChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-input-password", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-input-password":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InputPassword);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsInputPassword = InputPassword;
const defineCustomElement = defineCustomElement$1;

export { BdsInputPassword, defineCustomElement };
//# sourceMappingURL=bds-input-password.js.map

//# sourceMappingURL=bds-input-password.js.map