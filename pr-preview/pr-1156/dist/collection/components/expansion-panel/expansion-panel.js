import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: 'b06ff704b93c32fde226c7bcd37d8f3a612d134d' }, h("slot", { key: '9335219c7f5c723c75ee1372a40e3f3180c25d6e' })));
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
