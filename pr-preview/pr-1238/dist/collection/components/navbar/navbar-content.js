import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '9d7fc38a47b6df935e5d1a8ebe9ee1987c21ce3b', class: { NavbarContent: true } }, h("slot", { key: '3ae53b88b5694a246d1de267368b4ba3d0e01f74' })));
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
