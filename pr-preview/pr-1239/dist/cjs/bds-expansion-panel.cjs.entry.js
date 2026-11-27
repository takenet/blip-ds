'use strict';

var index = require('./index-JW9Yq-qX.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '34f62d546ced7cc3b647041bbd60ed9bb6768c35' }, index.h("slot", { key: '286f57a42556f3796d3810ec36a09a13f7684edb' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
