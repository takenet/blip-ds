import { t as transformTag, r as registerInstance, h, H as Host } from './index-D799VfbI.js';

const uaiTableCellCss = () => `:host{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-lg, 1.5rem) var(--uai-spacing-md, 1rem)}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}${transformTag("uai-typo")}{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;min-width:0}`;

const UaiTableCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        return (h(Host, { key: 'e96ab92f1e143dd81a3f1be64d2e7328e4be3131', role: "cell" }, h("uai-typo", { key: 'e25c4c97827e797c423a70bd5af4d394d4ee5f1e', tag: "span", variant: "body-base", margin: false }, h("slot", { key: '27ff4be7543c21578a2b6049d40d2063081dffd9' }))));
    }
};
UaiTableCell.style = uaiTableCellCss();

export { UaiTableCell as uai_table_cell };
