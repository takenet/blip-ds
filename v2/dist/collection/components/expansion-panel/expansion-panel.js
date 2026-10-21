import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: '609f74ca9b104ffc07239a729a0a7511788085c6' }, h("slot", { key: 'dd4a877814f9f27a440b21c0932ff328a711a2b8' })));
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
//# sourceMappingURL=expansion-panel.js.map
