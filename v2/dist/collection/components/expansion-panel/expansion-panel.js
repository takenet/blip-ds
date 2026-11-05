import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: '174d2e4de3dfde69c304c6036cda3e49f49b5f26' }, h("slot", { key: 'd252f43cf9279b4d00f9b9c96541c67c5b7b7518' })));
    }
    static get is() { return "bds-expansion-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["expansion-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["expansion-panel.css"]
        };
    }
}
