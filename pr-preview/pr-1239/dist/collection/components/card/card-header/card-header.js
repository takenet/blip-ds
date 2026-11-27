import { h } from "@stencil/core";
/**
 * @deprecated Use `uai-card-header` instead.
 */
export class CardHeader {
    constructor() {
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'space-between';
    }
    render() {
        return (h("bds-grid", { key: '9d0392b56f287a7516e46816173f23ae6fe4eca1', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", { key: '8665a7b594a760361525d8353858c8fe2ff6749b' })));
    }
    static get is() { return "bds-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-header.css"]
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
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/card/card-header/card-header.tsx",
                            "id": "src/components/card/card-header/card-header.tsx::justifyContent"
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
                "defaultValue": "'space-between'"
            }
        };
    }
}
