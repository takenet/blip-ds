import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const radioCss = ":host{display:-ms-flexbox;display:flex}.radio{display:-ms-flexbox;display:flex;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.radio [type=radio]{display:none}.radio [type=radio]:focus{outline:0}.radio__circle{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px;-ms-flex-negative:0;flex-shrink:0;border:2px solid var(--color-content-default, rgb(40, 40, 40));padding:4px;border-radius:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;position:relative}.radio__circle__pointer{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;border-radius:100%;background:transparent;height:10px;width:10px}.radio__circle .hover{width:0;height:0;opacity:0}.radio__circle .focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;padding:4px;width:100%;height:100%;outline:none}.radio:hover{border-color:var(--color-content-disable, rgb(89, 89, 89))}.radio:hover .hover{display:-ms-flexbox;display:flex;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));position:absolute;width:36px;height:36px;opacity:1;border-radius:24px;-webkit-transition:width 0.2s, height 0.2s;transition:width 0.2s, height 0.2s}.radio__text{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;padding-left:8px;color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:checked~.radio__circle{background:transparent;border-color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:checked~.radio__circle .radio__circle__pointer{background-color:var(--color-primary, rgb(30, 107, 241))}.radio__input[type=radio]:checked~.radio__circle:hover{border-color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:checked~.radio__circle:hover .radio__circle__pointer{background-color:var(--color-primary, rgb(30, 107, 241))}.radio__input[type=radio]:disabled~.radio__circle{border-color:var(--color-content-disable, rgb(89, 89, 89));background-color:var(--color-surface-3, rgb(227, 227, 227))}.radio__input[type=radio]:disabled~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:hover~.radio__circle{border-color:var(--color-content-disable, rgb(89, 89, 89));background-color:var(--color-surface-3, rgb(227, 227, 227))}.radio__input[type=radio]:disabled:hover~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:checked~.radio__circle{border-color:var(--color-content-disable, rgb(89, 89, 89));background-color:var(--color-surface-3, rgb(227, 227, 227))}.radio__input[type=radio]:disabled:checked~.radio__circle .radio__circle__pointer{background-color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:disabled:checked:hover~.radio__circle{border-color:var(--color-content-disable, rgb(89, 89, 89));background-color:var(--color-surface-3, rgb(227, 227, 227))}.radio__input[type=radio]:disabled:checked:hover~.radio__circle .radio__circle__pointer{background-color:var(--color-content-default, rgb(40, 40, 40))}.radio__input[type=radio]:disabled~.radio__text{color:var(--color-content-disable, rgb(89, 89, 89));cursor:not-allowed}.radio__input[type=radio]:disabled~.radio__circle{cursor:not-allowed}";

let radioButtonIds = 0;
const Radio = /*@__PURE__*/ proxyCustomElement(class Radio extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsChange = createEvent(this, "bdsChange");
        this.bdsClickChange = createEvent(this, "bdsClickChange");
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
        this.onClick = (event) => {
            this.checked = true;
            this.bdsClickChange.emit({ checked: this.checked });
            event.stopPropagation();
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
    }
    checkedChanged(isChecked) {
        this.bdsChange.emit({ checked: isChecked });
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return Promise.resolve(this.nativeInput.checked);
    }
    connectedCallback() {
        this.radioId = this.refer || `bds-radio-${radioButtonIds++}`;
    }
    handleClickKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            this.onClick(event);
            event.preventDefault();
            this.bdsClickChange.emit({ checked: this.checked });
        }
    }
    render() {
        return (h(Host, { key: 'a048587290fa2514c4589be35e04c87f4c7d3593' }, h("label", { key: 'a461c94d4f8bd6b14620dd976084395ff283f4ad', class: "radio", htmlFor: this.radioId }, h("input", { key: '448154449b72b8e882e79b44a86b616ff850d5d9', class: "radio__input", type: "radio", ref: this.refNativeInput, id: this.radioId, onClick: this.onClick, disabled: this.disabled, checked: this.checked, value: this.value, name: this.name, "data-test": this.dataTest }), h("div", { key: 'f208936bfdd174146a16844549239af92568b358', class: "radio__circle" }, !this.disabled ? h("div", { class: "focus", tabindex: "0", onKeyDown: this.handleClickKey.bind(this) }) : '', !this.disabled ? h("div", { class: "hover" }) : '', h("div", { key: '3562185845c35a4af93b85f385784c481e06f3f0', class: "radio__circle__pointer" })), this.label && (h("bds-typo", { key: 'e279e4ce989eb9681ffcb3b730432fda3ab1d7ed', class: "radio__text", variant: "fs-14", bold: this.checked ? 'bold' : 'regular', tag: "span" }, this.label)), h("slot", { key: '52083c8e232b7ad8bd73d21b11c2221539e8821a' }))));
    }
    static get watchers() { return {
        "checked": ["checkedChanged"]
    }; }
    static get style() { return radioCss; }
}, [1, "bds-radio", {
        "refer": [1],
        "label": [1],
        "value": [1],
        "name": [1],
        "checked": [1540],
        "disabled": [4],
        "dataTest": [1, "data-test"],
        "radioId": [32],
        "getInputElement": [64],
        "getValue": [64]
    }, undefined, {
        "checked": ["checkedChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-radio", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Radio);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Radio as R, defineCustomElement as d };
//# sourceMappingURL=p-CRcvbDav.js.map

//# sourceMappingURL=p-CRcvbDav.js.map