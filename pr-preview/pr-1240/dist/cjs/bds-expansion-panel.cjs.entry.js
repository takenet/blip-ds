'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b0e034bd7abed24b588c3be1c3de809889c9226f' }, index.h("slot", { key: 'bea4171db2b5effc16fad931b47d5f5a89e1470a' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
