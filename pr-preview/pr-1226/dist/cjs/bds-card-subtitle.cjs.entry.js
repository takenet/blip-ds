'use strict';

var index = require('./index-BuAR9UTp.js');

const CardSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: '9572330e44b6d8ddd0e70f9ddb456dbf8aa45c0f', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
};

exports.bds_card_subtitle = CardSubtitle;
