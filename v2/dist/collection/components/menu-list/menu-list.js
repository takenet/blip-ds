import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '56e7f68f1a89f13ec1158370f2f83f7d3d9e9ecc' }, h("div", { key: '7b10c91d33b5dfd3fe809ae9e6cbd432585de931', class: "menu-list" }, h("div", { key: '1691379583cc1273664c65e898849970aabc2536', class: "menu-list__left" }), h("slot", { key: 'f075f5c9d85a9168ccdf0c90d00a828ce7ce468b' }), h("div", { key: '5292de99f5c5fe0656a31fbbd6f59153582ff8ac', class: "menu-list__right" }))));
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
