import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'c66988304d638713cd70d33e0068b30cb315ad03' }, h("div", { key: 'fa357e0584b57bd7383de29e4a67b73de1adb4d0', class: "warning__body" }, h("bds-icon", { key: '4f860180d1500574a64e206786413f44303525e5', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'bfd819b12328f30692d08dfdcfa48678c3fb9605', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '58bd6ed2f53877ea0890b4de4079775a1ca58e24' })))));
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
