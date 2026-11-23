'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f019317706fa29a6372a16d106e70cd3c1a56f1c' }, index.h("slot", { key: '3273c85e907cf246ab510393575c2c24a777e7cc' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
