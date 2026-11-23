import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '51a789fb7bf354ebad421ea99aa6e44935ea2afc' }, h("div", { key: '3f3262e36cfeb9c52721b0c2be77b767b6aab648', class: "warning__body" }, h("bds-icon", { key: '601f3d2d091a9eef8369334dc2bc317dc4d185ec', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '9e628d1ba8f751a870aff650bc8c9b0c289ff630', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '704e82126a79a6407f3b878c9dcddbf7120ab191' })))));
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
