import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '4a2f8c4c19df041d27b135b8a6855d45834352b4', class: "modal__action" }, h("slot", { key: '75faffd877ec7517b039f24395b2b7958cb4e848' })));
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
