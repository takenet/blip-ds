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
        return (h(Host, { key: '73b1954f4deea96bb230794c88ba63c1e22049c1', role: "cell" }, h("uai-typo", { key: '8c8798e006e076342b246bfff6d524ba43a617c0', tag: "span", variant: "body-base", margin: false }, h("slot", { key: '05b97e0cb692ba45a2a07fd2030dfa4ae3ed2013' }))));
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
