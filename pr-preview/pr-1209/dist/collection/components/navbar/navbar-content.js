import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: 'c47bc3dd9756d4f2b0b4de257cee43ab8ba96780', class: { NavbarContent: true } }, h("slot", { key: '2c096b0f1741f9c56bf2e6a5f9cb9172f480ab4d' })));
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
