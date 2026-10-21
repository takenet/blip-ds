'use strict';

var index = require('./index-DQyYkciT.js');

const menuSeparationCss = ".menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d4d4d4}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}";

const BdsMenuSeparation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '23e291a705c386b56d9a9c9658dd90d3f192a13a', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (index.h("bds-typo", { key: '0ab359fad2e559b46aa4c5a233ddb2edac53cf0f', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { key: '66066ac92ba3bfcd802704a0f49e970e68ed5a07', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss;

exports.bds_menu_separation = BdsMenuSeparation;
//# sourceMappingURL=bds-menu-separation.entry.cjs.js.map

//# sourceMappingURL=bds-menu-separation.cjs.entry.js.map