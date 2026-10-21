import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'ffedff55e685b6509e059dba71107151407e2fa9' }, h("div", { key: 'e42b3d9b0ad9ab89a8ea9f924065198162c97cbd', class: "warning__body" }, h("bds-icon", { key: 'b1272ca35106a87b7f4edf9e088e1b489699c87f', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'e14b52d6d6abcda83dbbf0b6c7d41ecf036dcba7', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '3018ec6ca5db89c16aa7e1032fb3c0cfc928093b' })))));
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
