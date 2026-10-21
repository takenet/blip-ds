import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-BpDAPE4n.js';

const CardBody = /*@__PURE__*/ proxyCustomElement(class CardBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("bds-grid", { key: 'e3f2c8f945613baa8f81b7ed436e546bec42d9bf' }, h("slot", { key: 'e611572ae1e3ffa7d046dea3018380e95782a649' })));
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