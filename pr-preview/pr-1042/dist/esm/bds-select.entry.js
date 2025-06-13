import { r as registerInstance, c as createEvent, h, a as getElement } from './index-COEIU3SQ.js';
import { g as getScrollParent, p as positionAbsoluteElement } from './position-element-DJObw-Em.js';

const selectCss = ":host{display:block}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 7px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;line-height:22px;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-ghost, rgb(140, 140, 140));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.select{position:relative;outline:none}.select__icon{color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex}.select__options{background:var(--color-surface-0, rgb(255, 255, 255));width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;pointer-events:none;opacity:0}.select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}.inside-input-left{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:200px;overflow-y:auto}.inside-input-left::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.inside-input-left::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input-chips__chip{margin:2px 4px 2px 0px}.input-chips__chips{-ms-flex:1;flex:1}";

const Select = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            const opt = this.childOptions.find((option) => option.value == value);
            if (this.internalOptions) {
                const internalOption = this.internalOptions.find((option) => option.value == opt?.value);
                if (internalOption) {
                    return internalOption.titleText ? internalOption.titleText : internalOption.label;
                }
            }
            return opt?.titleText ? opt?.titleText : (opt?.innerText ?? '');
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
        switch (event.key) {
            case 'Enter':
                this.toggle();
                break;
            case 'ArrowDown':
                if (!this.disabled) {
                    this.isOpen = true;
                }
                if (this.childOptionSelected) {
                    this.value = this.childOptionSelected.nextSibling?.value;
                    return;
                }
                this.value = this.el.firstElementChild?.value;
                break;
            case 'ArrowUp':
                if (this.childOptionSelected) {
                    this.value = this.childOptionSelected.previousSibling?.value;
                    return;
                }
                this.value = this.el.lastElementChild?.value;
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
        return (h("div", { key: '8c93c59df787cbe4b87d05c4b59a7172f3c49e95', class: "select" }, h("div", { key: '44d04eee0507d4bcc405b60ef21e63121908c21f', class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: 'd28d3313083f0dbe4c166323ddf72ccd92a1f3f5', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, part: "input-container" }, this.renderIcon(), h("div", { key: '360e2e7534d41723e4fa2018731aed739ec95203', class: "input__container" }, this.renderLabel(), h("div", { key: '497d3924fd6e5b40320cf6c6ad1a5767b9af89df', class: { input__container__wrapper: true } }, h("input", { key: '66c6eb5f17a8e31d089c783c8c1a8a0d433591c7', ref: this.refNativeInput, class: { input__container__text: true }, onFocus: this.onFocus, onBlur: this.onBlur, value: this.text, disabled: this.disabled, placeholder: this.placeholder, readonly: true, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper.bind(this) }))), h("div", { key: 'e98bfbfd6cd63f8c0859c9fd50ce5c05408f4278', class: "select__icon" }, h("bds-icon", { key: 'e792991505d99c9b6ffd0936d81c89bee190ffb5', ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" })), this.success && h("bds-icon", { key: '3f979efce75c9ab79a0438d9308a62c1ed214643', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()), h("div", { key: 'da526f224278b95483ad2d9dc76e159051be0805', ref: (el) => this.refDropdown(el), class: {
                select__options: true,
                'select__options--open': this.isOpen,
            }, role: "application" }, this.internalOptions ? (this.internalOptions.map((option, idx) => option.icon || option.titleText ? (h("bds-select-option", { key: idx, value: option.value, "title-text": option.titleText, "slot-align": option.slotAlign, bulkOption: option.bulkOption, status: option.status }, option.icon && (h("bds-icon", { slot: "input-left", name: option.icon, size: "medium", color: option.iconColor })), option.label)) : (h("bds-select-option", { key: idx, value: option.value, bulkOption: option.bulkOption, status: option.status }, option.label)))) : (h("slot", null)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"],
        "value": ["valueChanged"],
        "options": ["optionsChanged"]
    }; }
};
Select.style = selectCss;

export { Select as bds_select };
//# sourceMappingURL=bds-select.entry.js.map

//# sourceMappingURL=bds-select.entry.js.map