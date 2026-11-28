import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: 'dd54a777a276511b7c9d59c78a47d31c41b9fbfc', class: { NavbarContent: true } }, h("slot", { key: 'c97d37c96d10e90bf8aa1a7885b19e25e8c33207' })));
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
