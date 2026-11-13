import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const JUSTIFY = ['left', 'center', 'right'];
/**
 * Data cell of UaiTableRow. Use it for text or composed content such as avatars, badges and buttons;
 * pair with UaiTableRow; avoid long paragraphs, which are truncated with an ellipsis.
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
        return (h(Host, { key: '9d46f6a94a2e381578b6d3ad3d8a0029453c2ae3', role: "cell" }, h("uai-typo", { key: 'abcbbdfe9f3666335d2bae88588166974d2d1c6c', tag: "span", variant: "body-base", margin: false }, h("slot", { key: 'c0e854d6ad0e34ac2dd64fe56c0f37fc1234bdbe' }))));
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
