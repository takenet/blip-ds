import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: 'da0b6d38953ad3f164b1522a2897c51c5233671c' }, h("slot", { key: '2b00e2fbf7e961621aba4b2c924bc61f351adfab' })));
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
