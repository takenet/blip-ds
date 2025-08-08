import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '2da3c710703c1e9bae01c6763ab24d3cf4f64325' }, h("div", { key: 'e1c61b4f2b081397c20fa9ee0f54f60aa3a2a259', class: "warning__body" }, h("bds-icon", { key: 'e393207758f193ef32257d285913f2fade8c0884', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '752ac0b48c01a3df053fae0a641ab5623da3a5fb', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '06000d1b396177a5a4122dadba1370bc0b945585' })))));
    }
    static get is() { return "bds-warning"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["warning.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["warning.css"]
        };
    }
}
//# sourceMappingURL=warning.js.map
