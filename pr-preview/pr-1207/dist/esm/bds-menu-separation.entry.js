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
        return (h("div", { key: '93975a74f7cfc328012cd61472ff3f213b209aa8', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '187e00696c159839b1a86775137ed0cd3366507f', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '192c717df543bebe38cdc700553961e7eae98091', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

export { BdsMenuSeparation as bds_menu_separation };
