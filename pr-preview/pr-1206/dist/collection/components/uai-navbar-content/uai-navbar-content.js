import { h, Host } from "@stencil/core";
/**
 * Group of items inside a uai-navbar.
 *
 * @slot - Items of the group.
 */
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: 'cb8ad5b44065ecfbc93a4a4460f434d41f65dc1e', class: { NavbarContent: true } }, h("slot", { key: '478b01ce8607cfaf5e383709718b350a2aaf6c18' })));
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
