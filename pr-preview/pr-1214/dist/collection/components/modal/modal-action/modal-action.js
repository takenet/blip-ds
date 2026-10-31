import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '9ad2b12d238aa7e0a6e223b19a8d131f387e08d7', class: "modal__action" }, h("slot", { key: 'bc400bfaf4c165d1c3e4982c3680db23a1f34023' })));
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
