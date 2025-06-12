'use strict';

var index = require('./index-DnryYWxm.js');

const menuSeparationCss = ".menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d2dfe6}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}";

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
        return (index.h("div", { key: 'fe675fcaa196eb33238eccd95ea6d3e5c69a8efe', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (index.h("bds-typo", { key: 'a30457355541bd976ff1ac8caf29a3a3c7d97a5b', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { key: '095c3cbf548fbc9688c224a4877dab6579c8e8fb', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss;

exports.bds_menu_separation = BdsMenuSeparation;
//# sourceMappingURL=bds-menu-separation.entry.cjs.js.map

//# sourceMappingURL=bds-menu-separation.cjs.entry.js.map