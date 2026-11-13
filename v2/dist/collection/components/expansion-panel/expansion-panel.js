import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: '39bbae8b7bfc6f3999d24f849c3206ae99de9a29' }, h("slot", { key: 'b7714e70aa6c5efead0b8c200a67e992d1bfe04e' })));
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
