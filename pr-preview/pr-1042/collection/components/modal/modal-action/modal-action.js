import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: 'd5b97cda116ceeca2ec39f20a131abc5c03ea018', class: "modal__action" }, h("slot", { key: '9cd8201ca880d4a3ce292331970f08b5839e04b7' })));
    }
    static get is() { return "bds-modal-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-action.css"]
        };
    }
}
//# sourceMappingURL=modal-action.js.map
