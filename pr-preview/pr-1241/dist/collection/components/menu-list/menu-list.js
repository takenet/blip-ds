import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'd67d95e4073d1080d4b7c110951c90bd93d4472a' }, h("div", { key: 'e127fcf50f67de5b616b323882d047e825c18b71', class: "menu-list" }, h("div", { key: '01911c5cee64a00a48d4a7bb7eba8a4b37b04d98', class: "menu-list__left" }), h("slot", { key: '633fffdfdf6aa1c9951213fedba10e54b0f6f1de' }), h("div", { key: '33f8e7f0fdf4aae0c33d3d4112e80b2e0ff6766e', class: "menu-list__right" }))));
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
