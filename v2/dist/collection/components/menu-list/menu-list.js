import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'ee6b3d278a472832293fdba35d7b0478af14bac5' }, h("div", { key: '0d895ac3c218a58ec31c20a7a5285ac8849bd796', class: "menu-list" }, h("div", { key: 'c8fddf23f9b8612a6068c503c143d1306c2233a7', class: "menu-list__left" }), h("slot", { key: 'e998d610f1ea8ca3deae0b0be3977569f7c5f82a' }), h("div", { key: '70c3b3799ed9ac20df15c0a42f28a3f8d172fb6a', class: "menu-list__right" }))));
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
