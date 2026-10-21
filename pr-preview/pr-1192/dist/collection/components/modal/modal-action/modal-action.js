import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '5c028f643e184b18f1885a3838348a6fd7474a0b', class: "modal__action" }, h("slot", { key: 'db6f0a9585b077ef973984df226c3ddc91c6d39f' })));
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
