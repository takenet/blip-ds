'use strict';

var index = require('./index-BuAR9UTp.js');

const cardTitleCss = () => ``;

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: '9a3490e1d7109c1fb72a4e381dc1ff8ed5fc3021', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = cardTitleCss();

exports.bds_card_title = CardTitle;
