'use strict';

var index = require('./index-BuAR9UTp.js');

const CardSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: 'ef57277490c618b2836cd2d225178683f266c7a6', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
};

exports.bds_card_subtitle = CardSubtitle;
