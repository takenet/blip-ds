import { h } from "@stencil/core";
/**
 * @deprecated Use `uai-card-footer` instead.
 */
export class CardFooter {
    constructor() {
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'flex-end';
    }
    render() {
        return (h("bds-grid", { key: '2da58e4e3268c34f9011fd5c5456581ce2702c85', xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, h("slot", { key: 'b88611e9875c7fc44966c1773107b65a9d141259' })));
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
                "attribute": "align",
                "defaultValue": "'flex-end'"
            }
        };
    }
}
