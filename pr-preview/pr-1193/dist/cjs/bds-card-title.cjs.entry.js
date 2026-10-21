'use strict';

var index = require('./index-DQyYkciT.js');

const cardTitleCss = "";

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("bds-typo", { key: '37234fc3f3fa427df412858653fafa07d2360efe', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
};
CardTitle.style = cardTitleCss;

exports.bds_card_title = CardTitle;
//# sourceMappingURL=bds-card-title.entry.cjs.js.map

//# sourceMappingURL=bds-card-title.cjs.entry.js.map