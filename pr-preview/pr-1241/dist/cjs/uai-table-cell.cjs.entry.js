'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableCellCss = () => `:host{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-lg, 1.5rem) var(--uai-spacing-md, 1rem);overflow-wrap:anywhere}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}${index.transformTag("uai-typo")}{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;min-width:0;max-width:calc(100% + 2 * var(--uai-spacing-xs, 0.5rem));margin:calc(-1 * var(--uai-spacing-xs, 0.5rem));padding:var(--uai-spacing-xs, 0.5rem);overflow:hidden}${index.transformTag("uai-typo")}::part(uai-typo__text){min-width:0;max-width:100%}::slotted(*){min-width:0;max-width:100%}`;

const UaiTableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        return (index.h(index.Host, { key: '9e5ba16effab6271792d7c73c2777ec1808ee363', role: "cell" }, index.h("uai-typo", { key: '670f20cc826263061f78c6104e496e2ccb330846', tag: "span", variant: "body-base", margin: false }, index.h("slot", { key: '00819a101847f1c35c9527b4fbe9a5fc688256ea' }))));
    }
};
UaiTableCell.style = uaiTableCellCss();

exports.uai_table_cell = UaiTableCell;
