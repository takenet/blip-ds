import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '852c287a1f4ae768ae588131b6093757eccf1454', class: "modal__action" }, h("slot", { key: '0b4c3162ec2725eca8998d51353ed45fc87dff98' })));
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
