import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '3396581a29f5affa6477a93fc904c53f1b5ed9f7', class: "modal__action" }, h("slot", { key: '35437ea3b6493a4df5c8100551c98282661175de' })));
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
