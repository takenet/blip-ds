import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'cbe31a41db2a6f0bcccaa4564839b63674e4e226' }, h("div", { key: '37b3694402155dc686b8863384c036993d04d917', class: "menu-list" }, h("div", { key: 'e735a7bd2ef0c5ee0195bccc2cba326d215cd918', class: "menu-list__left" }), h("slot", { key: '887f7aa16ca34d2d54b582c1ca9c3473a98451c9' }), h("div", { key: 'fcb118d5a25ef08090cfe09a15eda2e974c8b78e', class: "menu-list__right" }))));
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
