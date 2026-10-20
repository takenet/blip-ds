import { Host, h } from "@stencil/core";
export class MenuList {
    render() {
        return (h(Host, { key: 'fe25f090f037c13d25c2269eb90a426f37dc0263' }, h("div", { key: '1f134f1bf02e2f2009429c331041e062d1d9ba6e', class: "menu-list" }, h("div", { key: '1029c636eef1e5889bcc0e4c160f7ee5913a06db', class: "menu-list__left" }), h("slot", { key: 'ab82eaba4536c1f9276df81b0bba90215bbf7252' }), h("div", { key: 'a3bea88a6b53e83ed2b6d5dc948be2f0b3b768cd', class: "menu-list__right" }))));
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
