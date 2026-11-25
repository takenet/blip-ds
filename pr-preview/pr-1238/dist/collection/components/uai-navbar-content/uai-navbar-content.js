import { h, Host } from "@stencil/core";
/**
 * Group of items inside a uai-navbar.
 *
 * @slot - Items of the group.
 */
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: '036128ed2c5cedb48454c30ac76aab973b2f68bf', class: { NavbarContent: true } }, h("slot", { key: 'cbc8316108c5c8ccadc96421baa3d82c1095868a' })));
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
