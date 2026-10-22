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
        return (h("div", { key: 'ec87d9ac0a21be0c20cd426ade201bf0efbf91ea', class: "alert__body" }, h("bds-typo", { key: '01d58f13f3291a46c97ee61a2ce37dd88adf0140', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'a294e62cceb02fb08fd20a3c5363d7b38d49665e' }))));
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