'use strict';

var index = require('./index-BuAR9UTp.js');

const cardTitleCss = () => ``;

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: 'ab808737db16f30ac015f91da7cd6cd1f317d5f5', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = cardTitleCss();

exports.bds_card_title = CardTitle;
