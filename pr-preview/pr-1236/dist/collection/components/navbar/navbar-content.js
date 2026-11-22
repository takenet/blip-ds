import { h, Host } from "@stencil/core";
export class NavbarContent {
    render() {
        return (h(Host, { key: 'af943293fea08b94bd31d14130252824bb07200a', class: { NavbarContent: true } }, h("slot", { key: 'af7a915aa6837d0f426f2df99675ba00b83f998d' })));
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
