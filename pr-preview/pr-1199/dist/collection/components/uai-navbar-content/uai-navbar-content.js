import { h, Host } from "@stencil/core";
/**
 * Group of items inside a uai-navbar.
 *
 * @slot - Items of the group.
 */
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: 'fed44eb1322d1d13795f4f81e3e151a56299dcf4', class: { NavbarContent: true } }, h("slot", { key: '83c5b1d741694ad118c9fc26dd2f37cae7eccd7f' })));
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
