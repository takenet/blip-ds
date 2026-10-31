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
        return (index.h("div", { key: '64918b3b2574813d901fbb5a75e075be5f6b82d6', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (index.h("bds-typo", { key: '78193133c438403308d5a037d2a843ab059f78a7', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { key: '689258645f3858eb862e9e8f2cecbcb2e940f559', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

exports.bds_menu_separation = BdsMenuSeparation;
