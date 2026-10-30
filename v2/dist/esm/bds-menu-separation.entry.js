import { r as registerInstance, h } from './index-CkbvGS8Z.js';

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
        return (h("div", { key: 'd86a5dd8417b73c774481d60624172e01c68ac8c', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '54f7d72e4d8ec1c0bcb660c116ebb636cc7436c1', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '201d09434300dc19ed5f57724b20f9c2ff01d923', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

export { BdsMenuSeparation as bds_menu_separation };
