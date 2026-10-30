import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'f0c55dc64135e5b03a8deb350858752d3e94e3f5' }, h("div", { key: '02e3f82a7194f749186409ab94ed585d50c7604b', class: "menu-list" }, h("div", { key: '2f8d712b4eed09e65a18f2ba23efa7604c84e2c3', class: "menu-list__left" }), h("slot", { key: '8780422b2da11808f4e4e7b00e905ffccd6c7021' }), h("div", { key: '8ddd6739f29b0068db33daffb3aee97ab0ecfe51', class: "menu-list__right" }))));
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
