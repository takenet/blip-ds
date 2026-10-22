import { h, Host } from "@stencil/core";
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: '044038bdc03a26f1aa092dc44a0e938f8e0536db', class: { NavbarContent: true } }, h("slot", { key: '7a7377972ad9d5caa96d240579ce6928eb41854f' })));
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
