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
        return (index.h("div", { key: '6e30cb3714336be0d15609ca982c87a441194037', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (index.h("bds-typo", { key: 'bbbc85912fc5622ccb2ea9047fe4b3692e45ba03', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { key: 'd66f925305cd5ace3e61e6bbdcf8f36786171b10', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

exports.bds_menu_separation = BdsMenuSeparation;
