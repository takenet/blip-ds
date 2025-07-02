import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-CGgHblXS.js';

const cardHeaderCss = ":host{width:100%}";

const CardHeader = /*@__PURE__*/ proxyCustomElement(class CardHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'space-between';
    }
    render() {
        return (h("bds-grid", { key: '50c941f132a8fc8cbd9c4b1706a0d0c2118e7e50', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", { key: 'd26ee87e1486b99797b8c5f9cee44661b7c046f5' })));
    }
    static get style() { return cardHeaderCss; }
}, [1, "bds-card-header", {
        "align": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-card-header", "bds-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-card-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardHeader);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsCardHeader = CardHeader;
const defineCustomElement = defineCustomElement$1;

export { BdsCardHeader, defineCustomElement };
//# sourceMappingURL=bds-card-header.js.map

//# sourceMappingURL=bds-card-header.js.map