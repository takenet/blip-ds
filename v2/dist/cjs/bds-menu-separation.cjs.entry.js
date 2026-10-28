'use strict';

var index = require('./index-BuAR9UTp.js');

const menuSeparationCss = () => `.menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d4d4d4}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}`;

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
        return (index.h("div", { key: 'e7b5390abcd7bbbb4e943a1aae726185f00427b1', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (index.h("bds-typo", { key: '7ddc99ba1b1729591c6f7111e6d7d2f489b404fc', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { key: '32f2561201f2af66a54284cccfa614a7d19d20db', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

exports.bds_menu_separation = BdsMenuSeparation;
