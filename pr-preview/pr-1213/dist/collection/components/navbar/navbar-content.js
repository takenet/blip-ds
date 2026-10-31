import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '28b52e926f0a4d1f611557bf0807e3c00ed8e151', class: { NavbarContent: true } }, h("slot", { key: 'a70da11070fe3c855cda54a6e44d93ce1f5b1d40' })));
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
