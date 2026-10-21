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
        return (h("div", { key: 'c69883a2888367226eaf2a0338b3ff4148d78aa1', class: "alert__body" }, h("bds-typo", { key: 'be66fa0eed3e67d0469c3510829c3ca0405ac7eb', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'ce5d1f231538c3eec5d0849468443b31d39b0f30' }))));
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