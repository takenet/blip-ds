import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: '1848e87dac84daf531a6cad1fe89e51588e360d3', class: "modal__action" }, h("slot", { key: 'c3231a296b5df6fdb78341a3f5d708ed9de43d05' })));
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
