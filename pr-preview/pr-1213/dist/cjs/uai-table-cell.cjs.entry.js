'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableCellCss = () => `:host{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-lg, 1.5rem) var(--uai-spacing-md, 1rem)}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}.cell__text{--uai-typo-color:var(--uai-content-primary, #242729);display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;

const UaiTableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        return (index.h(index.Host, { key: '73b1954f4deea96bb230794c88ba63c1e22049c1', role: "cell" }, index.h("uai-typo", { key: '84ad8839e8619a2f4face698cc2e11253158ae0b', class: "cell__text", tag: "span", variant: "body-base", margin: false }, index.h("slot", { key: '53b7e7e3a682ae232e0d45c82a3902c58cdbb852' }))));
    }
};
UaiTableCell.style = uaiTableCellCss();

exports.uai_table_cell = UaiTableCell;
