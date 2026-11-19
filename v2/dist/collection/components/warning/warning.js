import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: 'b9aa1dad1ef8ef85e6189d274df68ffef333b31d' }, h("div", { key: '949c938185c8f7db0bf178b85e29ae39fbb2e097', class: "warning__body" }, h("bds-icon", { key: '0279d655be3260ee9efaca7b82f9fa36c1ba93a3', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '283de6ea184975abfe689b7a4ef45b7555f2b547', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '78c60b4dcb84ed34fe72305389292b49132936eb' })))));
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
