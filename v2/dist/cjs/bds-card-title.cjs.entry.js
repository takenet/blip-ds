'use strict';

var index = require('./index-GTJCA4wH.js');

const cardTitleCss = () => ``;

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: '52806a8ed8dea8296c7f1b0faf927a0cc2266d5e', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = cardTitleCss();

exports.bds_card_title = CardTitle;
