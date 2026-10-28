import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '8886ae383a7d7cc1ee836ddf49bb7cc95eb8bf32', class: "modal__action" }, h("slot", { key: 'a8d275b72503e528f2445647a73d036d09c085a6' })));
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
