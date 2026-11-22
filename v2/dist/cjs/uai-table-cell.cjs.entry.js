'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableCellCss = () => `:host{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-lg, 1.5rem) var(--uai-spacing-md, 1rem)}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}${index.transformTag("uai-typo")}{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;min-width:0}`;

const UaiTableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        return (index.h(index.Host, { key: '70047af244a928bd0ec81be30d32b0533e99d4aa', role: "cell" }, index.h("uai-typo", { key: '4d397ba2029c57705801aeacd53950588cac355c', tag: "span", variant: "body-base", margin: false }, index.h("slot", { key: '8f92db57522def2ab6c2224be14c60834c1847d7' }))));
    }
};
UaiTableCell.style = uaiTableCellCss();

exports.uai_table_cell = UaiTableCell;
