import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { d as defineCustomElement$2 } from './p-DyA5lKp_.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const checkboxCss = ".checkbox{display:inline}.checkbox input[type=checkbox]{display:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;cursor:pointer;margin:0}.checkbox input[type=checkbox]:focus{outline:0}.checkbox__icon{position:relative}.checkbox__icon::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.checkbox__icon:focus-visible{outline:none}.checkbox__icon:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.checkbox__icon:hover{border-color:var(--color-brand, rgb(0, 150, 250))}.checkbox--selected .checkbox__icon{background-color:var(--color-surface-primary, rgb(30, 107, 241));border-color:var(--color-surface-primary, rgb(30, 107, 241))}.checkbox--selected .checkbox__icon__svg{color:var(--color-content-bright, rgb(255, 255, 255))}.checkbox--selected .checkbox__icon:hover{background-color:var(--color-brand, rgb(0, 150, 250))}.checkbox--selected-disabled .checkbox__label{cursor:not-allowed}.checkbox--selected-disabled .checkbox__icon{color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-content-default, rgb(40, 40, 40));background-color:var(--color-surface-3, rgb(227, 227, 227));opacity:50%}.checkbox--selected-disabled .checkbox__text{opacity:50%}.checkbox--deselected .checkbox__icon__svg{display:none}.checkbox--indeterminate .checkbox__icon{background-color:var(--color-surface-primary, rgb(30, 107, 241));border-color:var(--color-surface-primary, rgb(30, 107, 241))}.checkbox--indeterminate .checkbox__icon__svg{color:var(--color-content-bright, rgb(255, 255, 255))}.checkbox--indeterminate .checkbox__icon:hover{background-color:var(--color-brand, rgb(0, 150, 250))}.checkbox--indeterminate-disabled .checkbox__label{cursor:not-allowed}.checkbox--indeterminate-disabled .checkbox__icon{color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-content-default, rgb(40, 40, 40));background-color:var(--color-surface-3, rgb(227, 227, 227));opacity:50%}.checkbox--indeterminate-disabled .checkbox__text{opacity:50%}.checkbox--deselected-disabled .checkbox__label{cursor:not-allowed}.checkbox--deselected-disabled .checkbox__icon{opacity:50%;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-brand, rgb(0, 150, 250))}.checkbox--deselected-disabled .checkbox__icon__svg{display:none}.checkbox__label{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.checkbox__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:18px;width:18px;min-width:18px;border-radius:4px;color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-content-default, rgb(40, 40, 40));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s}.checkbox__text{margin-left:8px;color:var(--color-content-default, rgb(40, 40, 40))}";

let checkBoxIds = 0;
const Checkbox = /*@__PURE__*/ proxyCustomElement(class Checkbox extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsChange = createEvent(this, "bdsChange");
        this.bdsInput = createEvent(this, "bdsInput");
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * If `true`, the checkbox is in an indeterminate state.
         * This is used when the checkbox is a parent of a list of checkboxes
         * and some (but not all) of the child checkboxes are selected.
         * Clicking when indeterminate will set the checkbox to checked.
         */
        this.indeterminate = false;
        /**
         * If `true`, the user cannot interact with the checkbox.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onClick = (ev) => {
            ev.stopPropagation();
            // When clicking from indeterminate state, set to checked
            if (this.indeterminate) {
                this.indeterminate = false;
                this.checked = true;
            }
            else {
                this.checked = !this.checked;
            }
            this.bdsChange.emit({
                checked: this.checked,
                indeterminate: this.indeterminate,
            });
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
        this.getStyleState = () => {
            if (this.indeterminate && !this.disabled) {
                return 'checkbox--indeterminate';
            }
            if (this.indeterminate && this.disabled) {
                return 'checkbox--indeterminate-disabled';
            }
            if (this.checked && !this.disabled) {
                return 'checkbox--selected';
            }
            if (!this.checked && !this.disabled) {
                return 'checkbox--deselected';
            }
            if (this.checked && this.disabled) {
                return 'checkbox--selected-disabled';
            }
            if (!this.checked && this.disabled) {
                return 'checkbox--deselected-disabled';
            }
            return '';
        };
        this.getIconName = () => {
            return this.indeterminate ? 'less' : 'true';
        };
    }
    connectedCallback() {
        this.checkBoxId = this.refer || `bds-checkbox-${checkBoxIds++}`;
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return Promise.resolve(this.nativeInput.checked);
    }
    async toggle() {
        // When toggling from indeterminate, always set to checked
        if (this.indeterminate) {
            this.indeterminate = false;
            this.checked = true;
        }
        else {
            this.checked = !this.checked;
        }
        this.bdsChange.emit({
            checked: this.checked,
            indeterminate: this.indeterminate,
        });
    }
    handleKeyDown(event) {
        if (this.disabled) {
            return;
        }
        if (event.key === 'Enter') {
            // When pressing Enter from indeterminate state, set to checked
            if (this.indeterminate) {
                this.indeterminate = false;
                this.checked = true;
            }
            else {
                this.checked = !this.checked;
            }
            this.bdsChange.emit({
                checked: this.checked,
                indeterminate: this.indeterminate,
            });
        }
    }
    render() {
        const styleState = this.getStyleState();
        return (h("div", { key: 'b5eff7f49c1731925a8fd8840bed0ed79ca0c6e2', class: {
                checkbox: true,
                [styleState]: true,
            } }, h("input", { key: '33365b32e365f46dd274451d24fb5aa9ecdb8300', type: "checkbox", ref: this.refNativeInput, id: this.checkBoxId, name: this.name, onClick: (ev) => this.onClick(ev), checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("label", { key: 'b51d9e4a6e1a44a8c12c0e39223853b4ae6828b8', class: "checkbox__label", htmlFor: this.checkBoxId }, h("div", { key: '2befd42167012186594b2bd2cb637089d939b0fc', class: "checkbox__icon", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("bds-icon", { key: '55ec34ab2856a8d794fbc1fa17668dfd8fecfd85', class: "checkbox__icon__svg", size: "x-small", name: this.getIconName(), color: "inherit" })), this.label && (h("bds-typo", { key: 'f7190532c58a01e9261b97dc68d98dbcb7d6f0d8', class: "checkbox__text", variant: "fs-14", tag: "span" }, this.label)))));
    }
    static get style() { return checkboxCss; }
}, [1, "bds-checkbox", {
        "refer": [1],
        "label": [1],
        "name": [1],
        "checked": [1540],
        "indeterminate": [1540],
        "disabled": [4],
        "dataTest": [1, "data-test"],
        "checkBoxId": [32],
        "getInputElement": [64],
        "getValue": [64],
        "toggle": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-checkbox", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Checkbox);
            }
            break;
        case "bds-icon":
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

export { Checkbox as C, defineCustomElement as d };
//# sourceMappingURL=p-YjI9YeeK.js.map

//# sourceMappingURL=p-YjI9YeeK.js.map