'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableCellCss = () => `:host{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-lg, 1.5rem) var(--uai-spacing-md, 1rem)}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}uai-typo{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;min-width:0}`;

const UaiTableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        return (index.h(index.Host, { key: 'f5efde1f6ce63b73ad7a0d9c876d43363170a33b', role: "cell" }, index.h("uai-typo", { key: '9d3bc977c43d4b713a318236fea916fd31410daf', tag: "span", variant: "body-base", margin: false }, index.h("slot", { key: 'a8b23db89227201aa3672529fc0c75dc5d9182ac' }))));
    }
};
UaiTableCell.style = uaiTableCellCss();

exports.uai_table_cell = UaiTableCell;
