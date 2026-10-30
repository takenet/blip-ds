import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '04bd57f741c94e1dfa79cb444e421ca60cc615f0', class: "modal__action" }, h("slot", { key: '950da5a6e2d4718a2327dd0152f4945ade0356f0' })));
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
