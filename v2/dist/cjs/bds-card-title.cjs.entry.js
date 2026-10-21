'use strict';

var index = require('./index-DQyYkciT.js');

const cardTitleCss = "";

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: '08b6244df636eb1d80324308234e8d37e7cb5905', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = cardTitleCss;

exports.bds_card_title = CardTitle;
//# sourceMappingURL=bds-card-title.entry.cjs.js.map

//# sourceMappingURL=bds-card-title.cjs.entry.js.map