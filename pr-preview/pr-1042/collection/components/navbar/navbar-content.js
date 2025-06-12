import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '458985a119eaf4b480b003c853dde0af4f477a30', class: { NavbarContent: true } }, h("slot", { key: '79eed71f0436fd4c60fee3d9bdf279276c28c19b' })));
    }
    static get is() { return "bds-navbar-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["navbar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["navbar.css"]
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=navbar-content.js.map
