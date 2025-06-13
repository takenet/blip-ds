'use strict';

var index = require('./index-DnryYWxm.js');

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
        return (index.h("bds-grid", { key: '6b507b5abc1d7d00ee5133b372a8626ded3a192e', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, index.h("slot", { key: '767c02de2f3f8d44b58a416a00e5464e174a946f' })));
    }
};
CardFooter.style = cardFooterCss;

exports.bds_card_footer = CardFooter;
//# sourceMappingURL=bds-card-footer.entry.cjs.js.map

//# sourceMappingURL=bds-card-footer.cjs.entry.js.map