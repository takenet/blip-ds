import { r as registerInstance, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiTableRowCss = () => `:host{display:grid;grid-template-columns:var(--uai-table-columns, repeat(auto-fit, minmax(0, 1fr)));-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:var(--uai-sizing-5xl, 4.5rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){:host{-webkit-transition:none;transition:none}}:host(:hover[clickable]){background-color:var(--uai-action-outline-hover, #f2f3f3);cursor:pointer}:host([clickable]):focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}:host([variant=bar]){display:-ms-flexbox;display:flex;gap:var(--uai-spacing-md, 1rem);-ms-flex-align:center;align-items:center;min-height:var(--uai-control-height-large, 3.5rem);padding:var(--uai-spacing-xs, 0.5rem) var(--uai-spacing-lg, 1.5rem);background-color:var(--uai-action-outline-pressed, #e4e6e7)}`;

const UaiTableRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Marks the row as selected and sets aria-selected, with no visual change of its own. Use when the row's selection control is checked; pair with that control; avoid using it as the only selection signal. */
        this.selected = false;
        /** Makes the whole row interactive: hover style, keyboard focus and Enter or Space activation. Use for rows that open details; avoid it when the cells already hold controls. */
        this.clickable = false;
        /** Row appearance. row is a data or header row; bar is a full-width strip for bulk actions. Use bar above the rows; avoid bar for data. */
        this.variant = 'row';
        /** Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        this.onKeyDown = (event) => {
            if (!this.clickable || event.target !== this.el)
                return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.el.click();
            }
        };
    }
    render() {
        return (h(Host, { key: '3a9715cc6eb6d50355e89985eaf95dc021f96ce3', role: "row", "aria-selected": this.selected ? 'true' : undefined, tabindex: this.clickable ? 0 : undefined, "data-test": this.dataTest, onKeyDown: this.onKeyDown }, h("slot", { key: 'cb866c9f6d8592883c422fd54647084029739fc8' })));
    }
    get el() { return getElement(this); }
};
UaiTableRow.style = uaiTableRowCss();

export { UaiTableRow as uai_table_row };
