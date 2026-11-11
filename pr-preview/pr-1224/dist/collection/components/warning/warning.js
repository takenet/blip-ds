import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'cc3f36da36d5646a793213f40a0e0770872a6451' }, h("div", { key: 'f8828e862c56add57af06c6c26755bda12795584', class: "warning__body" }, h("bds-icon", { key: 'f6fe3652a0fe4f7a0bd83a2a143b9491e44bd236', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'f55a37799abadf40e82383d93ebab234c1f815d6', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '09e1e5b7c02734d515ba94af70b0cb90b9c34521' })))));
    }
    static get is() { return "bds-warning"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["warning.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["warning.css"]
        };
    }
}
