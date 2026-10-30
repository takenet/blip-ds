'use strict';

var index = require('./index-BuAR9UTp.js');

const CardSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: '4a64a0552e46d7213b6e7b729e8f4765e8c91ad0', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
};

exports.bds_card_subtitle = CardSubtitle;
