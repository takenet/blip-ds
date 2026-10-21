import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: '396749e40c6a3eb3e474322bdf1f7144910fc941' }, h("slot", { key: 'eb474ed2ba225a278c053a7cc88f285d4abc2116' })));
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
