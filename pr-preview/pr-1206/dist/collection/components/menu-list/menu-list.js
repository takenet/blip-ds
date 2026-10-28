import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '160e5bbb19684c2918b46510684b2b50b55873cc' }, h("div", { key: 'bfea5a68deba77e767927ff2f39c8d0c02b247c9', class: "menu-list" }, h("div", { key: '8056b07062eb924511332b20c6d7262a80b2b168', class: "menu-list__left" }), h("slot", { key: 'cc962eec98c46a3a49f831bde10c2b3d5f3dff53' }), h("div", { key: 'c8fc6e5921aa3e4d98403c876d4e5cafc1e0bd9e', class: "menu-list__right" }))));
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
