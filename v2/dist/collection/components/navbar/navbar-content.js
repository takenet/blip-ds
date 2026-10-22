import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: '57318ebe87dbff4e715ef1eaa1fe45f1e5fac26f', class: { NavbarContent: true } }, h("slot", { key: 'adccee9899de5567172f3b06cab944c945949ff9' })));
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
