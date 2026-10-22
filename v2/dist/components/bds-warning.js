import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-CY2zUmZM.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = /*@__PURE__*/ proxyCustomElement(class Warning extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'dde6714cdd0c497194091cbc73aec4cbd2277ba0' }, h("div", { key: 'f30261a4cb010ba12e3959a05dfd65e33fbbff58', class: "warning__body" }, h("bds-icon", { key: 'c01c4cf23bf0d1d5310087e78b7526ed665e1f3e', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '6986c4a6075226b17e8238c9b2149be062c27e92', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '7b60dc98c4c51b867a49c64f5a187221d049d9f7' })))));
    }
    static get style() { return warningCss; }
}, [1, "bds-warning"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-warning", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-warning":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Warning);
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

const BdsWarning = Warning;
const defineCustomElement = defineCustomElement$1;

export { BdsWarning, defineCustomElement };
//# sourceMappingURL=bds-warning.js.map

//# sourceMappingURL=bds-warning.js.map