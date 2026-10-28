'use strict';

var index = require('./index-BuAR9UTp.js');

const cardTitleCss = () => ``;

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: 'a25ad153f9a72947ebf0dd3b6801ea4d71ae1d25', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = cardTitleCss();

exports.bds_card_title = CardTitle;
