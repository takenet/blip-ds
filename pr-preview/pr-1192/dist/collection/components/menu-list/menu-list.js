import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '7c7e539ddee1e927f30c02e6828d756cd99b61e3' }, h("div", { key: '38ff1563782f602165a6f6bfb40e77bf3bc07acd', class: "menu-list" }, h("div", { key: 'd24a9ddf4b1a45ccef7299358dd6f7a1d20667dc', class: "menu-list__left" }), h("slot", { key: '47ee9bd375941ee36107e6ae7ff12769dcabf66c' }), h("div", { key: 'f1d49facd64df79b13208c308824b8d732e5480c', class: "menu-list__right" }))));
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
