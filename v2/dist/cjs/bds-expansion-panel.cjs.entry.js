'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '39bbae8b7bfc6f3999d24f849c3206ae99de9a29' }, index.h("slot", { key: 'b7714e70aa6c5efead0b8c200a67e992d1bfe04e' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
