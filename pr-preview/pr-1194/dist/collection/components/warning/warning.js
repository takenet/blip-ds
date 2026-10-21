import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'e4ed013a5d12762984bda876b82fc58a3815ec67' }, h("div", { key: '2d6fd5dfb9a78afdf1380638874ee7c85dc08918', class: "warning__body" }, h("bds-icon", { key: '3d9769f1487396a048963ce817c7c8979046dd95', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'e67eb29dba2b0f95c10772eefa4f3d1dc878c3ba', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '3cbffa1d41a04921e55d148d3031261fb6ed6aeb' })))));
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
