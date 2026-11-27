import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const JUSTIFY = ['left', 'center', 'right'];
/**
 * Data cell of UaiTableRow. Use it for text or composed content such as avatars, badges and buttons;
 * pair with UaiTableRow. The content stays in its column: text wraps, even a long word such as an e-mail or a URL; a UaiTypo
 * with noWrap, a chip or a button ends with an ellipsis. Avoid long paragraphs, which make tall rows.
 *
 * @slot - Cell content.
 */
export class UaiTableCell {
    constructor() {
        /** Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column. */
        this.justifyContent = 'left';
    }
    render() {
        const justify = JUSTIFY.find((candidate) => candidate === this.justifyContent) || 'left';
        if (justify !== this.justifyContent)
            warnLegacyValue('uai-table-cell', 'justifyContent', this.justifyContent, justify);
        return (h(Host, { key: 'dd510ede299164342d804bbb8bd2d83d349a55a5', role: "cell" }, h("uai-typo", { key: '13ec6e5f6b8d3a9a9ba79d067e939f1ba887760e', tag: "span", variant: "body-base", margin: false }, h("slot", { key: 'fb2fad28c5527b173126008163b902f69d58bd94' }))));
    }
    static get is() { return "uai-table-cell"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-table-cell.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-table-cell.css"]
        };
    }
    static get properties() {
        return {
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiTableJustify",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {
                        "UaiTableJustify": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-table-cell/uai-table-cell.tsx",
                            "id": "src/components/uai-table-cell/uai-table-cell.tsx::UaiTableJustify"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Horizontal alignment of the content. Use right for numbers and center for controls; avoid mixing alignments in one column."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "justify-content",
                "defaultValue": "'left'"
            }
        };
    }
}
