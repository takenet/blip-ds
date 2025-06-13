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
        return (h("div", { key: 'a8f2cb2ce3df5d47b65e217f6ae060e0dbe25b41', class: "alert__body" }, h("bds-typo", { key: 'a4f995d19af8f1a949ea6a674a08b22b688d778d', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'a8d28b830f5a327d37556f5083ca627aa3ae07d1' }))));
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