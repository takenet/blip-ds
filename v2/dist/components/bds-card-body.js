import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-D3lgj3w8.js';

const CardBody = /*@__PURE__*/ proxyCustomElement(class CardBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("bds-grid", { key: '5284beb47609536abf0b0df5345b6aab5b2c33f5' }, h("slot", { key: 'e4fefb35e5f55da8802c2439ef661c68ff64f78d' })));
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