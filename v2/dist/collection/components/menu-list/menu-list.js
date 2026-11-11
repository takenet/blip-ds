import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'c37c3469783beb681924b05d9ef376d0238e3419' }, h("div", { key: '8a40f88195005eddded4ccaa61d0dfbc38b393d1', class: "menu-list" }, h("div", { key: '989a0a5ababa268a5036110254e75624db45f1c0', class: "menu-list__left" }), h("slot", { key: 'd22493bac48538353ab2259ebd350d396010e56a' }), h("div", { key: '767bc7c480833e26b4c1f46e9f49015ac6bd95ab', class: "menu-list__right" }))));
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
