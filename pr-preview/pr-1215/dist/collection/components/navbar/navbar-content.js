import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '1ef0a630e6f4e888f7118b65507b5c23023cffc4', class: { NavbarContent: true } }, h("slot", { key: 'd2f8cb0b8f5d5ddd2c8f3163673fec9102905f6a' })));
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
