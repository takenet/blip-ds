'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiCardSubtitleCss = () => `:host{display:block;width:100%;min-width:0;color:var(--uai-content-secondary, #5f676d)}`;

const UaiCardSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Text rendered as the card subtitle.
         * Use for secondary context such as timestamps or scope; pair with `UaiCardTitle`; avoid duplicating the default slot.
         */
        this.text = '';
    }
    render() {
        return (index.h(index.Host, { key: 'e56c752429c8e0d03ad125842b86b96056e30542' }, index.h("uai-typo", { key: 'f91fcb6ab3744c155e59644a0901b7ba14652f68', variant: "body-base", tag: "p", bold: "regular", margin: false }, this.text ? this.text : index.h("slot", null))));
    }
};
UaiCardSubtitle.style = uaiCardSubtitleCss();

exports.uai_card_subtitle = UaiCardSubtitle;
