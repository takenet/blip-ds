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
        return (index.h("div", { key: 'a4167ccf8a074644b3dc13107974763833c53f16', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (index.h("bds-typo", { key: '5f7c3155984755de0d5ed0ebfb6bcb4bd5a9daf7', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { key: '4d4a65c51fb4941db48324d7021e1fc220a81914', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss;

exports.bds_menu_separation = BdsMenuSeparation;
//# sourceMappingURL=bds-menu-separation.entry.cjs.js.map

//# sourceMappingURL=bds-menu-separation.cjs.entry.js.map