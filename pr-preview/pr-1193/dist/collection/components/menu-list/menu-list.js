import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '8d14bfbfcbeef23325d5d1071d04c8ca5301487c' }, h("div", { key: '19c284ab66e23ba26633462b9070da4e3b42edfd', class: "menu-list" }, h("div", { key: '1e429f4a67769c3bfc1da9e52a74666eef396341', class: "menu-list__left" }), h("slot", { key: 'dc50428e121f1f248c3f6de71b06cba33bb83142' }), h("div", { key: '6a201e3556ab96f8d12b8febbcb0abefebce5591', class: "menu-list__right" }))));
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
