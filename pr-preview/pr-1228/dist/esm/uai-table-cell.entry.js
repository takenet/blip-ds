import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const uaiTableCellCss = () => `:host{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-lg, 1.5rem) var(--uai-spacing-md, 1rem)}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}uai-typo{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;min-width:0}`;

const UaiTableCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        return (h(Host, { key: '9d46f6a94a2e381578b6d3ad3d8a0029453c2ae3', role: "cell" }, h("uai-typo", { key: 'abcbbdfe9f3666335d2bae88588166974d2d1c6c', tag: "span", variant: "body-base", margin: false }, h("slot", { key: 'c0e854d6ad0e34ac2dd64fe56c0f37fc1234bdbe' }))));
    }
};
UaiTableCell.style = uaiTableCellCss();

export { UaiTableCell as uai_table_cell };
