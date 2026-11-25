'use strict';

var index = require('./index-GTJCA4wH.js');

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
        return (index.h("div", { key: 'a23e3f8a761e69aabd7337a2c75cfb99e77c5445', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (index.h("bds-typo", { key: '730c15c173fa3b06398c35b5e1ef333b665c6289', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { key: '7dd1b2c2b2049089a9079b5a0c0ee91aa90b9dff', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

exports.bds_menu_separation = BdsMenuSeparation;
