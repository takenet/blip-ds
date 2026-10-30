import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: 'ad8981dbe454bf83c1a5179f67668eb18644f6a5', class: { NavbarContent: true } }, h("slot", { key: 'ec3497e4b96168ec584d8670f6aecb4146d2fc02' })));
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
