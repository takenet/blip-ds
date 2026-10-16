import { h } from "@stencil/core";
export class CardHeader {
    constructor() {
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'space-between';
    }
    render() {
        return (h("bds-grid", { key: '35e82fd0bef4b8b877ba5872e4e67fe488f361ea', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", { key: '23dccd08124c47a7dc509aaf5c6259fd2addac48' })));
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
                "attribute": "align",
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
                "defaultValue": "'space-between'"
            }
        };
    }
}
//# sourceMappingURL=card-header.js.map
