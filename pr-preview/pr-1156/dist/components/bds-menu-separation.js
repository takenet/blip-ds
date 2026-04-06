import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const menuSeparationCss = ".menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d4d4d4}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}";

const BdsMenuSeparation$1 = /*@__PURE__*/ proxyCustomElement(class BdsMenuSeparation extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Value. Used to insert a title to the divider.
         */
        this.value = null;
        /**
         * Size. Used to set the size of the divider.
         */
        this.size = null;
    }
    render() {
        return (h("div", { key: '2378dc3b13c65f27d8ac5dafa55dcc3cb0c2545f', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '0dff1922f705213ac3430d113e271bd804e66454', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '898a5332dd40e197973e8cf9bdf3610cb50dbd97', class: "dividor-item" })));
    }
    static get style() { return menuSeparationCss; }
}, [1, "bds-menu-separation", {
        "value": [1],
        "size": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-menu-separation", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-menu-separation":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsMenuSeparation$1);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsMenuSeparation = BdsMenuSeparation$1;
const defineCustomElement = defineCustomElement$1;

export { BdsMenuSeparation, defineCustomElement };
//# sourceMappingURL=bds-menu-separation.js.map

//# sourceMappingURL=bds-menu-separation.js.map