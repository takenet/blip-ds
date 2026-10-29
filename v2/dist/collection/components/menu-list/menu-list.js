import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '074c8c8dc610ff7267e0d045084661b118c1ab30' }, h("div", { key: '46a5520fa92c85bf71ba3023866a533d1dad5f42', class: "menu-list" }, h("div", { key: 'd553ab2a32750c1302c7d58941f5dbecab1d16b7', class: "menu-list__left" }), h("slot", { key: 'c34f86af461dbcac9c5c42ad0ae424b44ad7368b' }), h("div", { key: 'f05b94c59ea20d1bb7eb065b5a0c4e19b01869d3', class: "menu-list__right" }))));
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
