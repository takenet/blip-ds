import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '9c5faa6ffb5669099459ec58b27bcb58dccb3293' }, h("div", { key: '72aff36835b42f65cff4df05cceb4639271934a5', class: "menu-list" }, h("div", { key: '94a59c004e32d45cac0fc32b1ed872f73b2bf8ea', class: "menu-list__left" }), h("slot", { key: '6412b6feefac9e5d3feec098aab12bfd00e107f3' }), h("div", { key: '916a9e306043e40f354f0fc6e848cc6fd13ff6e7', class: "menu-list__right" }))));
    }
    static get is() { return "bds-menu-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-list.css"]
        };
    }
}
