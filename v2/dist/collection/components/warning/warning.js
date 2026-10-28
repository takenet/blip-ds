import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '8a3ffdf11b2ab3ff4bb1d1974a8c8c071a9bcdf4' }, h("div", { key: '53fd550544b0a6905d094a6246f90a07adac5510', class: "warning__body" }, h("bds-icon", { key: '12392acaa84a4bf5a51ff0376a01f9bbfb5c3fac', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '84f31fb5726c15290ace69cae658f4f03940ff9b', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'c53e870c985bc9146c417e9af1813c718fd60b76' })))));
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
