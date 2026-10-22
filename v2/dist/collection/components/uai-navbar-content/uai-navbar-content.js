import { h, Host } from "@stencil/core";
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: '5691313c6ab5afce57ac0c480bc0abca3d9a1ab0', class: { NavbarContent: true } }, h("slot", { key: 'c25739390eddb698da251f11336c137415ecbe74' })));
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
