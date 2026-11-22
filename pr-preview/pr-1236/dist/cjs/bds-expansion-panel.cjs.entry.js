'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6fd9079e44ae56ab4bce9cbd453c03853672e39c' }, index.h("slot", { key: '4187e15f4da23f1f5937f2f2b6259505b55656c6' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
