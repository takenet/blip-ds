'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6fd1fd651bf6355d45bd787c4f26b2ded4f19c32' }, index.h("div", { key: 'afc5ee22d7f954fce1a0e4763931a175c3a905cf', class: "header" }, index.h("slot", { key: 'eec81d1f7e6c56f51701634359fd339f3c07d22a' })), index.h("bds-typo", { key: 'b999f7fa48ef6d30b6465139e23a014c11264b94', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
