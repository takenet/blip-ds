import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-mCuNr11T.js';

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
        return (h("bds-grid", { key: '35e82fd0bef4b8b877ba5872e4e67fe488f361ea', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", { key: '23dccd08124c47a7dc509aaf5c6259fd2addac48' })));
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