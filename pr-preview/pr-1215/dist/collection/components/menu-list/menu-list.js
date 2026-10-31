import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '8a52976dd400c4a52043e7403770aa0d34049e09' }, h("div", { key: 'd8547c8641168879bcfbeaf87990f1ef337a0b1b', class: "menu-list" }, h("div", { key: '388bfd9a6234a403a366085582481f4b2e1d946f', class: "menu-list__left" }), h("slot", { key: '97daf5a78cd31b4fea4f33ef37d9bbb95a7eea4f' }), h("div", { key: '29dca96e886419f5f1da9d5e4ff7b21a3bd280bc', class: "menu-list__right" }))));
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
