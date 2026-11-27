'use strict';

var index = require('./index-JW9Yq-qX.js');

const cardFooterCss = () => `:host{width:100%}`;

const CardFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'flex-end';
    }
    render() {
        return (index.h("bds-grid", { key: '2da58e4e3268c34f9011fd5c5456581ce2702c85', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, index.h("slot", { key: 'b88611e9875c7fc44966c1773107b65a9d141259' })));
    }
};
CardFooter.style = cardFooterCss();

exports.bds_card_footer = CardFooter;
