'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ec5c583667b207cee7f5f9f9faa6c0b652e12ffa' }, index.h("slot", { key: '6674ad92527127e9ac6f05b01a470ac7931943fb' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
