import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const VARIANTS = ['row', 'bar'];
/**
 * Table row laid out on the columns of UaiTable. Use it for header, data and bulk-action rows; pair with
 * UaiTableCell or UaiTableTh; avoid nesting rows.
 *
 * @slot - UaiTableCell or UaiTableTh elements, or free content in the bar variant.
 */
export class UaiTableRow {
    constructor() {
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
        const variant = VARIANTS.find((candidate) => candidate === this.variant) || 'row';
        if (variant !== this.variant)
            warnLegacyValue('uai-table-row', 'variant', this.variant, variant);
        return (h(Host, { key: '37c2caa13f1147934b1f7dc1407e8cc084450776', role: "row", "aria-selected": this.selected ? 'true' : undefined, tabindex: this.clickable ? 0 : undefined, "data-test": this.dataTest, onKeyDown: this.onKeyDown }, h("slot", { key: '1e2fafb8840201709210c2b55847ae8b44a0fa4a' })));
    }
    static get is() { return "uai-table-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-table-row.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-table-row.css"]
        };
    }
    static get properties() {
        return {
            "selected": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Marks the row as selected and sets aria-selected, with no visual change of its own. Use when the row's selection control is checked; pair with that control; avoid using it as the only selection signal."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "selected",
                "defaultValue": "false"
            },
            "clickable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Makes the whole row interactive: hover style, keyboard focus and Enter or Space activation. Use for rows that open details; avoid it when the cells already hold controls."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "clickable",
                "defaultValue": "false"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiTableRowVariant",
                    "resolved": "\"bar\" | \"row\"",
                    "references": {
                        "UaiTableRowVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-table-row/uai-table-row.tsx",
                            "id": "src/components/uai-table-row/uai-table-row.tsx::UaiTableRowVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Row appearance. row is a data or header row; bar is a full-width strip for bulk actions. Use bar above the rows; avoid bar for data."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "variant",
                "defaultValue": "'row'"
            },
            "dataTest": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get elementRef() { return "el"; }
}
