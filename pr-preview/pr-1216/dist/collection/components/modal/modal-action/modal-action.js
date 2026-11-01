import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '1db782b11d9b6eaa6650a144b2339481f07def29', class: "modal__action" }, h("slot", { key: 'f4d0a9592cb37ba1888636ec6ba7861b19ab9524' })));
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
