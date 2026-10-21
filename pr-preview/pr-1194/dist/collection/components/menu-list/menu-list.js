import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'e0417530a119c97cbd79258405224be0f168db75' }, h("div", { key: 'ff454871d68928aedaaad1338031e4261448e95d', class: "menu-list" }, h("div", { key: 'aa92d2a30b1ae77efa4489110a5c937d0555339d', class: "menu-list__left" }), h("slot", { key: '78f25c25715c5e2f4b611b0da7cbd32e0b57e6dd' }), h("div", { key: 'c00338ba83145a2d5e5b178a5d9c96b266c2e398', class: "menu-list__right" }))));
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
//# sourceMappingURL=menu-list.js.map
