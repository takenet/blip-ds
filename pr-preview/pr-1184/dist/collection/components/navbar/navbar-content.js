import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: 'b825f8ba288eaeebc61953db273933c51856d6df', class: { NavbarContent: true } }, h("slot", { key: '79f83625e8e31ae01898e9f248bb54968da0d899' })));
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
