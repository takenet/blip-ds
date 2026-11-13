import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '9d30d12c5653aa36a9f7146249b2235aa71b52aa', class: { NavbarContent: true } }, h("slot", { key: '9dac23ccca72b844f0051dde41dfa6267f4759e7' })));
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
