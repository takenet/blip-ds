import { Host, h } from "@stencil/core";
export class Warning {
    render() {
        return (h(Host, { key: '331fd4d1aa907d46aab30de0f5b525bf0b3ae584' }, h("div", { key: 'efe41525e8e08919040444db85b171313e8e9160', class: "warning__body" }, h("bds-icon", { key: 'bb2e85d6198bcbef9a591e2b5ad5ce6d63128322', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'c7e6f37ff0943b6ef52521b174df27f8fa930d4a', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: 'a9d03cb79009651d33258ef99c8c8926174e6c64' })))));
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
