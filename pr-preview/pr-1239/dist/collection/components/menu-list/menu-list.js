import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '1872021bbb0b55f1c182731899ca31d8fee42f3b' }, h("div", { key: '527d658807186cbbf27c7f6d8076692a84598b10', class: "menu-list" }, h("div", { key: '2dfb04c77c2b328d85c635b2878ed1b12f061d45', class: "menu-list__left" }), h("slot", { key: 'edc4efb3549a5944268398fc562250c8df92b4ef' }), h("div", { key: 'b781e15136b67c6f1af611c4079a30d8bdc18d41', class: "menu-list__right" }))));
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
