import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-19uyXyEx.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const inputEditableCss = ".element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input,.element_input textarea{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder,.element_input textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-moz-placeholder,.element_input textarea::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input:-ms-input-placeholder,.element_input textarea:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-ms-input-placeholder,.element_input textarea::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::placeholder,.element_input textarea::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-webkit-input-placeholder,.element_input textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, rgb(246, 246, 246))}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-primary, rgb(30, 107, 241));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-delete, rgb(230, 15, 15));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__text{caret-color:var(--color-delete, rgb(230, 15, 15));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-success, rgb(132, 235, 188));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-content-default, rgb(40, 40, 40));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-content-default, rgb(40, 40, 40));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__text{caret-color:var(--color-content-default, rgb(40, 40, 40));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed;background:var(--color-surface-2, rgb(237, 237, 237))}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-primary, rgb(30, 107, 241));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-success, rgb(132, 235, 188));margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, rgb(89, 89, 89));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-delete, rgb(230, 15, 15))}.input__message--danger .input__message__text{color:var(--color-delete, rgb(230, 15, 15))}.input__editable{display:block}.input__editable--static{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative}.input__editable--static::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.input__editable--static:focus-visible{outline:none}.input__editable--static:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.input__editable--static:hover .input__editable--static__typo{border:1px solid var(--color-primary, rgb(30, 107, 241))}.input__editable--static:hover .input__editable--static__icon{color:var(--color-primary, rgb(30, 107, 241))}.input__editable--static__typo{border:1px solid transparent;margin:0;padding:8px;border-radius:8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:80%;color:var(--color-content-default, rgb(40, 40, 40))}.input__editable--static__icon{margin-left:8px;color:var(--color-content-ghost, rgb(140, 140, 140))}.input__editable--active{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.input__editable--active .element_input{min-width:120px;margin-right:4px}.input__editable--active .element_input.expanded{max-width:100%}.input__editable--active .element_input.fixed{max-width:140px}.input__editable--active .element_input.short input{font-size:1rem;line-height:0px}.input__editable--active .element_input.standard input{font-size:1.5rem;line-height:0px}.input__editable--active .element_input.tall input{font-size:2.5rem;line-height:0px}.input__editable--active .element_input::part(input-container){padding:4px 4px 5px 12px}.input__editable--active .element_input::part(input__message){min-width:180px}.input__editable--active bds-icon{cursor:pointer;position:relative}.input__editable--active bds-icon::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.input__editable--active bds-icon:focus-visible{outline:none}.input__editable--active bds-icon:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.input__editable--active__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:auto 0}.input__editable--active__icon--error{color:var(--color-delete, rgb(230, 15, 15))}.input__editable--active__icon--error:hover{color:var(--color-delete, rgb(230, 15, 15))}.input__editable--active__icon--checkball{color:var(--color-primary, rgb(30, 107, 241))}.input__editable--active__icon--checkball:hover{color:var(--color-primary, rgb(30, 107, 241))}.input__editable--active__icon--checkball--error{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__editable--active__icon--checkball--error:hover{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__editable--hidden{display:none}";

const InputEditable = /*@__PURE__*/ proxyCustomElement(class InputEditable extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsInputEditableSave = createEvent(this, "bdsInputEditableSave");
        this.bdsChange = createEvent(this, "bdsChange");
        this.bdsInput = createEvent(this, "bdsInput");
        this.bdsCancel = createEvent(this, "bdsCancel");
        this.bdsFocus = createEvent(this, "bdsFocus");
        this.bdsBlur = createEvent(this, "bdsBlur");
        /**
         * Conditions the element to say whether it is pressed or not, to add styles.
         */
        this.isEditing = false;
        /**
         * Used to block the confirm icon.
         */
        this.isValid = true;
        /**
         * Used to validate it is pressed.
         */
        this.isPressed = false;
        /**
         * Used to validate it is focused.
         */
        this.isFocused = false;
        /**
         * Used to set the error message setted by the internal validators
         */
        this.validationMesage = '';
        /**
         * Used to set the danger behavior by the internal validators
         */
        this.validationDanger = false;
        /**
         * Set the component size. Can be one of:
         * 'short' | 'standard' | 'tall';
         */
        this.size = 'standard';
        /**
         * Defines whether the component will be expandable
         */
        this.expand = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Input Name
         */
        this.inputName = '';
        /**
         * The value of the input.
         */
        this.value = '';
        /**
         * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        this.minlength = 0;
        /**
         * Indicated to pass an feeback to user.
         */
        this.errorMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.successMessage = '';
        /**
         * Indicated to pass a help to the user in complex filling.
         */
        this.helperMessage = '';
        /**
         * Placeholder for native input element.
         */
        this.placeholder = '';
        /**
         * Add state danger on input, use for use feedback. If true avoid save confirmation.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonEdit is the data-test to button edit.
         */
        this.dtButtonEdit = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonConfirm is the data-test to button confirm.
         */
        this.dtButtonConfirm = null;
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
            return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "solid", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
        }
        return undefined;
    }
    render() {
        const variant = this.getFontSizeClass();
        const inputExpand = this.getExpand();
        return (h(Host, { key: 'ecb3961c9c360654a75e1759ce29ed716de957bd' }, h("div", { key: '24cc54bc23ae2310ed0d03f51f84110ba9547ae6', class: "input__editable" }, h("div", { key: 'c9ebeba13ff948ac24b11acdad08e9ff0e49b673', class: { 'input__editable--static': true, 'input__editable--hidden': this.isEditing }, onClick: this.handleEditing, "data-test": this.dtButtonEdit, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this) }, h("bds-typo", { key: 'a2748be2510218abb9d4266867fa8d806698599c', tag: "span", part: "input__editable--static__typo", class: "input__editable--static__typo", variant: variant }, this.value), h("bds-icon", { key: "edit-icon", class: "input__editable--static__icon", name: "edit" })), h("div", { key: '8ba4100236fa5cab2886f7303316e46c2ade6847', class: { 'input__editable--active': true, 'input__editable--hidden': !this.isEditing } }, h("div", { key: 'ee596b546d3903f7918f4f7657489bf3cac2c496', class: { element_input: true, [inputExpand]: true, [this.size]: true } }, h("div", { key: '73809ac824891288efe407f67d882a83f3c6109e', class: {
                input: true,
                select: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--pressed': this.isPressed,
            }, onClick: this.onClickWrapper }, h("div", { key: '1ff805bb9c4f44ddf8d0f320a0c70184ea4fb639', class: "input__container" }, h("input", { key: '6864bc631c047afab2ee1787573cdc14d33f2edd', class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholder, value: this.value, required: true, part: "input", "data-test": this.dataTest })), this.success && h("bds-icon", { key: 'e5b7439e77d47de05388f490fbf9e45e16b2bb33', class: "icon-success", name: "checkball", theme: "solid", size: "xxx-small" })), this.renderMessage()), h("div", { key: 'f19b1ac20779e5f4f6245a5cbe38774fd31edb7b', class: "input__editable--active__icon" }, h("bds-icon", { key: "error-icon", class: "input__editable--active__icon--error", theme: "solid", name: "error", onClick: this.handleEditing, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this), dataTest: this.dtButtonClose }), h("bds-icon", { key: "checkball-icon", class: {
                'input__editable--active__icon--checkball': true,
                'input__editable--active__icon--checkball--error': !this.isValid,
            }, theme: "solid", name: "checkball", onClick: this.handleSaveText, tabindex: "0", onKeyDown: this.handleKeyDownSave.bind(this), dataTest: this.dtButtonConfirm }))))));
    }
    get el() { return this; }
    static get style() { return inputEditableCss; }
}, [1, "bds-input-editable", {
        "size": [1],
        "expand": [4],
        "dataTest": [1, "data-test"],
        "inputName": [1, "input-name"],
        "value": [1537],
        "requiredErrorMessage": [1, "required-error-message"],
        "minlength": [2],
        "minlengthErrorMessage": [1, "minlength-error-message"],
        "maxlength": [2],
        "errorMessage": [1, "error-message"],
        "successMessage": [1025, "success-message"],
        "helperMessage": [1, "helper-message"],
        "placeholder": [1],
        "danger": [1540],
        "success": [1540],
        "dtButtonEdit": [1, "dt-button-edit"],
        "dtButtonClose": [1, "dt-button-close"],
        "dtButtonConfirm": [1, "dt-button-confirm"],
        "oldValue": [32],
        "isEditing": [32],
        "isValid": [32],
        "isPressed": [32],
        "isFocused": [32],
        "validationMesage": [32],
        "validationDanger": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-input-editable", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-input-editable":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InputEditable);
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

const BdsInputEditable = InputEditable;
const defineCustomElement = defineCustomElement$1;

export { BdsInputEditable, defineCustomElement };
//# sourceMappingURL=bds-input-editable.js.map

//# sourceMappingURL=bds-input-editable.js.map