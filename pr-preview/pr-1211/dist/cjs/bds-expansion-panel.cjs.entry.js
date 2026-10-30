'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '91067f0a5c1b79fc49f4ceca0026625c66cdc199' }, index.h("slot", { key: '941fb663c7422019a590acfc3a09978bb7aba292' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
