import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '61e5de06a12a0e9803a1880f2a6a91e51dead6ee' }, h("div", { key: '124b5b10650dc2d255057440864e0541d29216d0', class: "menu-list" }, h("div", { key: 'cf08bca01f5a009144c01ac6582be203101c5b66', class: "menu-list__left" }), h("slot", { key: 'baeb12dad6c2abfe15d2309cd24c43bbc0d5f567' }), h("div", { key: '036cbd95969b978652d314499caf5340c4f9ab68', class: "menu-list__right" }))));
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
