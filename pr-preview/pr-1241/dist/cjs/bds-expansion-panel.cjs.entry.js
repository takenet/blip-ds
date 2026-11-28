'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '35b39e2d7957a216357297e003b51ab52d550f38' }, index.h("slot", { key: '025c6e11262741c8ac838acd00b2f742b6c1cfae' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
