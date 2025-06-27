import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const CardSubtitle = /*@__PURE__*/ proxyCustomElement(class CardSubtitle extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("bds-typo", { key: '27b953c62bb282ef0aba9e2434a0a6fb730ebf31', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
}, [1, "bds-card-subtitle", {
        "text": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-card-subtitle", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-card-subtitle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardSubtitle);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsCardSubtitle = CardSubtitle;
const defineCustomElement = defineCustomElement$1;

export { BdsCardSubtitle, defineCustomElement };
//# sourceMappingURL=bds-card-subtitle.js.map

//# sourceMappingURL=bds-card-subtitle.js.map