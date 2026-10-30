'use strict';

var index = require('./index-BuAR9UTp.js');

const CardSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: '0a4479497969f9b79c5ddd4fe3309372cabbe31d', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
};

exports.bds_card_subtitle = CardSubtitle;
