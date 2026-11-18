'use strict';

var index = require('./index-Bq8uwDLK.js');

const expansionPanelCss = () => `*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}`;

const ExpansionPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0118184cc49c3ed2685860d684b629091fbec65b' }, index.h("slot", { key: '248bd14b9094f2e72a4a090704b8063c6224eba7' })));
    }
};
ExpansionPanel.style = expansionPanelCss();

exports.bds_expansion_panel = ExpansionPanel;
