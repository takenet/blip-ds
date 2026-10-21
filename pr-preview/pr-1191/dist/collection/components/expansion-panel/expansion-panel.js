import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: '12beeb755cba5d38d3236576492920b684533291' }, h("slot", { key: '8e0cc4db4a15dbf365274136c8ce8660f0abd956' })));
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
