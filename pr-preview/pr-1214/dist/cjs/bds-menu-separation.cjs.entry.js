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
        return (index.h("div", { key: '539353ca0d27ce0c00b647686cf0b383c4092c12', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (index.h("bds-typo", { key: 'a2a16d54d82a8f16776ad24a7bd4e11b657fe1dc', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { key: 'a318b47b5aee157517aaba224a53c315a8cd2b81', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

exports.bds_menu_separation = BdsMenuSeparation;
