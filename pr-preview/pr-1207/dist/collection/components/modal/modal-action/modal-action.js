import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: 'e246ecad6dd53f3ce4d7d7ff446c85f6e02d414a', class: "modal__action" }, h("slot", { key: '6e0416c5fd0e50367f580715f7e7275927b897cd' })));
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
