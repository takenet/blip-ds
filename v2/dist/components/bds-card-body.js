import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-D-hI-6BA.js';

const CardBody = /*@__PURE__*/ proxyCustomElement(class CardBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("bds-grid", { key: '3e5a5b68b3080abde05c8db7ab1fcc6fc4642ba8' }, h("slot", { key: 'a74a06f59f05c2dfb9fc5378ae21190cb97ba2cd' })));
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