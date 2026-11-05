import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'e9c826f21617dee32af03b57018a38b64b4a0de2' }, h("div", { key: '94daeeb3307976767d06cd9e0af760f83b17fcd0', class: "menu-list" }, h("div", { key: '9cd937ae18ca102972ce7b4f4ed7d27bac6334ad', class: "menu-list__left" }), h("slot", { key: '310b190b4570d712f3e826c377249f30378392c4' }), h("div", { key: '672b999ba1ff3f91f0ccf28487e9d21702645468', class: "menu-list__right" }))));
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
