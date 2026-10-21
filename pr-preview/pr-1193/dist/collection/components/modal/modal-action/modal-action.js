import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: 'e09671ceb62801ff70b2153b809d1b311461b443', class: "modal__action" }, h("slot", { key: 'a52860c02763c4147f9f216e42a90031d1617f37' })));
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
