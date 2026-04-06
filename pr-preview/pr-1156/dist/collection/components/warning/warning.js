import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '7c6c1006bce5bb0976f015664f8bcc2f63bcb52a' }, h("div", { key: 'f5b7e642931181c37c2c13de09f65b1749752aac', class: "warning__body" }, h("bds-icon", { key: 'ce17467b9be1634b4382adc87676419f88a5ab20', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'ebf10c5e0163dc0e65e784defc6543f8512932a9', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '70f037851be636f7f088d1d7b6fadd31676ac8c8' })))));
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
