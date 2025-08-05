'use strict';

var index = require('./index-D_zq0Z7d.js');

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
        return (index.h("bds-grid", { key: '35e82fd0bef4b8b877ba5872e4e67fe488f361ea', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, index.h("slot", { key: '23dccd08124c47a7dc509aaf5c6259fd2addac48' })));
    }
};
CardHeader.style = cardHeaderCss;

exports.bds_card_header = CardHeader;
//# sourceMappingURL=bds-card-header.entry.cjs.js.map

//# sourceMappingURL=bds-card-header.cjs.entry.js.map