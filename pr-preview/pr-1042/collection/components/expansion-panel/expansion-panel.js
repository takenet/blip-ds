import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: 'e6517c554947ddf47f9e389853357dc772fcfe3c' }, h("slot", { key: '6c9e0041ee7030c9f01e78730282b417b5c2425b' })));
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
