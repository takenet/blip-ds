import { h } from "@stencil/core";
export class CardFooter {
    constructor() {
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'flex-end';
    }
    render() {
        return (h("bds-grid", { key: '4876073805454a16fd854ea5903be4e8592d14d1', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, h("slot", { key: 'dbfd35937fbf0c4b28dec8aab2116cbcc6dbcfaa' })));
    }
    static get is() { return "bds-card-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-footer.css"]
        };
    }
    static get properties() {
        return {
            "align": {
                "type": "string",
                "attribute": "align",
                "mutable": false,
                "complexType": {
                    "original": "justifyContent",
                    "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\"",
                    "references": {
                        "justifyContent": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/card/card-footer/card-footer.tsx",
                            "id": "src/components/card/card-footer/card-footer.tsx::justifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop for internal elements alignment. Will follow the same values of css."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'flex-end'"
            }
        };
    }
}
//# sourceMappingURL=card-footer.js.map
