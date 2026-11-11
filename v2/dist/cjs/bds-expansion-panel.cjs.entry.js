'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd0ea4d015a5d767b975b44434296639d1247cba7' }, index.h("slot", { key: 'ce7e402e6abd87cbdff7032a1d180e5df08a8499' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
