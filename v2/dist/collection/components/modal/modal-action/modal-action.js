import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '104d5469ef425eddadfccf9d63084da1432c9d94', class: "modal__action" }, h("slot", { key: '4aef5371e31b48dc9409b6a2e51a658a0fcf3ad4' })));
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
