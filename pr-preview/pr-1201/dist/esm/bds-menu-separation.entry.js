import { r as registerInstance, h } from './index-BnSR_zce.js';

const menuSeparationCss = () => `.menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d4d4d4}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}`;

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
        return (h("div", { key: '15a7be66f3884bc4964362ec4306ecf89a88f009', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '72f39e9be5794952a2127bf51ec388a1c74c6358', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: 'c031de68a6148c9dea3c6ab852bfeeeabcf8cd6f', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

export { BdsMenuSeparation as bds_menu_separation };
