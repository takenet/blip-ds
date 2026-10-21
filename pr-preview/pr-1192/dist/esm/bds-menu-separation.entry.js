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
        return (h("div", { key: '0e7bda8db57318475774f723843663d9a017fbbf', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: 'cade464c87b02e8d96fff6af672603b7a0a27848', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: 'd211895a89613aec470b5c231dbf03239d5869da', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss;

export { BdsMenuSeparation as bds_menu_separation };
//# sourceMappingURL=bds-menu-separation.entry.js.map

//# sourceMappingURL=bds-menu-separation.entry.js.map