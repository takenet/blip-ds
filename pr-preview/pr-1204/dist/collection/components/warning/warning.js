import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'b0b514d6b264b0559c0e730775f1c0c8a16a26f0' }, h("div", { key: '3991f86f37f02a12fe24212f67c7047e0df6c7d5', class: "warning__body" }, h("bds-icon", { key: '10cf6c4f39d7faa6cdbf4db09a8e18236a63cdc9', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'a8a0952c213f44c5d4c5801e187afa01d7fff3c4', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '90b1fb55062305dfb71db85e6329726e332417e0' })))));
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
