import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '84dda48b493ef151d468036b922ac906b5f45455', class: { NavbarContent: true } }, h("slot", { key: 'd67690dbd0b01ff6a10d2333bbdd811d96207c7c' })));
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
