import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'c3fe385d9cd873f647f604d9d6d0ffd1a94544ce' }, h("div", { key: 'ebc1e56190bbf836d838c47e9e50d0fb6e745c4d', class: "menu-list" }, h("div", { key: '8875fd5d2bedb6c697413aaaacfb8a3fe8e13c92', class: "menu-list__left" }), h("slot", { key: 'ca65f0ec589b6ffd4284cab1208f7d57aa4c75c7' }), h("div", { key: 'b35affbe0ed22e5345bc2a0f09a19a183f0a81d7', class: "menu-list__right" }))));
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
