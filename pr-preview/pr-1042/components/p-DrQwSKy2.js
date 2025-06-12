import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { d as defineCustomElement$2 } from './p-3JBO9P5_.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const checkboxCss = ".checkbox{display:inline}.checkbox input[type=checkbox]{display:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;cursor:pointer;margin:0}.checkbox input[type=checkbox]:focus{outline:0}.checkbox__icon{position:relative}.checkbox__icon::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.checkbox__icon:focus-visible{outline:none}.checkbox__icon:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.checkbox__icon:hover{border-color:var(--color-brand, rgb(0, 150, 250))}.checkbox--selected .checkbox__icon{background-color:var(--color-surface-primary, rgb(30, 107, 241));border-color:var(--color-surface-primary, rgb(30, 107, 241))}.checkbox--selected .checkbox__icon__svg{color:var(--color-content-bright, rgb(255, 255, 255))}.checkbox--selected .checkbox__icon:hover{background-color:var(--color-brand, rgb(0, 150, 250))}.checkbox--selected-disabled .checkbox__label{cursor:not-allowed}.checkbox--selected-disabled .checkbox__icon{color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-content-default, rgb(40, 40, 40));background-color:var(--color-surface-3, rgb(227, 227, 227));opacity:50%}.checkbox--selected-disabled .checkbox__text{opacity:50%}.checkbox--deselected .checkbox__icon__svg{display:none}.checkbox--deselected-disabled .checkbox__label{cursor:not-allowed}.checkbox--deselected-disabled .checkbox__icon{opacity:50%;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-brand, rgb(0, 150, 250))}.checkbox--deselected-disabled .checkbox__icon__svg{display:none}.checkbox__label{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.checkbox__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:18px;width:18px;min-width:18px;border-radius:4px;color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-content-default, rgb(40, 40, 40));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s}.checkbox__text{margin-left:8px;color:var(--color-content-default, rgb(40, 40, 40))}";

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
         * If `true`, the user cannot interact with the checkbox.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onClick = (ev) => {
            ev.stopPropagation();
            this.checked = !this.checked;
            this.bdsChange.emit({
                checked: this.checked,
            });
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
        this.getStyleState = () => {
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
        this.checked = !this.checked;
        this.bdsChange.emit({
            checked: this.checked,
        });
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.checked = !this.checked;
            this.bdsChange.emit({
                checked: this.checked,
            });
        }
    }
    render() {
        const styleState = this.getStyleState();
        return (h("div", { key: '3e2634c267a2e622e34a15bdcf023db081384115', class: {
                checkbox: true,
                [styleState]: true,
            } }, h("input", { key: '6227ef611ba1b5f8d8c635365b1876d934faf025', type: "checkbox", ref: this.refNativeInput, id: this.checkBoxId, name: this.name, onClick: (ev) => this.onClick(ev), checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("label", { key: 'ac1b5f063f28d5da87436bb634fb27c8be02b182', class: "checkbox__label", htmlFor: this.checkBoxId }, h("div", { key: '5e0478de84303efb93c89d8226533a9fe44c5e58', class: "checkbox__icon", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("bds-icon", { key: 'd1392bf0eb54aa52178c1008d9970d64f94a0620', class: "checkbox__icon__svg", size: "x-small", name: "true", color: "inherit" })), this.label && (h("bds-typo", { key: '65590ee0f46a53272848e6fbf7f6b7963c37994b', class: "checkbox__text", variant: "fs-14", tag: "span" }, this.label)))));
    }
    static get style() { return checkboxCss; }
}, [1, "bds-checkbox", {
        "refer": [1],
        "label": [1],
        "name": [1],
        "checked": [1540],
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
//# sourceMappingURL=p-DrQwSKy2.js.map

//# sourceMappingURL=p-DrQwSKy2.js.map