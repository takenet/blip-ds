import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'd184abdc0ef5fc595495c57c5c92b687f5514636' }, h("div", { key: 'bb9ff1d73ff62fdcc25728399bf5d38f30add85e', class: "menu-list" }, h("div", { key: 'ea7c3f1fcfca32847e587608888af12e5f3ed6e4', class: "menu-list__left" }), h("slot", { key: 'a35c1c344293610fec23137b4a9a67c05c2d1ea0' }), h("div", { key: 'a3138ef9c0907c7ed1f90ce7993c9ed58b97a1c2', class: "menu-list__right" }))));
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
