import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'e6cf5389e89741e0ce4b8c2a790e63ca1946ad5d' }, h("div", { key: '76ab611bf61f6cc5cc4c40787776cba11fff199d', class: "warning__body" }, h("bds-icon", { key: '0a13a48497dab84bf2f095deeb1d84758d7a0f77', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'ac389321a78809cb219bf60bf58a79af15477a88', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '8a7f5aac1a57ad90031a623a028aa5c32c5f28c9' })))));
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
