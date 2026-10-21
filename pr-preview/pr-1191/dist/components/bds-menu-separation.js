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
        return (h("div", { key: '8f5ce81dd2c14a221d98b1be4e1755ce48356c50', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '56b1d54b2cba2d88eb8df84b564cec096a13045e', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '0310e56d2ee1fb657013cb39113c7ed5fbf0b0c5', class: "dividor-item" })));
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