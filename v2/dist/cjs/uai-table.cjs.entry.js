'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableCss = () => `:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;overflow-x:auto;background-color:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif}`;

const UaiTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Column widths as a CSS grid-template-columns value, shared by every row. Use to align header and rows, such as "auto repeat(4, 1fr) auto"; avoid sizing cells one by one. */
        this.columns = null;
        /** Accessible name of the table. Use a short description of the data; pair with a visible title; avoid repeating the column names. */
        this.label = null;
    }
    render() {
        return (index.h(index.Host, { key: 'be741ba3a8c4135023bda0e2d67222c523635f63', role: "table", "aria-label": this.label, style: this.columns ? { '--uai-table-columns': this.columns } : undefined }, index.h("slot", { key: '1316ba51985c464482516d605d3be1fb9412c6ca' })));
    }
    get el() { return index.getElement(this); }
};
UaiTable.style = uaiTableCss();

exports.uai_table = UaiTable;
