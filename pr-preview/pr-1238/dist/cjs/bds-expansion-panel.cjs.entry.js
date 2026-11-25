'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '743bd8030acd7017fb80d473d3a01aea7b879325' }, index.h("slot", { key: '8f76e3195eec039a6852cb3827e4f2a0bbae1eab' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
