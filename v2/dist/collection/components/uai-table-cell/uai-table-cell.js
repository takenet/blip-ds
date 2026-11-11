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
        return (h(Host, { key: 'f5efde1f6ce63b73ad7a0d9c876d43363170a33b', role: "cell" }, h("uai-typo", { key: '9d3bc977c43d4b713a318236fea916fd31410daf', tag: "span", variant: "body-base", margin: false }, h("slot", { key: 'a8b23db89227201aa3672529fc0c75dc5d9182ac' }))));
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
