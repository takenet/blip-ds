'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiCardTitleCss = () => `:host{display:block;width:100%;min-width:0;color:var(--uai-content-primary, #242729)}.card-title__text{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;

const UaiCardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Text rendered as the card title.
         * Use a concise label; pair with `UaiCardHeader`; avoid duplicating the default slot content.
         */
        this.text = '';
    }
    render() {
        return (index.h(index.Host, { key: 'd3d5ee76ec5151df8b8e96f0c6ad850cb518baa7' }, index.h("uai-typo", { key: '24dba5df9e40efe3b48964ad1fa9fe4d7dc54200', class: "card-title__text", variant: "title", tag: "h4", bold: "medium", margin: false }, this.text ? this.text : index.h("slot", null))));
    }
};
UaiCardTitle.style = uaiCardTitleCss();

exports.uai_card_title = UaiCardTitle;
