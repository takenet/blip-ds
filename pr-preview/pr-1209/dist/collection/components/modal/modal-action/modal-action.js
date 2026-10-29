import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '0fb6d9d6c6834004ddd43f50cf049655c741d699', class: "modal__action" }, h("slot", { key: '1e203193d5335615b4631c912f7574b8616c03ef' })));
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
