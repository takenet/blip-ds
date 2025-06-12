'use strict';

var index = require('./index-DnryYWxm.js');

const cardHeaderCss = ":host{width:100%}";

const CardHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'space-between';
    }
    render() {
        return (index.h("bds-grid", { key: '50c941f132a8fc8cbd9c4b1706a0d0c2118e7e50', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, index.h("slot", { key: 'd26ee87e1486b99797b8c5f9cee44661b7c046f5' })));
    }
};
CardHeader.style = cardHeaderCss;

exports.bds_card_header = CardHeader;
//# sourceMappingURL=bds-card-header.entry.cjs.js.map

//# sourceMappingURL=bds-card-header.cjs.entry.js.map