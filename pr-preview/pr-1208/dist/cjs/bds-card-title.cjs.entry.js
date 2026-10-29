'use strict';

var index = require('./index-BuAR9UTp.js');

const cardTitleCss = () => ``;

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: 'dbb5710cb850982546c1863c9d6fbbde0506045f', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = cardTitleCss();

exports.bds_card_title = CardTitle;
