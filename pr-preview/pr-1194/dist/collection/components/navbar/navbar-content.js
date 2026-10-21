import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '6bab4d574fd2835acd5de2c66fad69aedfd48d23', class: { NavbarContent: true } }, h("slot", { key: '60bcee2f36d47c47fd50ee1494a2875f582cd603' })));
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
