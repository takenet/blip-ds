import { h, Host } from "@stencil/core";
export class UaiNavbarContent {
    render() {
        return (h(Host, { key: 'ef889b213c2f4fdb101b90a23408177205c64dab', class: { NavbarContent: true } }, h("slot", { key: '696a6c70d5a1111e8b65d1cb1e72277fc28d0811' })));
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
