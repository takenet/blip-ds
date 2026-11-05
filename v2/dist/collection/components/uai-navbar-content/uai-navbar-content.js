import { h, Host } from "@stencil/core";
/**
 * Group of items inside a uai-navbar.
 *
 * @slot - Items of the group.
 */
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: '0cf05aee567c4bb6fba034f464cc9ad61575f2b3', class: { NavbarContent: true } }, h("slot", { key: 'dab509a76363eef0d91ec540005fc68873d74ca5' })));
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
