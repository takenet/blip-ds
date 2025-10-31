import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { g as getScrollParent, p as positionAbsoluteElement } from './p-BNEKIkjk.js';
import { w as whitespaceValidation, e as emailValidation } from './p-BXYXNVip.js';
import { d as defineCustomElement$8 } from './p-MC00Y-D8.js';
import { d as defineCustomElement$7 } from './p-BMIFxDUO.js';
import { d as defineCustomElement$6 } from './p-BenKhKq4.js';
import { d as defineCustomElement$5 } from './p-19uyXyEx.js';
import { d as defineCustomElement$4 } from './p-LlYRtKgT.js';
import { d as defineCustomElement$3 } from './p-IEiDdwGC.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const selectCss = ":host{display:block}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 7px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;line-height:22px;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-ghost, rgb(140, 140, 140));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.select{position:relative;outline:none}.select__icon{color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex}.select__options{background:var(--color-surface-0, rgb(255, 255, 255));width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;pointer-events:none;opacity:0}.select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}.inside-input-left{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:200px;overflow-y:auto}.inside-input-left::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.inside-input-left::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input-chips__chip{margin:2px 4px 2px 0px}.input-chips__chips{-ms-flex:1;flex:1}";

const SelectChips = /*@__PURE__*/ proxyCustomElement(class SelectChips extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsChange = createEvent(this, "bdsChange");
        this.bdsCancel = createEvent(this, "bdsCancel");
        this.bdsFocus = createEvent(this, "bdsFocus");
        this.bdsBlur = createEvent(this, "bdsBlur");
        this.bdsChangeChips = createEvent(this, "bdsChangeChips");
        this.bdsSelectChipsInput = createEvent(this, "bdsSelectChipsInput");
        this.bdsSubmit = createEvent(this, "bdsSubmit");
        this.isOpen = false;
        this.intoView = null;
        this.selectedOptions = [];
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
        this.internalChips = [];
        /**
         * The chips on the component
         * Should be passed this way:
         * chips='["chip1", "chip2"]'
         */
        this.chips = [];
        /**
         * Used for add prefix on new option select.
         */
        this.newPrefix = '';
        /**
         * the value of the select.
         */
        this.value = '';
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * Indicated to pass an feedback to user.
         */
        this.errorMessage = '';
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
         * Do not accept duplicate chip elements.
         */
        this.duplicated = false;
        /**
         *  Specify if is possible to create a new tag that is not on the options.
         */
        this.canAddNew = true;
        /**
         *  Specify if is possible to create a new tag that is not on the options.
         */
        this.notFoundMessage = 'No results found';
        /**
         * Defining the type is important so that it is possible to carry out validations. Can be one of:
         * 'text' and 'email;
         */
        this.type = 'text';
        /**
         * The delimiter is used to add multiple chips in the same string.
         */
        this.delimiters = /,|;/;
        /**
         * If `true`, the user cannot modify the value.
         */
        this.disableSubmit = false;
        /**
         * Indicated to pass a help the user in complex filling.
         */
        this.helperMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.successMessage = '';
        /**
         * Prop to insert the name of the input
         */
        this.inputName = '';
        /**
         * A tip for the user who can enter no controls.
         */
        this.placeholder = '';
        /**
         * Set the placement of the options menu. Can be 'bottom' or 'top'.
         */
        this.optionsPosition = 'auto';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.handleChangeChipsValue = async () => {
            await this.resetFilterOptions();
        };
        this.refDropdown = (el) => {
            this.dropElement = el;
        };
        this.refIconDrop = (el) => {
            this.iconDropElement = el;
        };
        this.toggle = () => {
            if (!this.disabled) {
                this.isOpen = !this.isOpen;
            }
        };
        this.handler = async (event) => {
            const { detail: { value }, } = event;
            this.selectedOption = value;
            const text = this.getText(value);
            await this.addChip(text);
            this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
            this.bdsChange.emit({ data: this.selectedOptions });
            this.toggle();
        };
        this.handlerNewOption = async (text) => {
            await this.addChip(text);
            this.toggle();
        };
        this.getText = (value) => {
            const el = this.childOptions.find((option) => option.value === value);
            return this.getTextFromOption(el);
        };
        this.getTextFromOption = (opt) => {
            var _a, _b;
            if (this.internalOptions) {
                const internalOption = this.internalOptions.find((option) => option.value == (opt === null || opt === void 0 ? void 0 : opt.value));
                if (internalOption) {
                    return internalOption.label;
                }
            }
            return (opt === null || opt === void 0 ? void 0 : opt.titleText) ? opt.titleText : ((_b = (_a = opt === null || opt === void 0 ? void 0 : opt.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '');
        };
        this.setFocusWrapper = () => {
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.removeFocusWrapper = () => {
            this.nativeInput.blur();
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
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.bdsSelectChipsInput.emit(ev);
            this.changedInputValue();
        };
        this.keyPressWrapper = (event) => {
            switch (event.key) {
                case 'Enter':
                    if (this.canAddNew !== false) {
                        this.handleDelimiters();
                        this.setChip(this.value);
                        this.value = '';
                        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
                        this.bdsChange.emit({ data: this.selectedOptions });
                    }
                    if (!this.disabled) {
                        this.isOpen = true;
                    }
                    break;
                case 'ArrowDown':
                    if (!this.disabled) {
                        this.isOpen = true;
                    }
                    break;
                case 'ArrowUp':
                    if (!this.disabled) {
                        this.isOpen = false;
                    }
                    break;
                case 'Backspace':
                case 'Delete':
                    if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
                        this.removeLastChip();
                        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
                        this.bdsChange.emit({ data: this.selectedOptions });
                    }
                    break;
            }
        };
        this.changedInputValue = async () => {
            this.value = this.nativeInput.value;
            if (this.nativeInput.value) {
                await this.filterOptions(this.nativeInput.value);
            }
            else {
                await this.resetFilterOptions();
            }
            if (this.value && this.isOpen === false) {
                this.isOpen = true;
            }
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
    handleWindow(ev) {
        if (!this.el.contains(ev.target)) {
            this.isOpen = false;
        }
    }
    optionsChanged() {
        if (typeof this.options === 'string') {
            try {
                this.internalOptions = JSON.parse(this.options);
            }
            catch (e) { }
        }
        else {
            this.internalOptions = this.options;
        }
    }
    /**
     * Call change event before alter chips values.
     */
    valueChanged() {
        if (this.chips) {
            if (typeof this.chips === 'string') {
                try {
                    this.internalChips = JSON.parse(this.chips);
                }
                catch (_a) {
                    this.internalChips = [];
                }
            }
            else {
                this.internalChips = this.chips;
            }
        }
        else {
            this.internalChips = [];
        }
    }
    internalValueChanged() {
        this.handleChangeChipsValue();
        if (this.internalChips.length > 0) {
            this.selectedOptions = this.internalChips.map((item) => {
                return {
                    label: item,
                    value: `${this.validValueChip(item, this.childOptions)}`,
                };
            });
        }
    }
    validValueChip(value, internalOptions) {
        const selectOption = internalOptions === null || internalOptions === void 0 ? void 0 : internalOptions.find((option) => option.textContent == value);
        return `${selectOption ? selectOption.value : value}`;
    }
    /**
     * Return the validity of the input chips.
     */
    async isValid() {
        return this.validateChips();
    }
    /**
     * Return the chips
     */
    async getChips() {
        return this.internalChips;
    }
    /**
     * Clear all chips
     */
    async clear() {
        this.internalChips = [];
        this.value = '';
    }
    async add(value) {
        this.handleDelimiters();
        if (value) {
            this.setChip(value);
        }
        else {
            this.setChip(this.value);
        }
        this.value = '';
    }
    async setFocus() {
        this.nativeInput.focus();
    }
    async removeFocus() {
        this.nativeInput.blur();
    }
    componentWillLoad() {
        this.valueChanged();
        this.optionsChanged();
        this.intoView = getScrollParent(this.el);
    }
    async componentDidLoad() {
        await this.resetFilterOptions();
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
    async connectedCallback() {
        for (const option of this.childOptions) {
            option.addEventListener('optionSelected', this.handler);
        }
    }
    get childOptionsEnabled() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'))
            : Array.from(this.el.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'));
    }
    get childOptions() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'))
            : Array.from(this.el.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'));
    }
    async filterOptions(term) {
        if (!term) {
            await this.resetFilterOptions();
            return;
        }
        for (const option of this.childOptions) {
            const isExistsChip = this.existsChip(option.textContent, await this.getChips());
            const optionTextLower = option.textContent.toLowerCase();
            const termLower = term.toLowerCase();
            if (isExistsChip) {
                option.setAttribute('invisible', 'invisible');
            }
            if (term && optionTextLower.includes(termLower) && !isExistsChip) {
                option.removeAttribute('invisible');
            }
            if (term && !optionTextLower.includes(termLower) && !isExistsChip) {
                option.setAttribute('invisible', 'invisible');
            }
        }
    }
    async resetFilterOptions() {
        for (const option of this.childOptions) {
            if (this.existsChip(option.textContent, await this.getChips())) {
                option.setAttribute('invisible', 'invisible');
            }
            else {
                option.removeAttribute('invisible');
            }
        }
    }
    existsChip(optionChip, chips) {
        return chips.some((chip) => optionChip === chip);
    }
    enableCreateOption() {
        return !!(this.childOptionsEnabled.length === 0 && this.nativeInput && this.nativeInput.value);
    }
    async addChip(chip) {
        await this.setChip(chip);
        this.nativeInput.value = '';
    }
    validateChips() {
        if (this.type === 'email') {
            return !this.internalChips.some((chip) => !this.validateChip(chip));
        }
        else {
            return true;
        }
    }
    handleOnBlur() {
        this.bdsBlur.emit();
        this.isPressed = false;
    }
    verifyAndSubstituteDelimiters(value) {
        if (value.length === 1 && value[0].match(this.delimiters)) {
            return '';
        }
        let newValue = value.replace(/;/g, ',').replace(/\,+|;+/g, ',');
        if (newValue[0].match(this.delimiters)) {
            newValue = newValue.substring(1);
        }
        return newValue;
    }
    handleDelimiters() {
        const value = this.nativeInput.value;
        this.value = value ? value.trim() : '';
        if (value.length === 0)
            return;
        const existTerm = value.match(this.delimiters);
        if (!existTerm)
            return;
        const newValue = this.verifyAndSubstituteDelimiters(value);
        if (!newValue) {
            this.clearInputValues();
            return;
        }
        const words = newValue.split(this.delimiters);
        words.forEach((word) => {
            this.setChip(word.trimStart());
        });
        this.clearInputValues();
    }
    async handleChange(event) {
        const { detail: { value }, } = event;
        this.value = value ? value.trim() : '';
        if (value.length === 0)
            return;
        const existTerm = value.match(this.delimiters);
        if (!existTerm)
            return;
        const newValue = this.verifyAndSubstituteDelimiters(value);
        if (!newValue) {
            this.clearInputValues();
            return;
        }
        const words = newValue.split(this.delimiters);
        words.forEach((word) => {
            this.setChip(word);
        });
        this.clearInputValues();
    }
    clearInputValues(value = '') {
        this.nativeInput.value = value;
        this.value = value;
    }
    setChip(name) {
        if (!this.duplicated) {
            const exists = this.internalChips.some((chip) => chip.toLowerCase() === name.toLowerCase());
            if (exists)
                return;
        }
        if (!whitespaceValidation(name)) {
            return;
        }
        this.internalChips = [...this.internalChips, name];
    }
    validateChip(name) {
        const trimmedName = name.trim();
        if (this.type === 'email' && emailValidation(trimmedName)) {
            return false;
        }
        return true;
    }
    removeLastChip() {
        this.internalChips = this.internalChips.slice(0, this.internalChips.length - 1);
    }
    removeChip(event) {
        const { detail: { id }, } = event;
        this.internalChips = this.internalChips.filter((_chip, index) => index.toString() !== id);
        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
        this.bdsChange.emit({ data: this.selectedOptions });
    }
    renderChips() {
        if (!this.internalChips.length) {
            return [];
        }
        return this.internalChips.map((chip, index) => {
            const id = index.toString();
            const limit = 30;
            if (chip.length <= limit) {
                return (h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event) }, chip));
            }
            else {
                return (h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event) }, `${chip.slice(0, limit)} ...`)));
            }
        });
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
    generateKey(value) {
        return value.toLowerCase().replace(/ /g, '-');
    }
    render() {
        const isPressed = this.isPressed && !this.disabled;
        let internalOptions = [];
        if (this.options) {
            if (typeof this.options === 'string') {
                try {
                    internalOptions = JSON.parse(this.options);
                }
                catch (e) { }
            }
            else {
                internalOptions = this.options;
            }
        }
        return (h("div", { key: '6215b374a5b32c5b868ad855f812443fd49b9a19', class: "select", tabindex: "0", onFocus: this.setFocusWrapper, onBlur: this.removeFocusWrapper }, h("div", { key: '30a8bb1eb2166386a32685ee7dc36b20b385a1d4', class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null, onClick: this.toggle }, h("div", { key: 'dc411d39d50d175988e3e7b29efc2b0aeef0806e', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper }, this.renderIcon(), h("div", { key: 'db58d1df7f1ca5ee70ced7eea983fd39bc5c7df4', class: "input__container" }, this.renderLabel(), h("div", { key: '13bd58d94203fe860f8cb107c0274a1f717eeff8', class: { input__container__wrapper: true } }, this.internalChips.length > 0 && (h("span", { key: '593e7cf88988dcdbf56b2395e65689d89c556b23', style: { height: this.height, maxHeight: this.maxHeight }, class: "inside-input-left" }, this.renderChips())), h("input", { key: 'e6d5c71d2489310c4352b1e02f8280ebcc80e187', ref: (input) => (this.nativeInput = input), class: { input__container__text: true }, name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper }))), h("div", { key: '08a3a0cd7f09f04b6f969dd1dfffe60b41d5ae03', class: "select__icon" }, h("bds-icon", { key: '157933ffaaf7682052335759111daebb098fae44', ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" })), this.success && h("bds-icon", { key: '53507dd50b52056fd7cee0d53bed3e93bf04bda9', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()), h("div", { key: '029722625ccdaeb3be74932170e9b7ef033a59f4', ref: (el) => this.refDropdown(el), class: {
                select__options: true,
                'select__options--open': this.isOpen,
            } }, internalOptions.map((option) => (h("bds-select-option", { key: this.generateKey(option.value), onOptionSelected: this.handler, value: option.value, status: option.status }, option.label))), h("slot", { key: 'f8c7dc9fb27ceb9a0df9f5ad76f0e729d5f582cd' }), this.canAddNew === true && this.enableCreateOption() && (h("bds-select-option", { key: 'bec1ed521e6699992bb49ac8993975c71b86dfb4', id: "option-add", value: "add", onClick: () => this.handlerNewOption(this.nativeInput.value) }, this.newPrefix, this.nativeInput.value)), !this.canAddNew && this.enableCreateOption() && (h("bds-select-option", { key: '178ab081cdd734ee2951056455f4521f2c87e4e8', id: "no-option", value: "add" }, this.notFoundMessage)))));
    }
    get el() { return this; }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"],
        "options": ["optionsChanged"],
        "chips": ["valueChanged"],
        "internalChips": ["internalValueChanged"]
    }; }
    static get style() { return selectCss; }
}, [1, "bds-select-chips", {
        "options": [1025],
        "chips": [1025],
        "newPrefix": [513, "new-prefix"],
        "value": [1025],
        "danger": [1540],
        "success": [1540],
        "maxlength": [2],
        "errorMessage": [1025, "error-message"],
        "disabled": [516],
        "label": [1],
        "icon": [513],
        "duplicated": [4],
        "canAddNew": [4, "can-add-new"],
        "notFoundMessage": [1, "not-found-message"],
        "type": [1],
        "delimiters": [16],
        "disableSubmit": [4, "disable-submit"],
        "helperMessage": [1, "helper-message"],
        "successMessage": [1025, "success-message"],
        "inputName": [1, "input-name"],
        "placeholder": [1],
        "optionsPosition": [1537, "options-position"],
        "height": [1],
        "maxHeight": [1, "max-height"],
        "dataTest": [1, "data-test"],
        "internalOptions": [32],
        "isOpen": [32],
        "intoView": [32],
        "selectedOptions": [32],
        "validationDanger": [32],
        "isPressed": [32],
        "validationMesage": [32],
        "internalChips": [32],
        "selectedOption": [32],
        "isValid": [64],
        "getChips": [64],
        "clear": [64],
        "add": [64],
        "setFocus": [64],
        "removeFocus": [64]
    }, [[9, "mousedown", "handleWindow"]], {
        "isOpen": ["isOpenChanged"],
        "options": ["optionsChanged"],
        "chips": ["valueChanged"],
        "internalChips": ["internalValueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-select-chips", "bds-avatar", "bds-checkbox", "bds-chip-clickable", "bds-icon", "bds-select-option", "bds-tooltip", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-select-chips":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SelectChips);
            }
            break;
        case "bds-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "bds-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bds-chip-clickable":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-select-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-tooltip":
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

const BdsSelectChips = SelectChips;
const defineCustomElement = defineCustomElement$1;

export { BdsSelectChips, defineCustomElement };
//# sourceMappingURL=bds-select-chips.js.map

//# sourceMappingURL=bds-select-chips.js.map