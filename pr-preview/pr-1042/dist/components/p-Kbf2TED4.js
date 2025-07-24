import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { g as getScrollParent, p as positionAbsoluteElement } from './p-BNEKIkjk.js';
import { d as defineCustomElement$4 } from './p-BpaUgttw.js';
import { d as defineCustomElement$3 } from './p-BHBVuzyo.js';
import { d as defineCustomElement$2 } from './p-BllZLSuS.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const selectCss = ":host{display:block}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 7px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;line-height:22px;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-ghost, rgb(140, 140, 140));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.select{position:relative;outline:none}.select__icon{color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex}.select__options{background:var(--color-surface-0, rgb(255, 255, 255));width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;pointer-events:none;opacity:0}.select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}.inside-input-left{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:200px;overflow-y:auto}.inside-input-left::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.inside-input-left::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input-chips__chip{margin:2px 4px 2px 0px}.input-chips__chips{-ms-flex:1;flex:1}";

const Select = /*@__PURE__*/ proxyCustomElement(class Select extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsChange = createEvent(this, "bdsChange");
        this.bdsCancel = createEvent(this, "bdsCancel");
        this.bdsFocus = createEvent(this, "bdsFocus");
        this.bdsBlur = createEvent(this, "bdsBlur");
        this.intoView = null;
        this.isOpen = false;
        this.text = '';
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
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * Disabled input.
         */
        this.disabled = false;
        /**
         *  label in input, with he the input size increases.
         */
        this.label = '';
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = '';
        /**
         * Placeholder for native input element.
         */
        this.placeholder = '';
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
         * Set the placement of the options menu. Can be 'bottom' or 'top'.
         */
        this.optionsPosition = 'auto';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.refNativeInput = (el) => {
            this.nativeInput = el;
        };
        this.refDropdown = (el) => {
            this.dropElement = el;
        };
        this.refIconDrop = (el) => {
            this.iconDropElement = el;
        };
        this.onClickWrapper = () => {
            this.onFocus();
            this.isOpen = true;
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
        this.toggle = () => {
            if (!this.disabled) {
                this.isOpen = !this.isOpen;
            }
        };
        this.getText = (value) => {
            var _a;
            const opt = this.childOptions.find((option) => option.value == value);
            if (this.internalOptions) {
                const internalOption = this.internalOptions.find((option) => option.value == (opt === null || opt === void 0 ? void 0 : opt.value));
                if (internalOption) {
                    return internalOption.titleText ? internalOption.titleText : internalOption.label;
                }
            }
            return (opt === null || opt === void 0 ? void 0 : opt.titleText) ? opt === null || opt === void 0 ? void 0 : opt.titleText : ((_a = opt === null || opt === void 0 ? void 0 : opt.innerText) !== null && _a !== void 0 ? _a : '');
        };
        this.handler = (event) => {
            const { detail: { value }, } = event;
            this.value = value;
            this.toggle();
        };
    }
    isOpenChanged(isOpen) {
        if (this.positionHeightDrop == 'bottom') {
            this.iconDropElement.name = this.isOpen ? 'arrow-up' : 'arrow-down';
        }
        else {
            this.iconDropElement.name = this.isOpen ? 'arrow-down' : 'arrow-up';
        }
        if (isOpen)
            if (this.optionsPosition != 'auto') {
                this.setDefaultPlacement(this.optionsPosition);
            }
            else {
                this.validatePositionDrop();
            }
    }
    valueChanged() {
        this.bdsChange.emit({ value: this.value });
        for (const option of this.childOptions) {
            option.selected = this.value === option.value;
        }
        this.text = this.getText(this.value);
    }
    handleWindow(ev) {
        const path = ev.composedPath();
        if (!path.find((element) => element == this.el)) {
            this.isOpen = false;
        }
    }
    componentWillLoad() {
        this.options && this.optionsChanged();
        this.intoView = getScrollParent(this.el);
    }
    componentWillRender() {
        this.options && this.updateOptions();
        this.getValueSelected();
    }
    componentDidLoad() {
        this.getValueSelected();
        if (this.optionsPosition != 'auto') {
            this.setDefaultPlacement(this.optionsPosition);
        }
        else {
            this.validatePositionDrop();
        }
    }
    setDefaultPlacement(value) {
        if (value == 'bottom') {
            this.dropElement.classList.add('select__options--position-bottom');
            this.iconDropElement.name = 'arrow-down';
        }
        else {
            this.dropElement.classList.add('select__options--position-top');
            this.iconDropElement.name = 'arrow-up';
        }
    }
    validatePositionDrop() {
        const positionValue = positionAbsoluteElement({
            actionElement: this.el,
            changedElement: this.dropElement,
            intoView: this.intoView,
        });
        this.positionHeightDrop = positionValue.y;
        if (positionValue.y == 'bottom') {
            this.dropElement.classList.add('select__options--position-bottom');
            this.iconDropElement.name = 'arrow-down';
        }
        else {
            this.dropElement.classList.add('select__options--position-top');
            this.iconDropElement.name = 'arrow-up';
        }
    }
    optionsChanged() {
        this.updateOptions();
    }
    getValueSelected() {
        for (const option of this.childOptions) {
            option.selected = this.value === option.value;
            option.addEventListener('optionSelected', this.handler);
        }
        this.text = this.getText(this.value);
    }
    updateOptions() {
        if (this.options) {
            if (typeof this.options === 'string') {
                this.internalOptions = JSON.parse(this.options);
            }
            else {
                this.internalOptions = this.options;
            }
        }
    }
    get childOptions() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option'))
            : Array.from(this.el.querySelectorAll('bds-select-option'));
    }
    get childOptionSelected() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option')).find((option) => option.selected)
            : Array.from(this.el.querySelectorAll('bds-select-option')).find((option) => option.selected);
    }
    keyPressWrapper(event) {
        var _a, _b, _c, _d;
        switch (event.key) {
            case 'Enter':
                this.toggle();
                break;
            case 'ArrowDown':
                if (!this.disabled) {
                    this.isOpen = true;
                }
                if (this.childOptionSelected) {
                    this.value = (_a = this.childOptionSelected.nextSibling) === null || _a === void 0 ? void 0 : _a.value;
                    return;
                }
                this.value = (_b = this.el.firstElementChild) === null || _b === void 0 ? void 0 : _b.value;
                break;
            case 'ArrowUp':
                if (this.childOptionSelected) {
                    this.value = (_c = this.childOptionSelected.previousSibling) === null || _c === void 0 ? void 0 : _c.value;
                    return;
                }
                this.value = (_d = this.el.lastElementChild) === null || _d === void 0 ? void 0 : _d.value;
                break;
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
        if (message) {
            return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
        }
        return undefined;
    }
    render() {
        const isPressed = this.isPressed && !this.disabled;
        return (h("div", { key: '5b257abab1684e682b2e5a4ece279838ded86426', class: "select" }, h("div", { key: '076dac2ca0f3067b38c428e4a0bd5df9882fcbaa', class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: 'bd64f6afe771e27f66200db9ed1f42f5e32ce87c', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, part: "input-container" }, this.renderIcon(), h("div", { key: '9c940b2ac9b9713055d5b5c260fe5d21e19dfad8', class: "input__container" }, this.renderLabel(), h("div", { key: '74ec281d8636c121e10e7fb7885d47888c2692fd', class: { input__container__wrapper: true } }, h("input", { key: 'f962d90b9e465c81848f460bcd40d6868643f3a0', ref: this.refNativeInput, class: { input__container__text: true }, onFocus: this.onFocus, onBlur: this.onBlur, value: this.text, disabled: this.disabled, placeholder: this.placeholder, readonly: true, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper.bind(this) }))), h("div", { key: '6c493aaf4bc617ea4694e15a4495ebb8d5a66031', class: "select__icon" }, h("bds-icon", { key: 'b22854217a0a2c790c1ed37adfdd2f0a2ab5e231', ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" })), this.success && h("bds-icon", { key: '706bc4903f5c844cdf1b5a567e4b0c1651198c81', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()), h("div", { key: '23e7d8e882712901a58228f82e6ccbfbc42893f5', ref: (el) => this.refDropdown(el), class: {
                select__options: true,
                'select__options--open': this.isOpen,
            }, role: "application" }, this.internalOptions ? (this.internalOptions.map((option, idx) => option.icon || option.titleText ? (h("bds-select-option", { key: idx, value: option.value, "title-text": option.titleText, "slot-align": option.slotAlign, bulkOption: option.bulkOption, status: option.status }, option.icon && (h("bds-icon", { slot: "input-left", name: option.icon, size: "medium", color: option.iconColor })), option.label)) : (h("bds-select-option", { key: idx, value: option.value, bulkOption: option.bulkOption, status: option.status }, option.label)))) : (h("slot", null)))));
    }
    get el() { return this; }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"],
        "value": ["valueChanged"],
        "options": ["optionsChanged"]
    }; }
    static get style() { return selectCss; }
}, [1, "bds-select", {
        "options": [1],
        "value": [1032],
        "danger": [516],
        "success": [1540],
        "disabled": [516],
        "label": [1],
        "icon": [513],
        "placeholder": [1],
        "helperMessage": [1, "helper-message"],
        "errorMessage": [1, "error-message"],
        "successMessage": [1025, "success-message"],
        "optionsPosition": [1537, "options-position"],
        "dataTest": [1, "data-test"],
        "intoView": [32],
        "isOpen": [32],
        "text": [32],
        "validationDanger": [32],
        "isPressed": [32],
        "validationMesage": [32],
        "internalOptions": [32]
    }, [[11, "mousedown", "handleWindow"]], {
        "isOpen": ["isOpenChanged"],
        "value": ["valueChanged"],
        "options": ["optionsChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-select", "bds-checkbox", "bds-icon", "bds-select-option", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Select);
            }
            break;
        case "bds-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-select-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Select as S, defineCustomElement as d };
//# sourceMappingURL=p-Kbf2TED4.js.map

//# sourceMappingURL=p-Kbf2TED4.js.map