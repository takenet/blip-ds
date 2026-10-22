import { h, Host } from "@stencil/core";
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: '0a33fd6b4e3b651cc80fdae336fa68e8d5ca5b14', class: { NavbarContent: true } }, h("slot", { key: 'cd56785bdf3be0ac973b03c5482a1e69b2b5ef99' })));
    }
    static get is() { return "uai-navbar-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-navbar-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-navbar-content.css"]
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=uai-navbar-content.js.map
