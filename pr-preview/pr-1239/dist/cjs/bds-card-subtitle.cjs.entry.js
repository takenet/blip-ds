'use strict';

var index = require('./index-JW9Yq-qX.js');

const CardSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: '2176514b7225f5d83aaec37329aa86447962fb83', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
};

exports.bds_card_subtitle = CardSubtitle;
