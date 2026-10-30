import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: 'a84557b3e3c5a048d46263a7c0c3bf75722ee254', class: { NavbarContent: true } }, h("slot", { key: 'ca126bb9fa14fc951367a2887c0f08aaea4dcb41' })));
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
