import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'afc25fc5e47eaaa9ba89552655039aacfbfa360c' }, h("div", { key: '2920439a1daadd48e8178f41f0355700d030dce9', class: "menu-list" }, h("div", { key: 'e943fb978a6d8aac1473173641c5cee7f5626bd9', class: "menu-list__left" }), h("slot", { key: '5eacb44f0bc7074021201f051d93c284c9c1e1ff' }), h("div", { key: '57013fa8b87ab3937e99895589572d9380fccce1', class: "menu-list__right" }))));
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
