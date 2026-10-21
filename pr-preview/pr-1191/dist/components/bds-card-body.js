import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-Cje8yEpK.js';

const CardBody = /*@__PURE__*/ proxyCustomElement(class CardBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("bds-grid", { key: '3e1a1de6b8f4e7f323c91867666978771d077473' }, h("slot", { key: 'ef21d1953508449360c3283a57b49805207cfef0' })));
    }
}, [1, "bds-card-body"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-card-body", "bds-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-card-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardBody);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsCardBody = CardBody;
const defineCustomElement = defineCustomElement$1;

export { BdsCardBody, defineCustomElement };
//# sourceMappingURL=bds-card-body.js.map

//# sourceMappingURL=bds-card-body.js.map