'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a4069d64a1c2671cf23db64d8cb663080281d075' }, index.h("div", { key: 'b8edb03eb63ba1dd0e8131e035e31cb22a45ea84', class: "header" }, index.h("slot", { key: '3261776e5eafe43976b765e62b1dea66a213d7fb' })), index.h("bds-typo", { key: 'dec84da104c459459f3410f0bb2ae3588a5ec626', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
