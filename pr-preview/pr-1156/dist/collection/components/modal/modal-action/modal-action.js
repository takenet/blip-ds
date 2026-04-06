import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: 'ebe79c0f5e218d99d6d66bee77b445f8f676dba6', class: "modal__action" }, h("slot", { key: '97ae98d57d4d9735bb404ad3baf75fabf9067c3f' })));
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
