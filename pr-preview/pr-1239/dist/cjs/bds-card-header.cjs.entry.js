'use strict';

var index = require('./index-JW9Yq-qX.js');

const cardHeaderCss = () => `:host{width:100%}`;

const CardHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'space-between';
    }
    render() {
        return (index.h("bds-grid", { key: '9d0392b56f287a7516e46816173f23ae6fe4eca1', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, index.h("slot", { key: '8665a7b594a760361525d8353858c8fe2ff6749b' })));
    }
};
CardHeader.style = cardHeaderCss();

exports.bds_card_header = CardHeader;
