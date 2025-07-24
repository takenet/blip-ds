import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const switchCss = ".switch{position:relative;display:inline-block}.switch--size-tall{width:56px;height:32px}.switch--size-standard{width:42px;height:24px}.switch--size-short{width:32px;height:18px}.switch .focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}.switch input{opacity:100;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--color-content-ghost, rgb(140, 140, 140));-webkit-transition:0.4s;transition:0.4s;border-radius:34px}.slider--size-tall::before{position:absolute;content:\" \";left:4px;bottom:4px;top:4px;background-color:var(--color-content-bright, rgb(255, 255, 255));-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:24px;height:24px}.slider--size-standard::before{position:absolute;content:\" \";left:3px;bottom:3px;top:3px;background-color:var(--color-content-bright, rgb(255, 255, 255));-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:18px;height:18px}.slider--size-short::before{position:absolute;content:\" \";left:2.25px;bottom:2.25px;top:2.25px;background-color:var(--color-content-bright, rgb(255, 255, 255));-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:13.5px;height:13.5px}.slider--deselected-disabled{cursor:not-allowed;background-color:var(--color-content-ghost, rgb(140, 140, 140));opacity:0.5}input:checked+.slider{background-color:var(--color-surface-primary, rgb(30, 107, 241))}input:checked+.slider--selected-disabled{cursor:not-allowed;opacity:0.5}input:focus+.slider{-webkit-box-shadow:0 0 1px #3f7de8;box-shadow:0 0 1px #3f7de8}input:focus+.slider--selected-disabled{-webkit-box-shadow:0 0 1px #b9cbd3;box-shadow:0 0 1px #b9cbd3}input:focus+.slider--deselected-disabled{-webkit-box-shadow:0 0 1px #d4d4d4;box-shadow:0 0 1px #d4d4d4}input:checked+.slider--size-tall::before{-webkit-transform:translateX(24px);-ms-transform:translateX(24px);transform:translateX(24px)}input:checked+.slider--size-standard::before{-webkit-transform:translateX(18px);-ms-transform:translateX(18px);transform:translateX(18px)}input:checked+.slider--size-short::before{-webkit-transform:translateX(13.75px);-ms-transform:translateX(13.75px);transform:translateX(13.75px)}";

let switchIds = 0;
const Switch = /*@__PURE__*/ proxyCustomElement(class Switch extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsChange = createEvent(this, "bdsChange");
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'standard';
        /**
         * If `true`, the switch is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the switch.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onClick = () => {
            this.checked = !this.checked;
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
        this.getStyleState = () => {
            if (this.checked && !this.disabled) {
                return 'slider--selected';
            }
            if (!this.checked && !this.disabled) {
                return 'slider--deselected';
            }
            if (this.checked && this.disabled) {
                return 'slider--selected-disabled';
            }
            if (!this.checked && this.disabled) {
                return 'slider--deselected-disabled';
            }
            return '';
        };
        this.handleClick = (ev) => {
            if (!this.disabled) {
                if (ev.key === 'Enter') {
                    this.checked = !this.checked;
                }
            }
        };
    }
    connectedCallback() {
        this.switchId = this.refer || `bds-switch-${switchIds++}`;
    }
    checkedChanged(isChecked) {
        this.bdsChange.emit({
            checked: isChecked,
        });
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return Promise.resolve(this.nativeInput.checked);
    }
    getSizeClass() {
        return `switch switch--size-${this.size} `;
    }
    getSizeSliderClass() {
        return `slider slider--size-${this.size} round `;
    }
    render() {
        const sizeClass = this.getSizeClass();
        const sizeSliderClass = this.getSizeSliderClass();
        const styleState = this.getStyleState();
        return (h("label", { key: '6c2d1400f2aaa9e0d53a7f22fa60b5b79da6d518', class: { [sizeClass]: true } }, h("div", { key: 'e58db196c48ee8811e4da69687b4f5abbf7e313d', tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), h("input", { key: 'fa23d2d9fdef2b44053fac5b8e9e129028750298', type: "checkbox", ref: this.refNativeInput, id: this.switchId, name: this.name, onClick: this.onClick, checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("span", { key: 'efd3f3e4efb1f22366cc4b088bf6de0a2d3dc5f1', class: { [sizeSliderClass]: true, [styleState]: true } })));
    }
    static get watchers() { return {
        "checked": ["checkedChanged"]
    }; }
    static get style() { return switchCss; }
}, [1, "bds-switch", {
        "refer": [1],
        "size": [1],
        "name": [1],
        "checked": [1540],
        "disabled": [4],
        "dataTest": [1, "data-test"],
        "switchId": [32],
        "getInputElement": [64],
        "getValue": [64]
    }, undefined, {
        "checked": ["checkedChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-switch"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-switch":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Switch);
            }
            break;
    } });
}

export { Switch as S, defineCustomElement as d };
//# sourceMappingURL=p-CRfgrqCd.js.map

//# sourceMappingURL=p-CRfgrqCd.js.map