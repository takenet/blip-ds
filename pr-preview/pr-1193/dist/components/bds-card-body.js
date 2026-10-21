import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-dCdulcnF.js';

const CardBody = /*@__PURE__*/ proxyCustomElement(class CardBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("bds-grid", { key: 'ba591eb57291b7949f7e0b89fe78007c5379398c' }, h("slot", { key: '59616ae89dd0499425d857ed3545cdf65d9ddbb0' })));
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