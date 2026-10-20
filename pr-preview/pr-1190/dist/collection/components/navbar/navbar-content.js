import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '53da2440abb6c48340742929fa183e8923c448a2', class: { NavbarContent: true } }, h("slot", { key: '8302d02a83f1e485fda7c62db03494087f9e9ca1' })));
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
