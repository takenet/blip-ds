'use strict';

var index = require('./index-D_zq0Z7d.js');

const cardFooterCss = ":host{width:100%}";

const CardFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'flex-end';
    }
    render() {
        return (index.h("bds-grid", { key: '4876073805454a16fd854ea5903be4e8592d14d1', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, index.h("slot", { key: 'dbfd35937fbf0c4b28dec8aab2116cbcc6dbcfaa' })));
    }
};
CardFooter.style = cardFooterCss;

exports.bds_card_footer = CardFooter;
//# sourceMappingURL=bds-card-footer.entry.cjs.js.map

//# sourceMappingURL=bds-card-footer.cjs.entry.js.map