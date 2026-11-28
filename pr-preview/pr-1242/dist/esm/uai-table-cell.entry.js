import { t as transformTag, r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const uaiTableCellCss = () => `:host{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;padding:var(--uai-spacing-lg, 1.5rem) var(--uai-spacing-md, 1rem);overflow-wrap:anywhere}:host([justify-content=center]){-ms-flex-pack:center;justify-content:center}:host([justify-content=right]){-ms-flex-pack:end;justify-content:flex-end}${transformTag("uai-typo")}{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-xs, 0.5rem);-ms-flex-align:center;align-items:center;min-width:0;margin:calc(-1 * var(--uai-spacing-xs, 0.5rem));padding:var(--uai-spacing-xs, 0.5rem);overflow:hidden}${transformTag("uai-typo")}::part(uai-typo__text){min-width:0;max-width:100%}::slotted(*){min-width:0;max-width:100%}`;

const UaiTableCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        return (h(Host, { key: '4b8fcdd09cefd4e7e528a11e857316d0ed94dd82', role: "cell" }, h("uai-typo", { key: 'e0c79a2aeadab081ecee48e929d2a8175eb35ec6', tag: "span", variant: "body-base", margin: false }, h("slot", { key: '6960a421ee7405b20542965793e69bba4eb91391' }))));
    }
};
UaiTableCell.style = uaiTableCellCss();

export { UaiTableCell as uai_table_cell };
