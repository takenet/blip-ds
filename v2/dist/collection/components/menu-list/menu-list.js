import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '3421229f6cc4cfb5e8751c104d100eba4049e08b' }, h("div", { key: 'f48aef6a9af9edb8e7bf563a9f1c12a902e26b1e', class: "menu-list" }, h("div", { key: '9ef4af2e4616c30a69be1744127b1ac34abf3bc3', class: "menu-list__left" }), h("slot", { key: '465aae622f6eebd24d2c6107c4594b464e90529c' }), h("div", { key: '0e2193af5b2d9fb2b27ff8f4ab84361733fa6ac4', class: "menu-list__right" }))));
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
