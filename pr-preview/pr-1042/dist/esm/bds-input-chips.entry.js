import { r as registerInstance, c as createEvent, h, H as Host } from './index-C3J6Z5OX.js';
import { w as whitespaceValidation, e as emailValidation } from './validations-BXYXNVip.js';

const inputChipsCss = ":host{display:display}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:6px;min-height:24px;max-width:100%;overflow-y:auto;overflow-x:hidden;word-break:break-word;}.input__container__wrapper::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;min-width:80px;max-width:100%;-ms-flex:1;flex:1;border:none;outline:none;background:transparent;resize:none;cursor:inherit;overflow:hidden;}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, rgb(89, 89, 89));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}";

const InputChips = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsChange = createEvent(this, "bdsChange");
        this.bdsChangeChips = createEvent(this, "bdsChangeChips");
        this.bdsInputChipsFocus = createEvent(this, "bdsInputChipsFocus");
        this.bdsBlur = createEvent(this, "bdsBlur");
        this.bdsInputChipsInput = createEvent(this, "bdsInputChipsInput");
        this.bdsExtendedQuantityInput = createEvent(this, "bdsExtendedQuantityInput");
        this.bdsSubmit = createEvent(this, "bdsSubmit");
        this.InputSize = null;
        /**
         * Used to set the danger behavior by the internal validators
         */
        this.validationDanger = false;
        /**
         * Used to enable or disable input
         */
        this.inputAvalible = true;
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
         * When true, the press enter will be simulated on blur event.
         */
        this.blurCreation = false;
        /**
         * Defining the type is important so that it is possible to carry out validations. Can be one of:
         * 'text' and 'email;
         */
        this.type = 'text';
        /**
         *  label in input, with he the input size increases.
         */
        this.label = '';
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = '';
        /**
         * The delimiter is used to add multiple chips in the same string.
         */
        this.delimiters = /,|;/;
        /**
         * Indicated to pass an feedback to user.
         */
        this.errorMessage = '';
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * The value of the input.
         */
        this.value = '';
        /**
         * Do not accept duplicate chip elements.
         */
        this.duplicated = false;
        /**
         * If `true`, the user cannot modify the value.
         */
        this.disableSubmit = false;
        /**
         * Disabled input
         */
        this.disabled = false;
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
         * Passing true to display a counter of available size, it is necessary to
         * pass another maxlength property.
         */
        this.counterLength = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.onFocus = () => {
            this.bdsInputChipsFocus.emit();
            this.isPressed = true;
        };
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.bdsInputChipsInput.emit(ev);
        };
        this.keyPressWrapper = (event) => {
            switch (event.key) {
                case 'Enter':
                    this.handleDelimiters();
                    this.setChip(this.value);
                    this.value = '';
                    this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
                    this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
                    break;
                case 'Backspace':
                case 'Delete':
                    if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
                        this.removeLastChip();
                        this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
                        this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
                    }
                    break;
            }
        };
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
        this.minMaxValidation();
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
    async get() {
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
    componentDidLoad() {
        this.minMaxValidation();
    }
    componentWillLoad() {
        this.valueChanged();
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
        this.bdsBlur.emit(this.internalChips);
        if (this.internalChips.length > 0) {
            this.bdsSubmit.emit({ value: this.internalChips });
        }
        this.handleDelimiters();
        this.isPressed = false;
        if (this.blurCreation) {
            this.setChip(this.value);
            this.value = '';
        }
    }
    minMaxValidation() {
        if (!this.maxChipsLength == undefined) {
            this.inputAvalible = true;
        }
        else if (this.internalChips.length >= this.maxChipsLength) {
            this.inputAvalible = false;
            this.bdsExtendedQuantityInput.emit({ value: !this.inputAvalible });
        }
        else {
            this.inputAvalible = true;
        }
    }
    getLastChip() {
        return this.internalChips[this.internalChips.length - 1];
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
            this.setChip(word);
        });
        this.clearInputValues();
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
    async handleChange(event) {
        const { detail: { value }, } = event;
        // console.log('TRACE [input-chips] handleChange 1:', { value });
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
        this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
        this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
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
        this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
        this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
    }
    renderChips() {
        if (!this.internalChips.length) {
            return [];
        }
        return this.internalChips.map((chip, index) => {
            const id = index.toString();
            // Reduce the limit to prevent chips from being too wide and causing scroll issues
            const limit = 20;
            if (chip.length <= limit) {
                return (h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event), dtButtonClose: this.dtButtonClose }, chip));
            }
            else {
                return (h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event), dtButtonClose: this.dtButtonClose }, `${chip.slice(0, limit)}...`)));
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
    render() {
        const isPressed = this.isPressed && !this.disabled;
        // Set default maxHeight if not provided to prevent UI breaking
        const defaultMaxHeight = this.maxHeight || '80px';
        return (h(Host, { key: '2699f5e35e6d903fe4c86a4cb62dbde5e093299b', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: '9afabf64ca5593c205c3acea26174183f36d38cc', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("div", { key: 'c672e4f459d650335a60e86ff61835d49e56bc05', class: "input__container" }, this.renderLabel(), h("div", { key: '2bff80c5759f20366b6b0e1d3ffefb3fefae6446', class: "input__container__wrapper", style: { maxHeight: defaultMaxHeight } }, this.internalChips.length > 0 && this.renderChips(), this.inputAvalible && (h("input", { key: '6a50922426e8abffc74e1e732291d1164f2e9baa', ref: (input) => (this.nativeInput = input), class: "input__container__text", name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest })))), this.counterLength && (h("bds-counter-text", { key: '350f2ca1c120874a03b8adb4afa42fdb85deb956', length: this.internalChips.length, max: this.maxChipsLength, active: isPressed })), this.success && h("bds-icon", { key: 'ff293f70d43755dca4be9d3eeb4cad00cd09b4a2', class: "icon-success", name: "checkb", theme: "outline", size: "xxx-small" }), h("slot", { key: '661c949f8fe2a4cea1e95ec9bcac04fbcc20edf9', name: "input-right" })), this.renderMessage()));
    }
    static get watchers() { return {
        "chips": ["valueChanged"],
        "internalChips": ["internalValueChanged"]
    }; }
};
InputChips.style = inputChipsCss;

export { InputChips as bds_input_chips };
//# sourceMappingURL=bds-input-chips.entry.js.map

//# sourceMappingURL=bds-input-chips.entry.js.map