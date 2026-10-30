import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '054d9ee4d6b2e710547b59be6a198ff7e90946dc', class: "modal__action" }, h("slot", { key: '1324ce596316427f1de5374d1732d1b521bbc2f5' })));
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
