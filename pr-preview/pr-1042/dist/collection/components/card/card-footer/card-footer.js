import { h } from "@stencil/core";
export class CardFooter {
    constructor() {
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'flex-end';
    }
    render() {
        return (h("bds-grid", { key: '6b507b5abc1d7d00ee5133b372a8626ded3a192e', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, h("slot", { key: '767c02de2f3f8d44b58a416a00e5464e174a946f' })));
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
