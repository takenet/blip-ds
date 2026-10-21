import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: 'a927e08c858e4b83adbfd45146298c6803d3cdee', class: "modal__action" }, h("slot", { key: '5375008304f32a5d0020a2393e23dd60c6f5bc6e' })));
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
