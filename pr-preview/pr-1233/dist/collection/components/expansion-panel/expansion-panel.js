import { Host, h } from "@stencil/core";
export class ExpansionPanel {
    render() {
        return (h(Host, { key: '0118184cc49c3ed2685860d684b629091fbec65b' }, h("slot", { key: '248bd14b9094f2e72a4a090704b8063c6224eba7' })));
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
