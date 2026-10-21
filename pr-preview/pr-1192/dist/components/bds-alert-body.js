import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const alertBodyCss = ".alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}";

const AlertBody = /*@__PURE__*/ proxyCustomElement(class AlertBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'ff7a3036059d041c77c79a856bee1b846d878635', class: "alert__body" }, h("bds-typo", { key: 'cacb3dbb5d74c1600f5b1df30a54643e15ced6f9', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '75417badf23c0feb5d0d99facf3f9d5c0b8d862f' }))));
    }
    static get style() { return alertBodyCss; }
}, [1, "bds-alert-body"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-alert-body", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-alert-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AlertBody);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsAlertBody = AlertBody;
const defineCustomElement = defineCustomElement$1;

export { BdsAlertBody, defineCustomElement };
//# sourceMappingURL=bds-alert-body.js.map

//# sourceMappingURL=bds-alert-body.js.map