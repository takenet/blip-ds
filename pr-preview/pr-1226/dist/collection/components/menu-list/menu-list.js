import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '3067387d8e7ebced8df4af0c1a6862a060bbac1b' }, h("div", { key: '3cd362876aca385c6ab5dfad8bb56173d084d721', class: "menu-list" }, h("div", { key: '6aa27a10a5c34fd09b7f690f8c8acea0875174a9', class: "menu-list__left" }), h("slot", { key: '3549cd8720af844c69bf2980e2f76cff25184514' }), h("div", { key: 'd1138aec52240186d41599bdb5320f95de5837ff', class: "menu-list__right" }))));
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
