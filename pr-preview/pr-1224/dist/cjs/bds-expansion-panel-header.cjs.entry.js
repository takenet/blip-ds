'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0c5ca8ca3d841e17af2e38617d59ab088ae6d130' }, index.h("div", { key: '2f1bd7fb5529e7eaa4b72fb8729cf68d84761fd7', class: "header" }, index.h("slot", { key: 'ca9b3ab48b64a69a936b91dbbde74115a9bc554d' })), index.h("bds-typo", { key: '59f4542dc242238e92276120ab6109e2be6c019e', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
