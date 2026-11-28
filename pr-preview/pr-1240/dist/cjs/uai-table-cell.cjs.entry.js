'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableCellCss = () => `:host{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-lg, 1.5rem) var(--uai-spacing-md, 1rem);overflow-wrap:anywhere}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}${index.transformTag("uai-typo")}{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;min-width:0;margin:calc(-1 * var(--uai-spacing-xs, 0.5rem));padding:var(--uai-spacing-xs, 0.5rem);overflow:hidden}${index.transformTag("uai-typo")}::part(uai-typo__text){min-width:0;max-width:100%}::slotted(*){min-width:0;max-width:100%}`;

const UaiTableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        return (index.h(index.Host, { key: 'bbd9f777001ef104dd33885ea78bd3b9e60a691e', role: "cell" }, index.h("uai-typo", { key: '3f5df4dd93a7e5c042edbbbaa67f81912bc2924e', tag: "span", variant: "body-base", margin: false }, index.h("slot", { key: '722786f44bfa16d3b3dd525ae860a12776173fa9' }))));
    }
};
UaiTableCell.style = uaiTableCellCss();

exports.uai_table_cell = UaiTableCell;
