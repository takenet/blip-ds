import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '59ab4cb518f333ff15683ef778f811c307392cfd', class: "modal__action" }, h("slot", { key: 'f191b3787b620f6dc9c6800569c10aeb75c1cb98' })));
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
