import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: 'b68e1198dcfb7b36dd7167bae21bd5c9d377d882', class: { NavbarContent: true } }, h("slot", { key: '6bef48287fe1fe0022d8cc699f30eb6ca24a2577' })));
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
