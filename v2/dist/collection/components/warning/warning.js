import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '1cfa8a88c076dd6c0cf1b4bb34a6a0034eefb24b' }, h("div", { key: 'ca9acbc3f7ce2995b06b9b3950abe12a2266d477', class: "warning__body" }, h("bds-icon", { key: '51b24da75fbba610ed34d52641edd4f8ec5b542e', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '234c314b246c0692632e78993d2c04f2afc707f3', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '067acea9dee7201ca6b246eaf568f89111b2007b' })))));
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
