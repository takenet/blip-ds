'use strict';

var index = require('./index-GTJCA4wH.js');

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list ${index.transformTag("bds-menu-list-item")}+${index.transformTag("bds-menu-list-item")}{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9c5faa6ffb5669099459ec58b27bcb58dccb3293' }, index.h("div", { key: '72aff36835b42f65cff4df05cceb4639271934a5', class: "menu-list" }, index.h("div", { key: '94a59c004e32d45cac0fc32b1ed872f73b2bf8ea', class: "menu-list__left" }), index.h("slot", { key: '6412b6feefac9e5d3feec098aab12bfd00e107f3' }), index.h("div", { key: '916a9e306043e40f354f0fc6e848cc6fd13ff6e7', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

exports.bds_menu_list = MenuList;
