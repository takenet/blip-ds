import { h, Host } from "@stencil/core";
/**
 * Group of items inside a uai-navbar.
 *
 * @slot - Items of the group.
 */
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: '49690b9bde3cdf063519dae794498bb669380037', class: { NavbarContent: true } }, h("slot", { key: 'b82d8485d5d8c628c1fce26ed43156b582c2310c' })));
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
