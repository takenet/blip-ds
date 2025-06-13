import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const cardTitleCss = "";

const CardTitle = /*@__PURE__*/ proxyCustomElement(class CardTitle extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("bds-typo", { key: 'f077669a5ed290acef888328dc3308d216906df6', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
    static get style() { return cardTitleCss; }
}, [1, "bds-card-title", {
        "text": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-card-title", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-card-title":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardTitle);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsCardTitle = CardTitle;
const defineCustomElement = defineCustomElement$1;

export { BdsCardTitle, defineCustomElement };
//# sourceMappingURL=bds-card-title.js.map

//# sourceMappingURL=bds-card-title.js.map