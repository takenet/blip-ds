import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: '67cb6b04ef1ebb07993265b6aad03e1c371516c7' }, h("div", { key: '3d2c9080e608b5b7d3aca22ce540f0b411c13059', class: "menu-list" }, h("div", { key: 'af65ef1695a2231690a6b908048c5cadf28b0fbe', class: "menu-list__left" }), h("slot", { key: 'e7736e8569c79b3eab1fd9294e430bc48205f380' }), h("div", { key: 'd8cf89d965f887032f4970123d56f2995aacc5e8', class: "menu-list__right" }))));
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
