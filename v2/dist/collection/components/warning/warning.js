import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '1bb2ffef828bb865e3a6b43775800a3f416d720b' }, h("div", { key: '7c39ce68fa201a1eef6dd3d833e9d5052ffe97ae', class: "warning__body" }, h("bds-icon", { key: '629294c3ff2c5468b6a63dc310854e17dca588eb', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '6b99fddb8d33f9e49268a0f081ad184390a949ab', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'aa44a6355ec409791eb9029d71d20217cb4a4c4a' })))));
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
