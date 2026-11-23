'use strict';

var index = require('./index-GTJCA4wH.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '51a789fb7bf354ebad421ea99aa6e44935ea2afc' }, index.h("div", { key: '3f3262e36cfeb9c52721b0c2be77b767b6aab648', class: "warning__body" }, index.h("bds-icon", { key: '601f3d2d091a9eef8369334dc2bc317dc4d185ec', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '9e628d1ba8f751a870aff650bc8c9b0c289ff630', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '704e82126a79a6407f3b878c9dcddbf7120ab191' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
