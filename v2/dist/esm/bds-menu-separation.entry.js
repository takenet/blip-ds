import { r as registerInstance, h } from './index-gowA9FoV.js';

const menuSeparationCss = ".menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d4d4d4}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}";

const BdsMenuSeparation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: 'f4fff50ac46642cbdfc726e45cd347ab2c0d8b06', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: 'be8ab3576542690b6801fc78d1e0b9b6b47f4fa5', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '1810f7cbf1f477339fa545c1159d2572d9a14dc9', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss;

export { BdsMenuSeparation as bds_menu_separation };
//# sourceMappingURL=bds-menu-separation.entry.js.map

//# sourceMappingURL=bds-menu-separation.entry.js.map