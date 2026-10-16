import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-mCuNr11T.js';

const cardFooterCss = ":host{width:100%}";

const CardFooter = /*@__PURE__*/ proxyCustomElement(class CardFooter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'flex-end';
    }
    render() {
        return (h("bds-grid", { key: '4876073805454a16fd854ea5903be4e8592d14d1', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, h("slot", { key: 'dbfd35937fbf0c4b28dec8aab2116cbcc6dbcfaa' })));
    }
    static get style() { return cardFooterCss; }
}, [1, "bds-card-footer", {
        "align": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-card-footer", "bds-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-card-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardFooter);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsCardFooter = CardFooter;
const defineCustomElement = defineCustomElement$1;

export { BdsCardFooter, defineCustomElement };
//# sourceMappingURL=bds-card-footer.js.map

//# sourceMappingURL=bds-card-footer.js.map