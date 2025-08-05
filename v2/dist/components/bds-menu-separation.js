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
        return (h("div", { key: '3aabfb5b93571fc6cffded9393e2ed6f0088e6f5', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '3b418384cac21264f22c04a53eef008a55c13f74', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '746b0b0b51a9ffad2ef749b33e61c21b43a711be', class: "dividor-item" })));
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