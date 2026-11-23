import { r as registerInstance, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiTableCss = () => `:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;overflow-x:auto;background-color:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif}`;

const UaiTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Column widths as a CSS grid-template-columns value, shared by every row. Use to align header and rows, such as "auto repeat(4, 1fr) auto"; avoid sizing cells one by one. */
        this.columns = null;
        /** Accessible name of the table. Use a short description of the data; pair with a visible title; avoid repeating the column names. */
        this.label = null;
    }
    render() {
        return (h(Host, { key: '92653ba9b4f977be2acb6f084060e2c0529382a8', role: "table", "aria-label": this.label, style: this.columns ? { '--uai-table-columns': this.columns } : undefined }, h("slot", { key: '98a5ad568c1b0ae238f7d4b8d310b73211abf662' })));
    }
    get el() { return getElement(this); }
};
UaiTable.style = uaiTableCss();

export { UaiTable as uai_table };
