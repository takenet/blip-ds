import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '8fefb24b4cb32d09ed7191a164e8beda58f81587', class: { NavbarContent: true } }, h("slot", { key: '2c9ccd0c5425bb084a96c3a31f2202aa1851f1f1' })));
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
