import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '035fc5035aa3360c22b0cbf08ace277be70b5903', class: "modal__action" }, h("slot", { key: '488434e623b0ad49f99239721b468c8193551e05' })));
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
