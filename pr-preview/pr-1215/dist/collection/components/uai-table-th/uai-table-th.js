import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const DIRECTIONS = ['none', 'ascending', 'descending'];
const JUSTIFY = ['left', 'center', 'right'];
const NEXT = {
    none: 'ascending',
    ascending: 'descending',
    descending: 'ascending',
};
/**
 * Column header of UaiTableRow. Use it in the header row; pair with sortable and sortDirection for sortable
 * columns; avoid sortable on columns the consumer cannot sort.
 *
 * @slot - Column title.
 */
export class UaiTableTh {
    constructor() {
        /** Turns the title into a button that asks for sorting. Use only when the consumer sorts on uaiTableSort; pair with sortDirection; avoid it without a handler. */
        this.sortable = false;
        /** Current sort of the column, sets aria-sort. Use none, ascending or descending; pair with sortable; avoid setting it on several columns. */
        this.sortDirection = 'none';
        /** Horizontal alignment of the title. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
        /** Accessible name of the sort button when the title is not enough. Use a short action; pair with sortable; avoid repeating the direction. */
        this.sortLabel = null;
        this.onSort = () => {
            const current = DIRECTIONS.find((candidate) => candidate === this.sortDirection) || 'none';
            this.uaiTableSort.emit(NEXT[current]);
        };
    }
    render() {
        const direction = DIRECTIONS.find((candidate) => candidate === this.sortDirection) || 'none';
        if (direction !== this.sortDirection)
            warnLegacyValue('uai-table-th', 'sortDirection', this.sortDirection, direction);
        const justify = JUSTIFY.find((candidate) => candidate === this.justifyContent) || 'left';
        if (justify !== this.justifyContent)
            warnLegacyValue('uai-table-th', 'justifyContent', this.justifyContent, justify);
        const title = (h("uai-typo", { key: '1a25b1abefb49ebc9226c2d3509bc5261441b883', tag: "span", variant: "body-lg", bold: "semibold", margin: false }, h("slot", { key: '8fce43490833fae9a5bc3ae12505a683cbd69098' })));
        return (h(Host, { key: '431cf358a52c0bef22b12f18643c607ff3ef408b', role: "columnheader", "aria-sort": this.sortable ? direction : undefined }, this.sortable ? (h("button", { type: "button", class: "th__button", "aria-label": this.sortLabel, onClick: this.onSort }, title, h("uai-icon", { class: {
                th__icon: true,
                'th__icon--active': direction !== 'none',
                'th__icon--descending': direction === 'descending',
            }, name: "arrow-down", size: "small", color: direction === 'none' ? 'content-secondary' : 'content-primary' }))) : (title)));
    }
    static get is() { return "uai-table-th"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-table-th.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-table-th.css"]
        };
    }
    static get properties() {
        return {
            "sortable": {
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
                    "text": "Turns the title into a button that asks for sorting. Use only when the consumer sorts on uaiTableSort; pair with sortDirection; avoid it without a handler."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "sortable",
                "defaultValue": "false"
            },
            "sortDirection": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiTableSortDirection",
                    "resolved": "\"ascending\" | \"descending\" | \"none\"",
                    "references": {
                        "UaiTableSortDirection": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-table-th/uai-table-th.tsx",
                            "id": "src/components/uai-table-th/uai-table-th.tsx::UaiTableSortDirection"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Current sort of the column, sets aria-sort. Use none, ascending or descending; pair with sortable; avoid setting it on several columns."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "sort-direction",
                "defaultValue": "'none'"
            },
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiTableThJustify",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {
                        "UaiTableThJustify": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-table-th/uai-table-th.tsx",
                            "id": "src/components/uai-table-th/uai-table-th.tsx::UaiTableThJustify"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Horizontal alignment of the title. Use right for numbers and center for controls; avoid mixing alignments in one column."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "justify-content",
                "defaultValue": "'left'"
            },
            "sortLabel": {
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
                    "text": "Accessible name of the sort button when the title is not enough. Use a short action; pair with sortable; avoid repeating the direction."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sort-label",
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "uaiTableSort",
                "name": "uaiTableSort",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the sort button is activated. detail: the next direction, ascending or descending. The consumer updates sortDirection."
                },
                "complexType": {
                    "original": "UaiTableSortDirection",
                    "resolved": "\"ascending\" | \"descending\" | \"none\"",
                    "references": {
                        "UaiTableSortDirection": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-table-th/uai-table-th.tsx",
                            "id": "src/components/uai-table-th/uai-table-th.tsx::UaiTableSortDirection"
                        }
                    }
                }
            }];
    }
}
