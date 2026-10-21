import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '28d98797402ea00e105d336ecef9f1f674007db5', class: "modal__action" }, h("slot", { key: '78649472f6d839b1432896f047a023dd76122046' })));
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
