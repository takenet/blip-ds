'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8d705091a2daebfca3795dc7357bc89c0b83ffe3' }, index.h("slot", { key: '507fe305dc2aaafa5a2a666643b6d8a0a3e24bde' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
